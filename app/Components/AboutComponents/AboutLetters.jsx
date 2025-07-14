'use client';

import { ArrowRight } from 'lucide-react';

export default function AboutLetters() {
  return (
    <section className="relative w-full h-full py-12 bg-black text-white overflow-hidden">
 
      <video
        src="/Images/5.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full bg-cover z-0"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative z-20 w-full h-full px-6 md:px-12 flex items-center">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
          
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Smart Moves,<br />
              Stronger Growth
            </h1>
            <p className="text-gray-200 text-base md:text-lg max-w-xl">
              At Flipmaxx, we combine data-driven strategies with bold innovation to deliver smarter decisions and sustainable growth. Our mission is to empower businesses to scale faster, smarter, and with confidence.
            </p>

            <button className="mt-4 inline-flex items-center px-5 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition">
              Our Services <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-6xl md:text-7xl font-bold">500<span className="text-5xl">+</span></h2>
            <p className="text-lg md:text-xl mt-2">Success Stories</p>
          </div>

        </div>
      </div>
    </section>
  );
}
