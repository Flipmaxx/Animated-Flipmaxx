'use client'

import { useEffect } from 'react';
import Postings from "../Components/CareersAssets/Postings";

export default function Careers() {
  return (
    <div className="mx-auto p-3">

      <div className="relative max-w-full h-60 md:h-96 mt-7 rounded-xl bg-black/80 overflow-hidden flex flex-col justify-center items-start text-white px-4">
        
        <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-20 h-20 border-2 border-white rounded-full opacity-20"
              style={{
                left: `${10 + i * 12}%`,
                bottom: '-50px',
                animation: 'rise 6s ease-in infinite',
                animationDelay: `${i * 1}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 md:px-12">
          <h1 className="text-2xl md:text-6xl font-bold max-w-3xl leading-snug">
          Let's work with <br /> opportunities

          </h1>
          <p className="mt-4 text-lg">Your new career starts today...!</p>
        </div>
      </div>
      <div className="mt-10">
        <Postings />
      </div>
    </div>
  );
}
