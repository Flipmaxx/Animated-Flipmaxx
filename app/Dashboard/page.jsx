'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Menu, X, LogOut, LayoutDashboard, Settings } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get('/api/Auth/login');
      } catch (err) {
        router.push('/login');
      }
    };
    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.delete('/api/Auth/login');
      router.push('/login');
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  return (
   <div>
        <div className="min-h-screen flex flex-col md:flex-row">
    
    <div className="w-full md:w-64 bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {(menuOpen || typeof window === 'undefined' || window.innerWidth >= 768) && (
        <ul className="space-y-4">
          <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
            <LayoutDashboard size={18} /> Home
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
            <Settings size={18} /> Settings
          </li>

          <Link href={`/Dashboard/Jobs`}>
            <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
            <Settings size={18} /> Jobs
          </li>
          </Link>

          
          <Link href={`/Dashboard/Jobs`}>
            <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300 mt-7">
            <Settings size={18} /> carrrers
          </li>
          </Link>

          <li
            onClick={handleLogout}
            className="flex items-center gap-2 cursor-pointer hover:text-red-400"
          >
            <LogOut size={18} /> Logout
          </li>
        </ul>
      )}
    </div>

    <div className="flex-1 bg-gray-100 p-6">
      <h1 className="text-2xl font-semibold mb-4">Welcome to the Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow">Card 1</div>
        <div className="bg-white p-4 rounded shadow">Card 2</div>
        <div className="bg-white p-4 rounded shadow">Card 3</div>
      </div>
    </div>
  </div>
   </div>
  );
}