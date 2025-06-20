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

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
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
    <div className="min-h-full flex items-center justify-center bg-gray-100 px-4 mt-12">
      <div className="w-full max-w-full bg-white  space-y-6">
        {isEditing ? (
          <>
            <h2 className="text-2xl font-semibold text-gray-800 text-center">Edit Job Details</h2>
            <form onSubmit={handleUpdate} className="space-y-5">
              {['position', 'description', 'experience', 'location'].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 capitalize">
                    {field}
                  </label>
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              ))}
              <div className="flex justify-between gap-4 pt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
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
<div className="w-full max-w-7xl mx-auto bg-white dark:bg-black shadow-2xl rounded-2xl px-6 sm:px-8 py-10 space-y-8">
  <div className="space-y-6">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white break-words">
      {job.position}
    </h1>

    <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
      {job.description}
    </p>
 <div className="flex flex-col sm:flex-row sm:items-center gap-2">
        <h2 className="text-lg sm:text-xl font-medium text-gray-800 dark:text-gray-200">Experience:</h2>
        <span className="text-base font-semibold text-black dark:text-white">{job.experience}</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-2 m">
        <h2 className="text-lg sm:text-xl font-medium text-gray-800 dark:text-gray-200">Location:</h2>
        <span className="text-base font-semibold text-black dark:text-white">{job.location}</span>
      </div>
   
  </div>

  <div className="flex flex-wrap justify-start gap-4 pt-8">
    <button
      className="bg-white text-black border border-black dark:bg-black dark:text-white dark:border-white px-6 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-white dark:hover:text-black transition-all duration-200"
      onClick={() => setIsEditing(true)}
    >
      Edit
    </button>
    <button
      className="bg-black text-white border border-black dark:bg-white dark:text-black dark:border-white px-6 py-2 rounded-xl hover:bg-gray-900 dark:hover:bg-gray-200 transition-all duration-200"
      onClick={handleDelete}
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
