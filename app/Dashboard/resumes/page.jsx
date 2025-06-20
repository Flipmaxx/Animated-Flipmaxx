'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Resumes() {
  const router = useRouter();
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔒 Auth Check
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

  // 📥 Fetch Data
  useEffect(() => {
    async function fetchCareers() {
      try {
        const res = await fetch('/api/careers');
        const data = await res.json();
        setCareers(data);
      } catch (error) {
        console.error('Error fetching careers:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchCareers();
  }, []);

  // 📄 View PDF from base64
  const handleViewResume = (base64) => {
    const byteCharacters = atob(base64);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length).fill().map((_, i) => slice.charCodeAt(i));
      byteArrays.push(new Uint8Array(byteNumbers));
    }

    const blob = new Blob(byteArrays, { type: 'application/pdf' });
    const blobUrl = URL.createObjectURL(blob);
    window.open(blobUrl, '_blank');
  };

  // 🕐 Loading State
  if (loading) return <div className="text-center mt-10 text-xl">Loading...</div>;

  return (
    <div className="p-3 mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Career Submissions</h1>

      {careers.length === 0 ? (
        <p className="text-center text-gray-500">No submissions found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {careers.map((career) => (
            <div
              key={career._id}
              className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 text-black"
            >
              <h2 className="text-xl font-semibold mb-2">{career.name}</h2>
              <p><span className="font-medium">Email:</span> {career.email}</p>
              <p><span className="font-medium">Phone:</span> {career.phone}</p>
              <p><span className="font-medium">Place:</span> {career.place}</p>
              <p><span className="font-medium">Current CTC:</span> {career.currentCTC}</p>
              <p><span className="font-medium">Expected CTC:</span> {career.expectedCTC}</p>
              <p><span className="font-medium">Talk:</span> {career.talk}</p>
              <p><span className="font-medium">Submitted At:</span> {new Date(career.submittedAt).toLocaleString()}</p>

              {career.resume ? (
                <button
                  onClick={() => handleViewResume(career.resume)}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  View Resume
                </button>
              ) : (
                <p className="mt-4 text-red-500">No resume uploaded</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
