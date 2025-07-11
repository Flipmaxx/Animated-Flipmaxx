'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const teamMembers = [
  {
    name: 'Reliable Performanc',
    role: 'Human Resource',
    image: '/Images/B.png',
  },
  {
    name: 'Jibi p Boby',
    role: 'Project Coordinator',
    image: '/Images/B.png',
  },
  {
    name: 'Prasanth PS',
    role: 'IT consultant',
    image: '/Images/B.png',
  },
  {
    name: 'Aiswarya Mohan',
    role: 'IT consultant',
    image: '/Images/B.png',
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="rounded-xl overflow-hidden mb-4">
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
