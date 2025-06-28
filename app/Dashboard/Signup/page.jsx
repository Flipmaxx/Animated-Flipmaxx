'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Eye, EyeOff } from 'lucide-react';

export default function Signup() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    EmployeeName: '',
    EmployeeID: '',
    email: '',
    password: '',
  });

  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (formData.password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post('/api/Auth', formData);
      if (res.status === 200 || res.status === 201) {
        router.push('/Dashboard');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-black rounded-lg shadow-md bg-white">
      <h1 className="text-2xl font-bold mb-4 text-black text-center">Signup</h1>

      {error && (
        <p className="mb-2 text-sm text-center text-black font-medium border border-black bg-white p-2 rounded">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="EmployeeName"
          placeholder="Employee Name"
          value={formData.EmployeeName}
          onChange={handleChange}
          className="w-full border border-black px-3 py-2 rounded text-black bg-white placeholder-black focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
        <input
          type="text"
          name="EmployeeID"
          placeholder="Employee ID"
          value={formData.EmployeeID}
          onChange={handleChange}
          className="w-full border border-black px-3 py-2 rounded text-black bg-white placeholder-black focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-black px-3 py-2 rounded text-black bg-white placeholder-black focus:outline-none focus:ring-2 focus:ring-black"
          required
        />

        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-black px-3 py-2 pr-10 rounded text-black bg-white placeholder-black focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-2 text-black"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <div>
          <input
            type={showPassword ? 'text' : 'password'}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border border-black px-3 py-2 rounded text-black bg-white placeholder-black focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:opacity-90 transition-opacity"
          disabled={loading}
        >
          {loading ? 'Signing up...' : 'Signup'}
        </button>
      </form>
    </div>
  );
}
