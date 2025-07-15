'use client';

import { useState } from 'react';
import axios from 'axios';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
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
    <section className="w-full text-white  bg-black">


      <div className="relative w-full h-96 bg-black overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover "
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="./Images/LOOP.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/20" />
        <div className="relative z-10 flex items-start p-4 justify-start h-full">
          <h2 className="text-white text-3xl font-bold text-start ">Contact us</h2>
        </div>
      </div>

        <div>
            {/* <h1 className='text-4xl px-4 py-9'>Have A Project In Mind Let’s Talk ?</h1> */}
        </div>


      <div className="container mx-auto px-0 md:px-4 xl:px-0">
        <div className="grid grid-cols-1  gap-10 items-start bg-black p-2 md:p-10 rounded-2xl py-7 max-w-4xl mx-auto">
           <div>

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

<section className="bg-black py-12 px-4 sm:px-6 lg:px-8 mt-10">
  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
    
 
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-black">Visit Our Office</h3>
      <p className="text-white">
        <strong>Flipmaxx Global LLP</strong><br />
      Mangalassery Tower, Eloor Rd, opposite Ganapathy Temple, North Kalamassery, Kalamassery, Kochi, Kerala 683104
      </p>
      <p className="text-white">
        <strong>Email:</strong> <a href="mailto:flipmaxxglobal@gmail.com" className="text-white underline">flipmaxxglobal@gmail.com</a><br />
        <strong>Phone:</strong> <a href="tel:+91" className="text-white underline">+91 </a><br />
       
      </p>
    </div>

  
    <div className="rounded-xl overflow-hidden shadow-lg h-80 w-full">
      <iframe
        title="Flipmaxx Global LLP Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.131361180895!2d76.29238457487002!3d9.99833017331642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d5270cb1b01%3A0x8a4c42388c1c50ec!2sFlipmaxx%20Global%20LLP!5e0!3m2!1sen!2sin!4v1720780300000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

  </div>
</section>

    </section>
  );
}
