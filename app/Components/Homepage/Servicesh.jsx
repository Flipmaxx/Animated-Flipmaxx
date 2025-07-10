'use client'

import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

import { ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    id: '01.',
    title: 'Business Consulting & Growth',
    description: 'We provide strategic business consulting and growth solutions that drive innovation, boost performance.',
    icon: '/icons/consulting.svg',
    hover: "https://media.istockphoto.com/id/1961001965/video/4k-soft-wave-background-loopable.mp4?s=mp4-640x640-is&k=20&c=SGjSiQt0-jznIuHAXm3r5O1M1sb75zKN5rZdefrV7zQ="
  },
  {
    id: '02.',
    title: 'Digital Marketing & Landing',
    description: 'We provide strategic business consulting and growth solutions that drive innovation, boost performance.',
    icon: '/Images/Dm.png',
    hover: "https://media.istockphoto.com/id/1961001965/video/4k-soft-wave-background-loopable.mp4?s=mp4-640x640-is&k=20&c=SGjSiQt0-jznIuHAXm3r5O1M1sb75zKN5rZdefrV7zQ="
  },
  {
    id: '03.',
    title: 'Website & E commerce Development',
    description: 'We provide strategic business consulting and growth solutions that drive innovation, boost performance.',
    icon: '/icons/development.svg',
    hover: "https://media.istockphoto.com/id/1961001965/video/4k-soft-wave-background-loopable.mp4?s=mp4-640x640-is&k=20&c=SGjSiQt0-jznIuHAXm3r5O1M1sb75zKN5rZdefrV7zQ="
  },
  {
    id: '04.',
    title: 'Travel & Event Planning',
    description: 'We provide strategic business consulting and growth solutions that drive innovation, boost performance.',
    icon: '/icons/travel.svg',
    hover: "https://media.istockphoto.com/id/1961001965/video/4k-soft-wave-background-loopable.mp4?s=mp4-640x640-is&k=20&c=SGjSiQt0-jznIuHAXm3r5O1M1sb75zKN5rZdefrV7zQ="
  },
];

export default function Services() {
  return (
    <section className="bg-black text-white py-12 overflow-x-hidden z-0">
      <div className="container mx-auto bg-black px-6 py-12 rounded-xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
     
          <div className="flex-1" />
        </div>

        {/* Title + Arrows */}
     <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-10 mb-14">
      {/* Left Text */}
      <div className="max-w-3xl">
        <button className="bg-white text-black px-4 py-1.5 rounded-md font-semibold text-sm mb-4">
          OUR SERVICES
        </button>
        <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-white">
          Partnering for Service Excellence
        </h2>
        <p className="text-gray-400 max-w-xl text-sm leading-relaxed">
          We collaborate with leading partners to deliver exceptional service,
          innovation, and value to every client.
        </p>
      </div>

      {/* Right Arrows + Line */}
      <div className="flex items-center gap-4 w-full lg:w-auto">
        {/* Line */}
        <div className="hidden lg:block w-32 h-px bg-white/30" />

        {/* Arrows */}
        <div className="flex gap-4">
          <button className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-gray-200 transition">
            <ChevronLeft size={20} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-gray-200 transition">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-16">
          {services.map((service, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true });

            return (
              <motion.div
                ref={ref}
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white group relative text-black text-3xl rounded-md p-6 flex flex-col justify-between min-h-[430px] overflow-hidden"
              >
                {/* Background Video */}
                <motion.video
                  src={service.hover}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-0 pointer-events-none"
                />

                {/* Card Content */}
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-4">
                    {/* Icon Flip */}
                    <div className="w-14 h-14 perspective">
                      <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                        <div className="absolute w-full h-full backface-hidden bg-black rounded-md flex items-center justify-center">
                          <img src={service.icon} alt="icon" className="w-8 h-8" />
                        </div>
                        <div className="absolute w-full h-full backface-hidden bg-black rounded-md flex items-center justify-center transform rotate-y-180">
                          <img src={service.icon} alt="icon" className="w-8 h-8 opacity-80" />
                        </div>
                      </div>
                    </div>
                    <span className="text-gray-400 font-semibold text-sm">{service.id}</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                </div>

                {/* Description */}
                <div className="mt-2 z-10 relative">
                  <p className="text-sm text-gray-500">{service.description}</p>
                  <hr className="border-black text-black mb-5 mt-5" />
                  <div className="flex items-center gap-2 text-lg font-medium mb-4">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
