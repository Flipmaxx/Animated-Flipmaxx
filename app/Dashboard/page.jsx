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
  <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
    
{/* Sidebar */}
<div className="w-full md:w-64 bg-black text-white p-5 shadow-md z-10">
  {/* Header */}
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-extrabold tracking-wide">Dashboard</h2>
    <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
      {menuOpen ? <X /> : <Menu />}
    </button>
  </div>

  {/* Sidebar Links */}
  {(menuOpen || typeof window === 'undefined' || window.innerWidth >= 768) && (
    <div className="space-y-8 text-sm font-medium">
      
      {/* Main Section */}
      <div>
        <p className="uppercase text-gray-400 text-xs mb-3 tracking-wider">Main</p>
        <ul className="space-y-4">
          <li className="flex items-center gap-2 cursor-pointer hover:text-blue-400 transition-all">
            <LayoutDashboard size={18} />
            <span>Home</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-blue-400 transition-all">
            <Settings size={18} />
            <span>Settings</span>
          </li>
        </ul>
      </div>

      {/* Management Section */}
      <div>
        <p className="uppercase text-gray-400 text-xs mb-3 tracking-wider">Management</p>
        <ul className="space-y-4">
          <li>
            <Link
              href="/Dashboard/Jobs"
              className="flex items-center gap-2 hover:text-blue-400 transition-all"
            >
              <Settings size={18} />
              <span>Jobs</span>
            </Link>
          </li>
          <li>
            <Link
              href="/Dashboard/resumes"
              className="flex items-center gap-2 hover:text-blue-400 transition-all"
            >
              <Settings size={18} />
              <span>Careers</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Account Section */}
      <div>
        <p className="uppercase text-gray-400 text-xs mb-3 tracking-wider">Account</p>
        <ul>
          <li
            onClick={handleLogout}
            className="flex items-center gap-2 cursor-pointer hover:text-red-400 transition-all"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      
    </div>
  )}
</div>



    {/* Content Area */}
    <div className="flex-1 p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Welcome to the Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-lg font-semibold text-gray-700">Card 1</h2>
          <p className="mt-2 text-gray-500 text-sm">Some quick info here.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-lg font-semibold text-gray-700">Card 2</h2>
          <p className="mt-2 text-gray-500 text-sm">Insights or data here.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-lg font-semibold text-gray-700">Card 3</h2>
          <p className="mt-2 text-gray-500 text-sm">Analytics or metrics.</p>
        </div>
      </div>
    </div>
  </div>
</div>
 );
}