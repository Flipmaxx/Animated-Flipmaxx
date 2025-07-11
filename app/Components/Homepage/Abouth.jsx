'use client';

import Image from 'next/image';
import { ArrowRight, Award } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="w-full px-6 py-9  bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center ">
     
     <div className="relative w-full max-w-md mx-auto md:mx-0 rounded-xl overflow-visible perspective group">
  <img
    src="/Images/R.png"
    alt="Team Member"
    className="w-full h-auto object-cover rounded-xl"
  />

  <div className="absolute left-0 sm:-left-10 md:left-2 lg:-left-0 xl:-left-12 bottom-[0rem] md:bottom-[2rem] w-[120px] sm:w-[140px] h-36 sm:h-40 text-center [transform-style:preserve-3d] transition-transform duration-700 group-hover:rotate-y-180 z-10">

    <div className="absolute inset-0 bg-black text-white px-4 py-3 rounded-xl shadow-xl backface-hidden">
      <Award size={24} className="mx-auto mb-1" />
      <div className="text-xl font-bold leading-tight">3+</div>
      <div className="text-xs leading-snug">
        Years of experience<br />
        since 2023
      </div>
    </div>

    <div className="absolute inset-0 bg-black text-white px-4 py-3 rounded-xl shadow-xl rotate-y-180 backface-hidden">
      <Award size={24} className="mx-auto mb-1" />
      <div className="text-xl font-bold leading-tight">3+</div>
      <div className="text-xs leading-snug">
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
