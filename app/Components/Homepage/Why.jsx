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
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  useEffect(() => {
    const handleResize = () => {
      const newCardsPerPage = getCardsPerPage();
      setCardsPerPage(newCardsPerPage);
      // Reset to first page when cards per page changes
      setCurrentPage(0);
    };
    
    setCardsPerPage(getCardsPerPage());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(features.length / cardsPerPage);
  const start = currentPage * cardsPerPage;
  const currentCards = features.slice(start, start + cardsPerPage);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  // Fixed variants without position changes
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section className="w-full bg-white px-10 overflow-hidden relative">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center space-y-6 px-4">
        <motion.button
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-black text-white px-5 py-2 text-xs mb-6 sm:text-sm font-semibold rounded-md hover:bg-gray-800 transition"
        >
          WHY CHOOSE FLIPMAXX
        </motion.button>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 py-3 font-bold leading-tight"
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

      {/* Carousel */}
      <div className="relative max-w-6xl mx-auto  sm:mt-14 px-6 flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className={`absolute -left-4 sm:-left-6 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full shadow-md flex items-center justify-center transition ${
            currentPage === 0 
              ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
              : 'bg-black text-white hover:bg-white hover:text-black'
          }`}
        >
          <ArrowLeft size={20} />
        </button>

        {/* Carousel Cards */}
        <div className="relative w-full overflow-hidden min-h-[250px] flex items-center">
          <AnimatePresence custom={direction} mode="popLayout" initial={false}>
            <motion.div
              key={currentPage}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 250, damping: 25 }}
              className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentCards.map((feature, i) => (
                <div
                  key={i}
                  className="relative flex flex-col items-center text-center px-6 py-10 bg-white"
                >
                  {/* Connector Lines */}
                  {i !== currentCards.length - 1 && (
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[2px] h-20 hidden lg:flex flex-col items-center justify-between">
                      {i % 2 === 0 ? (
                        <>
                          <div className="flex-1 border-l-2 border-dotted border-gray-400"></div>
                          <div className="w-2 h-2 bg-black rounded-full"></div>
                        </>
                      ) : (
                        <>
                          <div className="w-2 h-2 bg-black rounded-full"></div>
                          <div className="flex-1 border-l-2 border-dotted border-gray-400"></div>
                        </>
                      )}
                    </div>
                  )}

                  {/* Icon */}
                  <div className="mx-auto w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mb-4 animate-bounce">
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-base sm:text-lg font-semibold">{feature.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm md:text-[16px] mt-2 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          className={`absolute -right-4 sm:-right-6 top-1/2  transform -translate-y-1/2 z-10 w-10 h-10 rounded-full shadow-md flex items-center justify-center transition ${
            currentPage === totalPages - 1
              ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
              : 'bg-black text-white hover:bg-white hover:text-black'
          }`}
        >
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Dots Indicator */}
    
    </section>
  );
}