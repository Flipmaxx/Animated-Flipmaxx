'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4  py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <img src="./Images/LOGOWHITE.png" alt="" />
            <p className="text-gray-400 text-sm leading-relaxed">
              FlipMaxx empowers companies through proven expertise, delivering tailored solutions that drive.
            </p>
          </div>

          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company Information</h3>
            <address className="text-gray-300 text-sm leading-relaxed not-italic">
              <p>Office: 2025 Mangalassery Tower, Elcor Rd, opposite Ganapathy Temple, North Kalamassery, Kalamassery, Kochi, Kerala 883104</p>
              <p className="mt-2">Send mail: flipmaxxglobal@gmail.com</p>
              <p>Call us: +91 85902 08940</p>
            </address>
            <div className="flex flex-wrap gap-4 pt-2">
              {['Facebook', 'Instagram', 'Telegram', 'Youtube'].map((platform) => (
                <Link
                  key={platform}
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  {platform}
                </Link>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              {['About', 'Services', 'Works', 'Ventures', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services List */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {[
                'Business Consulting & Growth',
                'Digital Marketing & Branding',
                'Website & eCommerce Development',
                'Travel & Event Planning',
                'Real Estate Services',
                'Video & Content Creation'
              ].map((service) => (
                <li key={service}>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Newsletter */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <p className="text-gray-300 text-sm text-center sm:text-left">
                Don't miss the latest news from us...
              </p>
              <div className="relative w-full sm:w-72">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full py-2 px-3 pr-10 rounded text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-black hover:text-gray-700 transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Legal & Nav */}
            <div className="text-sm text-gray-400 text-center lg:text-left space-y-3 lg:space-y-0 lg:space-x-4 lg:flex lg:items-center lg:justify-between w-full lg:w-auto">
              <p className="max-w-md leading-relaxed mx-auto lg:mx-0">
                FlipMaxx empowers companies through proven expertise, delivering tailored solutions that drive.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <span>© 2025 Flipmaxx Global LLP. All Rights Reserved.</span>
                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                <span className="hidden sm:inline">|</span>
                <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
