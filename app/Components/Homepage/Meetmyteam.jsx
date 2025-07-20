'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const teamMembers = [
  {
    name: 'GAYATHRI BABU ',
    role: 'Managing Director',
    image: '/Images/gayathri.jpg',
  },
  {
    name: 'ADITHYA ANILKUMAR',
    role: 'Manager',
    image: '/Images/Aditiya.jpg',
  },
    {
    name: 'ATHIRA GOPAL',
    role: 'Marketing Manager',
    image: '/Images/Athira.jpg',
  },
    {
    name: 'ALEENA ROSE',
    role: 'Administrator',
    image: '/Images/AleenaRose.jpg',
  },

  {
    name: 'ABIJITH PS',
    role: 'Performance Marketer',
    image: '/Images/Abhijith.jpg',
  },
        {
    name: 'NIDIN BOSE',
    role: 'MERN Stack Developer',
    image: '/Images/Nithin.jpg',
  },
  {
    name: 'ANTONY BABU',
    role: 'Senior Editor',
    image: '/Images/Antonty .jpg',
  },

  {
    name: 'SHAROOK AZEEZ',
    role: 'Cinematographer',
    image: '/Images/Sharook.jpg',
  },
    {
    name: 'ALEENA FRANCIS',
    role: 'Business Development Executive',
    image: '/Images/Aleena.jpg',
  },
       {
    name: 'APARNA J',
    role: 'Content Creator',
    image: '/Images/Aparna.jpg',
  },
    {
    name: 'NIJO VJ',
    role: 'UI/UX Designer',
    image: '/Images/Nijo.jpg',
  },
    {
    name: 'DEEPAK',
    role: 'Graphic Designer',
    image: '/Images/Deepak.jpg',
  },
     {
    name: 'GANESH',
    role: 'Graphic Designer',
    image: '/Images/Ganesh.jpg',
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showAll, setShowAll] = useState(false);

  const visibleMembers = showAll ? teamMembers : teamMembers.slice(0, 4);

  return (
    <section className="w-full bg-white py-16 px-8 sm:px-8 lg:px-20">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
          Meet Our Team
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-20"
        >
          {visibleMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="rounded-xl overflow-hidden mb-4 grayscale hover:grayscale-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={360}
                  className="object-cover w-full h-auto"
                />
              </div>
              <h3 className="font-semibold text-lg text-start">{member.name}</h3>
              <p className="text-gray-500 text-sm text-start">{member.role}</p>
            </motion.div>
          ))}
        </div>

        {!showAll && teamMembers.length > 4 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="text-black bg-black py-2 px-6 text-white  text-sm font-medium hover:text-gray-100 transition"
            >
              View More
            </button>
          </div>
        )}

        <p className="text-sm sm:text-base text-gray-600 mt-10 max-w-4xl">
          At FlipMaxx, our team is the heart of everything we do. Comprising experienced professionals,
          creative thinkers, and industry experts, we work collaboratively to deliver exceptional solutions.
          Each member brings unique strengths and a shared commitment to innovation, quality, and client success — 
          driving FlipMaxx forward with passion and purpose every day.
        </p>
      </div>
    </section>
  );
}
