'use client';

import { useState } from 'react';
import axios from 'axios';
import { ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert('Please accept terms and conditions.');
      return;
    }

    try {
      const response = await axios.post('/api/Contact', formData);
      console.log('Success:', response.data);
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong.');
    }
  };

  return (
    <section className="w-full text-white py-16 bg-white">
      <div className="container mx-auto px-0 md:px-4 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start bg-gradient-to-r from-black to-neutral-900 p-2 md:p-10 rounded-2xl py-7">
          {/* Left Text */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
              Wherever You Are, We Can Help <span className="text-white">.</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg">
              FlipMaxx empowers companies through proven expertise, delivering tailored
              solutions that drive growth, efficiency, and long-term business success.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 sm:p-8 space-y-6 text-black shadow-xl w-full"
          >
            <h3 className="text-center text-gray-700 font-semibold text-base sm:text-lg">
              Have A Project In Mind Let’s Talk
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="border rounded-md px-4 py-3 text-sm outline-none w-full"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-md px-4 py-3 text-sm outline-none w-full"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="border rounded-md px-4 py-3 text-sm outline-none w-full"
                required
              />
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="border rounded-md px-4 py-3 text-sm outline-none w-full"
                required
              >
                <option value="">Select Subject</option>
                <option value="Consulting">Consulting</option>
                <option value="Development">Development</option>
                <option value="Marketing">Marketing</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full border rounded-md px-4 py-3 text-sm outline-none resize-none"
              required
            />

            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="accent-black"
              />
              Accept Terms and Conditions
            </label>

            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 flex items-center justify-center gap-2 text-sm w-full sm:w-auto ml-auto"
            >
              Submit <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
