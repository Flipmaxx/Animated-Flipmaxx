'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Plus, X, LogOut } from 'lucide-react';
import Link from 'next/link';

export default function Jobs() {
  const router = useRouter();
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    position: '',
    description: '',
    experience: '',
    location: '',
  });
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

  const handleLogout = async () => {
    try {
      await axios.delete('/api/Auth/login');
      localStorage.removeItem('token');
      router.push('/login');
    } catch (err) {
      console.error('Logout failed', err);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await axios.get('/api/job');
      setJobs(res.data.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/job', formData);
      setShowModal(false);
      setFormData({ position: '', description: '', experience: '', location: '' });
      fetchJobs();
    } catch (error) {
      console.error('Failed to add job:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Jobs created</h1>
        <div className="flex gap-3">
          <button
            onClick={() => setShowModal(true)}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-black flex items-center gap-2 "
          >
            <Plus size={18} /> Add Job
          </button>
        
        </div>
      </div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {jobs.map((job) => (
    <Link href={`/Dashboard/Jobs/${job._id}`} key={job._id}>
      <div className="bg-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-all h-full">
        <h2 className="text-xl font-semibold text-white mb-2">{job.position}</h2>
        <p className="text-white mb-3">{job.description}</p>
        <p className="text-md text-white mb-1">
          <strong>Experience:</strong> {job.experience}
        </p>
        <p className="text-md text-white">
          <strong>Location:</strong> {job.location}
        </p>
      </div>
    </Link>
  ))}
</div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={() => setShowModal(false)}
            >
              <X size={20} />
            </button>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Add Job</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-medium text-gray-700">Position</label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  className="w-full border px-3 py-2 rounded mt-1"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full border px-3 py-2 rounded mt-1"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700">Experience</label>
                <input
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="w-full border px-3 py-2 rounded mt-1"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full border px-3 py-2 rounded mt-1"
                />
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}