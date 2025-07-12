'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function CareerForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    place: '',
    phone: '',
    position: '',
    currentCTC: '',
    expectedCTC: '',
    talk: '',
  });

  const [resume, setResume] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type !== 'application/pdf') {
        setError('Only PDF files are allowed.');
        setResume(null);
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        setError('File size must be less than 2MB.');
        setResume(null);
        return;
      }
      setError('');
      setResume(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resume) {
      setError('Please upload a valid PDF resume under 2MB.');
      return;
    }

    const form = new FormData();
    Object.entries(formData).forEach(([key, val]) => form.append(key, val));
    form.append('resume', resume);

    try {
      await axios.post('/api/careers', form);
      setSuccess('Application submitted successfully!');
      setError('');
      alert('Application submitted successfully!');
      setTimeout(() => {
        router.push('/');
      }, 1000);
    } catch (err) {
      setError(err?.response?.data?.message || 'Something went wrong.');
      setSuccess('');
      alert('Application submission error!');
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-3xl font-bold text-center mb-6">Job Application</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block mb-1 font-medium">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-1 font-medium">Phone *</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block mb-1 font-medium">Current Location *</label>
          <input
            type="text"
            name="place"
            required
            value={formData.place}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Current CTC */}
        <div>
          <label className="block mb-1 font-medium">Current CTC *</label>
          <div className="flex gap-2">
            <input
              type="text"
              name="currentCTC"
              required
              value={formData.currentCTC}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <span className="flex items-center">LPA</span>
          </div>
        </div>

        {/* Expected CTC */}
        <div>
          <label className="block mb-1 font-medium">Expected CTC *</label>
          <div className="flex gap-2">
            <input
              type="text"
              name="expectedCTC"
              required
              value={formData.expectedCTC}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <span className="flex items-center">LPA</span>
          </div>
        </div>

        {/* Position */}
        <div>
          <label className="block mb-1 font-medium">Position *</label>
          <select
            name="position"
            required
            value={formData.position}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Position</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Project Manager">Project Manager</option>
            <option value="Marketing Executive">Marketing Executive</option>
            <option value="DevOps Engineer">DevOps Engineer</option>
          </select>
        </div>

        {/* Resume Upload */}
        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">Upload Resume (PDF, Max 2MB) *</label>
          <input
            type="file"
            accept=".pdf"
            required
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* About */}
        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">Tell us about yourself *</label>
          <textarea
            name="talk"
            required
            rows={4}
            value={formData.talk}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Messages */}
        {error && <div className="md:col-span-2 text-red-600 text-sm font-medium">{error}</div>}
        {success && <div className="md:col-span-2 text-green-600 text-sm font-medium">{success}</div>}

        {/* Submit */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-700 transition text-white py-2 px-4 rounded"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}