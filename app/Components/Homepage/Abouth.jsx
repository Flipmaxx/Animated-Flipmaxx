'use client';

import Image from 'next/image';
import { ArrowRight, Award } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="w-full px-6 py-9  bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start justify-start">
        <div className=''>
            <div className="relative w-full  rounded-xl ">
          <img
            src="/Images/R.png"
            alt="Team Member"
            className="w-[400px] h-full bg-cover"
          />

          <div className="absolute bottom-6 left-6 bg-black text-white px-5 py-4 rounded-xl shadow-xl w-[140px] text-center">
            <Award size={28} className="mx-auto mb-1" />
            <div className="text-2xl font-bold leading-tight">3+</div>
            <div className="text-sm leading-snug">
              Years of experience<br />
              since 2023
            </div>
          </div>
        </div>
        </div>
        <div className="space-y-6">
          <h2 className=" text-lg lg:text-xl xl:text-4xl font-bold text-gray-900 leading-snug">
            Excellence Across Media, Travel,<br />
            Business & Real Estate
          </h2>

          <p className="text-xs lg:text-sm xl:text-sm text-gray-800 font-medium leading-relaxed">
            With over <strong>3 years</strong> of dedicated service, Flipmaxx has completed <strong>321+ successful projects</strong>, earning <strong>98% positive feedback</strong>. Our commitment to innovation, reliability, and customer satisfaction continues to drive impactful solutions across industries and exceed client expectations globally.
          </p>

          <hr className="border-gray-300" />

          <p className="text-xs text-gray-700 text-sm xl:text-sm leading-relaxed">
            Flipmaxx is a dynamic service provider with over <strong>3 years</strong> of proven excellence. We specialize in delivering innovative, reliable, and tailored solutions across various industries. With <strong>321+ projects completed</strong> and <strong>98% positive client feedback</strong>, Flipmaxx is trusted globally for its commitment to quality, efficiency, and customer satisfaction.
          </p>
          <p className="text-xs text-gray-700 text-xs lg:text-sm xl:text-sm leading-relaxed">
            Flipmaxx is a dynamic service provider with over <strong>3 years</strong> of proven excellence. We specialize in delivering innovative, reliable, and tailored solutions across various industries. With <strong>321+ projects completed</strong> and <strong>98% positive client feedback</strong>, Flipmaxx is trusted globally for its commitment to quality, efficiency, and customer satisfaction.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-black text-white text-base px-6 py-2.5 rounded-md flex items-center gap-2 hover:bg-gray-800 transition">
              More About Us <ArrowRight size={16} />
            </button>
            <a href="#" className="text-black underline text-base">
              We are always online, Let’s Talk!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
