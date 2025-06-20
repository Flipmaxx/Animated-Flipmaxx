'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Resumes() {
  const router = useRouter();
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);

 
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

  const handleViewResume = (base64) => {
    const byteCharacters = atob(base64);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length)
        .fill()
        .map((_, i) => slice.charCodeAt(i));
      byteArrays.push(new Uint8Array(byteNumbers));
    }

    const blob = new Blob(byteArrays, { type: 'application/pdf' });
    const blobUrl = URL.createObjectURL(blob);
    window.open(blobUrl, '_blank');
  };

  const handleReject = async (id, email) => {
    const confirmReject = confirm('Are you sure you want to reject this application?');
    if (!confirmReject) return;

    try {
      await axios.delete(`/api/careers/${id}`, { data: { email } }); 
      setCareers((prev) => prev.filter((career) => career._id !== id));
    } catch (error) {
      console.error('Error rejecting career:', error);
      alert('Failed to reject. Try again.');
    }
  };

  if (loading) return <div className="text-center mt-10 text-xl">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Career Submissions</h1>

      {careers.length === 0 ? (
        <p className="text-center text-gray-500">No submissions found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {careers.map((career) => (
            <div
              key={career._id}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-200 text-black flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold mb-2">{career.name}</h2>
                <p><span className="font-medium">Email:</span> {career.email}</p>
                <p><span className="font-medium">Phone:</span> {career.phone}</p>
                <p><span className="font-medium">Place:</span> {career.place}</p>
                <p><span className="font-medium">Current CTC:</span> {career.currentCTC}</p>
                <p><span className="font-medium">Expected CTC:</span> {career.expectedCTC}</p>
                <p><span className="font-medium">Talk:</span> {career.talk}</p>
                <p><span className="font-medium">Submitted At:</span> {new Date(career.submittedAt).toLocaleString()}</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                {career.resume ? (
                  <button
                    onClick={() => handleViewResume(career.resume)}
                    className="px-4 py-2 bg-black text-white rounded hover:bg-gray-700"
                  >
                    View Resume
                  </button>
                ) : (
                  <p className="text-red-500">No resume uploaded</p>
                )}

                <button
                  onClick={() => handleReject(career._id, career.email)}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
