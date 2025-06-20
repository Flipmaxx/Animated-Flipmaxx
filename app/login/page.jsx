'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const response = await axios.post('/api/Auth/login', formData, {
        withCredentials: true,
      });

      if (response.status === 200) {
        router.push('/Dashboard');
      } else {
        setError('Login failed. Please try again.');
        alert("error")
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
<div className='bg-black'>

      <div className="min-h-screen max-w-2xl mx-auto my-auto bg-black text-white">
      <div className='grid grid-cols-1 gap-10 max-w-full p-5 md:p-12'>
        <div className="w-full flex flex-col items-center md:items-center justify-center gap-4 text-center md:text-left  rounded-xl">
  <img
    src="./Images/LOGOWHITE.png"
    alt="Logo"
    className="max-w-auto h-auto"
  />
  <h1 className="text-white font-bold text-xl sm:text-3xl md:text-4xl lg:text-3xl leading-tight">
    We are the best in business
  </h1>
  <p className='text-center'>we are service provider that helps businesses transform through design and marketing strategies, likely with an international presence.</p>
</div>

            <form
        onSubmit={handleSubmit}
        className="bg-white text-black p-8 rounded-lg w-full max-w-full shadow-xl"
      >
        <div className='flex items-center justify-center mx-auto max-w-sm'>
            <img src="./Images/Flip.png" alt="" />
            
             {/* <h2 className="text-2xl font-bold mb-6 text-center">Login</h2> */}
        </div>


        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {error && <p className="mb-4 text-red-600 text-sm text-center">{error}</p>}

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1">Password</label>
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      </div>
    </div>
</div>
  );
}