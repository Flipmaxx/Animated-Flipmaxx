'use client';

import { useRef } from 'react';

export default function Servicesh() {
  const nextSectionRef = useRef(null);

  return (
    <div className="w-full bg-white">
      {/* Service Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Left scrollable service list */}
        <div className="flex flex-col overflow-y-auto max-h-screen p-6 space-y-12 pr-4">
          <div className="space-y-4">
            <p className="text-lg text-gray-600">
              Digital marketing agency that are
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              Jack of all traits, master of results!
            </h1>
            <p className="text-lg text-gray-700">
              We wear many hats (and rock them all), but at the end of the day we get the job done, no matter the challenge!
            </p>
          </div>

          {/* Service cards list */}
          {Array.from({ length: 5 }).map((_, idx) => (
            <div key={idx} className="bg-gray-100 p-6 rounded-2xl shadow-md space-y-4">
              <h2 className="text-xl font-semibold">Performance Marketing {idx + 1}</h2>
              <p className="text-gray-600">
                This is a sample description for service {idx + 1}.
              </p>
              <button className="mt-2 px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition">
                Know more
              </button>
            </div>
          ))}

          <button
            onClick={() => nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Continue to Next Section
          </button>
        </div>

        {/* Right sticky preview */}
        <div className="hidden md:block sticky top-0 h-screen bg-black/90 text-white p-12">
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <img
              src="https://img.favpng.com/4/2/3/line-graphic-design-curve-png-favpng-jGMSAJjbLsN3dP4CdxLyMZ7VE.jpg"
              alt="Preview"
              className="w-48 h-48 object-contain"
            />
            <h2 className="text-2xl font-bold">Performance Marketing</h2>
            <p className="text-center text-white/70">We create goal-driven ad strategies that convert clicks into customers.</p>
          </div>
        </div>
      </div>

      {/* Next Section */}
      <div
        ref={nextSectionRef}
        className="min-h-screen flex items-center justify-center bg-gray-200 text-3xl font-bold"
      >
        Next Section Here
      </div>
    </div>
  );
}
