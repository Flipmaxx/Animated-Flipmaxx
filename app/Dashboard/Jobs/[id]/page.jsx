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

  if (!job) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow space-y-4">
      {isEditing ? (
        <form onSubmit={handleUpdate} className="space-y-4">
          {['position', 'description', 'experience', 'location'].map((field) => (
            <div key={field}>
              <label className="block font-medium capitalize">{field}</label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded mt-1"
              />
            </div>
          ))}
          <div className="flex justify-between">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Update
            </button>
            <button
              type="button"
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-blue-700">{job.position}</h2>
          <p className="text-gray-700">{job.description}</p>
          <p><strong>Experience:</strong> {job.experience}</p>
          <p><strong>Location:</strong> {job.location}</p>

          <div className="flex gap-4 mt-4">
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}