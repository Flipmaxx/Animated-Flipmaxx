'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function JobDetails() {
  const { id } = useParams();
  const router = useRouter();
  const [job, setJob] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    position: '',
    description: '',
    experience: '',
    location: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get('/api/Auth/login');
      } catch (err) {
        router.push('/login');
      }
    };
    checkAuth();
  }, [router]);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(`/api/job/${id}`);
        setJob(res.data.data);
        setFormData(res.data.data);
      } catch (error) {
        console.error('Error fetching job:', error);
      }
    };
    if (id) fetchJob();
  }, [id]);

  const validate = () => {
    const newErrors = {};
    if (!formData.position.trim()) newErrors.position = 'Position is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.experience.trim()) newErrors.experience = 'Experience is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: '',
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      await axios.put(`/api/job/${id}`, formData);
      setIsEditing(false);
      setJob(formData);
    } catch (error) {
      console.error('Error updating job:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/job/${id}`);
      router.push('/Dashboard/Jobs');
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  if (!job) return <div className="p-8 text-center text-gray-600">Loading...</div>;

  return (
    <div className="min-h-full flex items-center justify-center bg-white px-4 py-8">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-8 space-y-6">
        {isEditing ? (
          <>
            <h2 className="text-2xl font-semibold text-gray-800 text-center">Edit Job Details</h2>
            <form onSubmit={handleUpdate} className="space-y-5">
              {['position', 'description', 'experience', 'location'].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 capitalize mb-1">
                    {field}
                  </label>
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className={`block w-full border px-4 py-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 ${
                      errors[field]
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:ring-black'
                    }`}
                  />
                  {errors[field] && (
                    <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                  )}
                </div>
              ))}
              <div className="flex justify-between gap-4 pt-4">
                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-500 transition"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="w-full bg-gray-400 text-white py-2 rounded-xl hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="space-y-6 bg-white  p-7 rounded-xl">
            <h1 className="text-4xl font-bold text-black dark:text-black">{job.position}</h1>
            <p className="text-lg text-gray-700 dark:text-gray-900 leading-relaxed">{job.description}</p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <h2 className="text-lg font-medium text-gray-900 dark:text-black">Experience:</h2>
              <span className="text-base font-semibold text-black dark:text-black">{job.experience}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <h2 className="text-lg font-medium text-gray-800 dark:text-black">Location:</h2>
              <span className="text-base font-semibold text-black dark:text-black">{job.location}</span>
            </div>
            <div className="flex iytems-end justify-end gap-4 pt-6 p-5">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-black text-white  px-6 py-2 rounded-md hover:bg-black transition"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
              >
                Delete 
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
