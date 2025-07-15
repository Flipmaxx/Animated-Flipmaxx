'use client';
import { BiSolidRightArrow } from "react-icons/bi";

import { motion } from 'framer-motion';
import {
  FaCogs,
  FaBullhorn,
  FaLaptopCode,
  FaPlane,
  FaBuilding,
  FaVideo,
} from 'react-icons/fa';

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function ServicesSection() {
  return (
    <section className="w-full min-h-screen bg-white flex flex-col">
      <div className="relative w-full h-96 bg-black overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="./Images/4.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/20" />
        <div className="relative z-10 flex items-center justify-start px-3 h-full">
     <div className='flex flex-col gap-y-4'>
           <h2 className="text-white text-3xl font-bold text-start">Our Services</h2>
          <h2 className="text-white text-sm font-bold text-start flex items-center gap-1">Home <BiSolidRightArrow className="w-3 h-3 text-white" /> Services</h2>
     </div>
        </div>
      </div>

      <div className="flex-1 container mx-auto w-full px-8 py-12  sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  py-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-black rounded-lg p-6 space-y-4 text-white shadow-lg hover:shadow-xl  transition-shadow"
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.h3
                className="text-lg font-semibold leading-tight"
                variants={contentVariants}
              >
                {service.title}
              </motion.h3>

              <div className="w-full h-24 flex items-center justify-center text-white text-6xl py-28 p-7 ">
                <img src={service.icon} alt="no work" />
              </div>

              {service.points && (
                <motion.div
                  className="space-y-3 text-sm lg:text-xl"
                  variants={contentVariants}
                >
                  {service.points.map((point, idx) => (
                    <p key={idx}>{point}</p>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: 'Business Consulting & Growth',
    icon: './Images/I1.png',
    points: ['Strategy Planning', 'Market Analysis', 'Business Scaling'],
  },
  {
    title: 'Digital Marketing & Leading',
    icon: './Images/I2.png',
    points: ['SEO/SEM', 'Social Media Campaigns', 'Brand Management'],
  },
  {
    title: 'Website & E-commerce Development',
    icon: '/Images/I3.png',
    points: ['Responsive Design', 'Custom Web Apps', 'Online Store Setup'],
  },
  {
    title: 'Travel & Event Planning',
    icon: '/Images/I1.png',
    points: ['Corporate Events', 'Destination Management', 'Flight & Hotel Booking'],
  },
  {
    title: 'Real Estate Services',
    icon: '/Images/I2.png',
    points: ['Property Listing', 'Buyer Assistance', 'Legal Consulting'],
  },
  {
    title: 'Video & Content Creation',
    icon: '/Images/I3.png',
    points: ['Scriptwriting', 'Editing', 'Distribution Strategy'],
  },
];
