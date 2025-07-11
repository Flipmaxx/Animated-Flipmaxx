'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Roshan Mathew',
    role: 'IT Manager',
    avatar: '/images/roshan.jpg',
    quote:
      'Flipmax exceeded my expectations! The quality is top-notch, delivery was fast, and customer service was amazing.Flipmax exceeded my expectations! The quality is top-notch, delivery was fast, and customer service was amazingFlipmax exceeded my expectations! The quality is top-notch, delivery was fast, and customer service was amazing',
  },
  {
    name: 'Ananya Sharma',
    role: 'Marketing Lead',
    avatar: '/images/user1.jpg',
    quote:
      'Their innovative approach helped us improve efficiency and reach a wider audience effortlessly.',
  },
  {
    name: 'David Liu',
    role: 'Product Head',
    avatar: '/images/user2.jpg',
    quote:
      'Impressed with Flipmax’s quick turnaround and precise solutions. Highly dependable and collaborative team.',
  },
  {
    name: 'Sara Thompson',
    role: 'Business Analyst',
    avatar: '/images/user3.jpg',
    quote:
      'A great experience! They understood our vision and executed perfectly with top-notch professionalism.',
  },
  {
    name: 'Amit Kulkarni',
    role: 'Operations Manager',
    avatar: '/images/user4.jpg',
    quote:
      'We’ve seen measurable growth since partnering with Flipmax. Their data-driven approach works!',
  },
  {
    name: 'Isabella Rossi',
    role: 'CEO, StartEdge',
    avatar: '/images/user5.jpg',
    quote:
      'Flipmax is our go-to for reliable tech solutions. Their team is fast, skilled, and always supportive.',
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const total = testimonials.length;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const testimonial = testimonials[current];

  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {!isMobile && (
          <motion.div 
            className="relative h-full min-h-[300px] md:h-[400px] lg:min-h-[400px]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/Images/FF.png"
              alt="Happy customer"
              fill
              className="rounded-2xl object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute bottom-6 right-6 bg-black text-white w-10 h-10 flex items-center justify-center rounded-full text-2xl font-bold">
              &quot;
            </div>
          </motion.div>
        )}

        <div className="space-y-4 sm:space-y-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block bg-black text-white text-xs font-semibold px-4 py-1 rounded-md"
          >
            TESTIMONIALS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
          >
            What Our Customers Say?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-600 text-sm sm:text-base max-w-lg"
          >
            Our customers love our service — praising our quality, reliability, and support.
            Their satisfaction drives us to exceed expectations every time.
          </motion.p>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-blue-50 p-6 rounded-lg relative mt-4"
            >
              <p className="text-gray-700 text-sm sm:text-base">{testimonial.quote}</p>
              <div className="absolute -left-2 top-6 w-4 h-4 bg-blue-50 transform rotate-45" />
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-4 mt-4">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                fill
                className="rounded-full object-cover"
                sizes="(max-width: 640px) 48px, 56px"
              />
            </div>
            <div>
              <p className="font-semibold text-sm sm:text-base flex flex-wrap items-center gap-1">
                {testimonial.name}
                <span className="flex items-center text-yellow-400 ml-1 sm:ml-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="shrink-0" fill="currentColor" />
                  ))}
                </span>
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">{testimonial.role}</p>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 text-gray-400 hover:text-black hover:border-black transition flex items-center justify-center"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black text-white hover:bg-gray-800 transition flex items-center justify-center"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}