'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AboutLanding() {
  const videoRef = useRef(null);
  const isInView = useInView(videoRef, { once: true, margin: '-100px' });
  const [fullScreen, setFullScreen] = useState(false);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setFullScreen(true), 800); 
    }
  }, [isInView]);

  return (
    <section className="w-full min-h-full px-4  flex flex-col items-center bg-white">
      
      {/* Text Section */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
        <button className="px-4 py-2 bg-black text-white text-xs font-semibold rounded shadow-md">
          ABOUT US
        </button>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug md:leading-tight">
          Discover Who We Are, What We Do, and Why We're<br className="hidden md:block" />
          Passionate About Making a Difference
        </h1>
      </div>

    
      <motion.div
        ref={videoRef}
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className={`rounded-lg overflow-hidden shadow-lg transition-all duration-1000 ease-in-out ${
          fullScreen
            ? 'w-full h-[70vh]'
            : 'w-full md:w-[85%] h-[240px] md:h-[320px]'
        }`}
      >
        <video
          src="/Images/5.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}
