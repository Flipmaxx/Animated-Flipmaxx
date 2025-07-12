
  'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Leads() {
    const router = useRouter();
  const [responses, setResponses] = useState([]);
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
  const fetchResponses = async () => {
    try {
      const res = await axios.get('/api/Contact');
      setResponses(res.data);
    } catch (error) {
      console.error('Failed to fetch contact responses:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchResponses();
}, []);

  return (
    <div className="min-h-screen bg-gray-100 text-black py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Contact Form Submissions</h1>

      {loading ? (
        <div className="text-center text-gray-600">Loading...</div>
      ) : responses.length === 0 ? (
        <div className="text-center text-gray-600">No responses found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
            <thead className="bg-black text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Phone</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Subject</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Message</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
              </tr>
            </thead>
            <tbody>
              {responses.map((entry, index) => (
                <tr key={entry._id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-6 py-4 text-sm">{entry.name}</td>
                  <td className="px-6 py-4 text-sm">{entry.email}</td>
                  <td className="px-6 py-4 text-sm">{entry.phone}</td>
                  <td className="px-6 py-4 text-sm">{entry.subject}</td>
                  <td className="px-6 py-4 text-sm">{entry.message}</td>
                  <td className="px-6 py-4 text-sm">
                    {new Date(entry.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
