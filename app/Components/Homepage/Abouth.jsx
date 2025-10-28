'use client';

import Image from 'next/image';
import { ArrowRight, Award } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="w-full px-2 xl:px-17 py-9  bg-white ">
      <div className="container mx-auto flex flex-col xl:flex-row gap-12 px-7 ">
     
     <div className="relative w-AUTO md:max-w-xl lg:max-w-4xl xl:max-w-lg  mx-auto  rounded-xl overflow-visible perspective group">
  <Image
      src="/Images/R.png"
      alt="Team Member"
      width={1000}
      height={600} 
      className="object-cover rounded-xl xl:w-[1500px] h-full"
      priority
    />

  <div className="absolute left--30 sm:-left-20 md:left--30 lg:-left--40 xl:-left--12 bottom-[0rem] md:bottom-[2rem] w-[120px] sm:w-[140px] h-36 sm:h-40 text-center [transform-style:preserve-3d] transition-transform duration-700 group-hover:rotate-y-180 z-10 hidden md:inline">

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



<div className="space-y-9">
  <h2 className="text-lg lg:text-xl xl:text-4xl font-bold text-gray-900 leading-snug">
    Excellence Across Media, Travel,<br />
    Business & Real Estate
  </h2>

  <p className="text-xs lg:text-lg xl:text-lg text-gray-800 font-medium max-w-full leading-relaxed">
    With over <strong>3 years</strong> of dedicated service, Flipmaxx has completed
    <strong> 321+ successful projects</strong>, earning <strong>98% positive feedback</strong>.
    Our commitment to innovation, reliability, and customer satisfaction continues to drive
    impactful solutions across industries and exceed client expectations globally.
  </p>

  <hr className="border-gray-300" />

  <p className="text-xs lg:text-lg xl:text-lg  text-gray-700 leading-relaxed">
    Flipmaxx is a dynamic service provider specializing in tailored, high-impact solutions
    across media, travel, business, and real estate. Our proven track record of excellence,
    with hundreds of successful global projects, reinforces our reputation as a trusted partner
    for clients seeking quality, efficiency, and innovation.
  </p>

    <p className="text-xs lg:text-lg xl:text-lg  text-gray-700 ">
Flipmaxx is a dynamic service provider with over 3 years of proven excellence. We specialize in delivering
 innovative, reliable, and tailored solutions across various industries. With 321+ projects completed and 98% positive client
 feedback, Flipmaxx is trusted globally for its commitment to quality, efficiency, and customer satisfaction. dsverghtyhrjntry regvtrhytrbhndwvtrh fvretgbtr dvtrbr dcd
  </p>

  <div className="flex flex-wrap gap-4  items-center pt-4">
    <button className="bg-black text-white text-base px-6 py-2.5 rounded-md flex items-center gap-2 hover:bg-gray-800 transition">
      More About Us <ArrowRight size={16} />
    </button>
    <a href="#contact" className="text-black underline text-base">
      We are always online, Let’s Talk!
    </a>
  </div>
</div> 

      </div>
    </section>
  );
}
