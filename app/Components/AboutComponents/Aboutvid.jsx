'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Aboutvid() {
  const videoRef = useRef(null);
  const isInView = useInView(videoRef, { once: true, margin: '-100px' });
  const [fullScreen, setFullScreen] = useState(false);

  useEffect(() => {
    if (isInView) {
   
      setTimeout(() => setFullScreen(true), 600);
    }
  }, [isInView]);

  return (
    <section className="w-full min-h-full flex flex-col items-center justify-center bg-white">
     <div className="w-full px-4 py-12">
  <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center gap-6">
   
    <button className="px-4 py-2 bg-black text-white text-xs font-semibold rounded">
      ABOUT US
    </button>
    
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
      Discover Who We Are, What We Do, and Why We're<br className="hidden md:block" /> Passionate About Making a Difference
    </h1>
    
  </div>
</div>

        
      <motion.div
        ref={videoRef}
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className={`overflow-hidden rounded-xl shadow-xl transition-all duration-1000 ease-in-out ${
          fullScreen
            ? 'w-full h-screen'
            : 'w-[90%] h-[100px] md:h-[400px]'
        }`}
      >
        <video
          src="/Images/ab.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}
