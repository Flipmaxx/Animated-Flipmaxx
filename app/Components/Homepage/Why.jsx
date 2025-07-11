'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Settings,
  Lightbulb,
  TrendingUp,
  ShieldCheck,
  BarChart2,
  Users,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';

const features = [
  {
    title: 'Reliable Performance',
    description:
      'FlipMaxx delivers consistent, high-quality results you can trust for every project, every time.',
    icon: <Settings size={28} />,
  },
  {
    title: 'Innovative Solutions',
    description:
      'FlipMaxx delivers cutting-edge, customized solutions to meet evolving customer demands.',
    icon: <Lightbulb size={28} />,
  },
  {
    title: 'Increase Productivity',
    description:
      "Boost efficiency and streamline your workflow effortlessly with FlipMaxx's smart solutions.",
    icon: <TrendingUp size={28} />,
  },
  {
    title: 'Secure Infrastructure',
    description:
      'We prioritize security in every project to ensure your data and systems remain protected.',
    icon: <ShieldCheck size={28} />,
  },
  {
    title: 'Data-Driven Results',
    description:
      'Our strategies are backed by real-time data analytics to ensure measurable performance.',
    icon: <BarChart2 size={28} />,
  },
  {
    title: 'Team Collaboration',
    description:
      'Our experts work closely with your team to ensure seamless integration and collaboration.',
    icon: <Users size={28} />,
  },
];

export default function WhyChoose() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  const getCardsPerPage = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  useEffect(() => {
    const handleResize = () => setCardsPerPage(getCardsPerPage());
    setCardsPerPage(getCardsPerPage());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(features.length / cardsPerPage);
  const start = currentPage * cardsPerPage;
  const currentCards = features.slice(start, start + cardsPerPage);

  const handlePrev = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setDirection(0);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const variants = {
    enter: (direction) => ({
      x: direction === 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction === 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <motion.button
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-black text-white px-5 py-2 text-xs sm:text-sm font-semibold rounded-md hover:bg-gray-800 transition"
        >
          WHY CHOOSE FLIPMAXX
        </motion.button>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold"
        >
          Why Choose FlipMaxx for Your Needs?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base"
        >
          Choose FlipMaxx for reliable, innovative solutions tailored to your needs — delivering
          quality, efficiency, and unmatched customer satisfaction every time.
        </motion.p>
      </div>

      <div className="mt-12 relative">
        <div className="flex justify-between items-center container mx-auto mb-8">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-white text-black shadow-md flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-black text-white shadow-md flex items-center justify-center hover:bg-white hover:text-black transition"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="relative h-[300px] md:h-[280px] lg:h-[260px] w-full overflow-hidden">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentPage}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute top-0 left-0 right-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {currentCards.map((feature, i) => (
                <div
                  key={i}
                  className="text-center px-6 py-8 border border-gray-200 rounded-lg shadow-sm bg-white"
                >
                  <div className="mx-auto w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mb-4 animate-bounce">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-gray-500 text-sm mt-2">{feature.description}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentPage ? 0 : 1);
                setCurrentPage(i);
              }}
              className={`w-3 h-3 rounded-full transition ${
                i === currentPage ? 'bg-black' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
