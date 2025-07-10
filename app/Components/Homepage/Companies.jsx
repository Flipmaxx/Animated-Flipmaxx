  'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const logos = Array(12).fill('/Images/FLIP.png');

export default function Companies() {
  const [index, setIndex] = useState(0);

  const visibleCount = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % logos.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const getVisibleLogos = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(logos[(index + i) % logos.length]);
    }
    return visible;
  };

  return (
    <section className="w-full max-w-7xl mx-auto bg-white py-10 px-4 sm:px-6 md:px-8 lg:px-16">
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-4 gap-6 items-center"
      >
        {getVisibleLogos().map((logo, i) => (
          <div key={i} className="flex justify-center items-center w-full">
            <Image
              src={logo}
              alt={`Logo ${i + 1}`}
              width={120}
              height={60}
              className="object-contain max-w-full h-auto"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
