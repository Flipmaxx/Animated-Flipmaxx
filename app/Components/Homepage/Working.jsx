'use client';

import { useState } from 'react';
import { Plus, Minus, Cog } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const processData = [
  {
    id: 1,
    title: 'Client-Centric Approach',
    content:
      'We tailor our services to each client’s unique needs, ensuring maximum value and satisfaction.',
  },
  {
    id: 2,
    title: 'Innovative Execution',
    content:
      'We use cutting-edge technology and strategies to solve complex business challenges.',
  },
  {
    id: 3,
    title: 'Collaborative Growth',
    content:
      'We work hand-in-hand with clients to drive long-term success and shared value.',
  },
  {
    id: 4,
    title: 'Quality-Driven Execution',
    content:
      'We maintain high standards and deliver measurable results through careful planning and expert implementation.',
  },
];

export default function WorkingProcessSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white text-white py-12 md:py-24 px-4">
      <div className="container mx-auto bg-black rounded-2xl px-4 sm:px-6 md:px-10 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-start">
            <span className="inline-block bg-white text-black text-xs sm:text-sm font-semibold px-4 py-1 rounded-md">
              HOW WE WORK
            </span>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
              Smart Solutions for Complex <br className="hidden sm:block" />
              IT Problems
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg">
              Flipmaxx is a dynamic service provider with over 3 years of proven excellence.
              We specialize in delivering innovative.
            </p>

            <button className="bg-white text-black font-medium text-sm px-5 py-3 rounded-md flex items-center gap-2 hover:bg-gray-200 transition">
              Read More Working Process →
            </button>
          </div>

          {/* Right Accordion */}
          <div className="flex flex-col space-y-4">
            {processData.map((item, index) => (
              <div
                key={item.id}
                className="bg-white text-black rounded-xl overflow-hidden shadow-sm transition-all"
              >
                <div
                  onClick={() => toggleItem(index)}
                  className="flex justify-between items-center px-6 py-4 font-semibold cursor-pointer hover:bg-gray-100 transition"
                >
                  <span className="text-sm sm:text-base lg:text-lg">
                    {String(item.id).padStart(2, '0')}. {item.title}
                  </span>
                  {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>

                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-black text-white p-2 rounded-md shrink-0">
                          <Cog size={20} />
                        </div>
                        <p className="text-gray-600 text-sm sm:text-base mt-1 max-w-sm">
                          {item.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
