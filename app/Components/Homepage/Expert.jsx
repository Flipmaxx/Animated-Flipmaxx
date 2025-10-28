'use client';

import { motion } from 'framer-motion';
import Link from 'next/link'; 

export default function ExpertiseSection() {
  const companies = [
    {
      name: 'Nextway Medias',
      url: 'https://nextwaymedias.com',
    },
    {
      name: 'The Business Inspire',
      url: 'https://thebusinessinspire.com',
    },
    {
      name: 'Travioza Holidays & Events',
      url: 'https://travioza.com',
    },
    {
      name: 'Premier Property Experts',
      url: 'https://premierpropertyexperts.com',
    },
  ];

  return (
    <section className="w-full bg-white text-white py-16 px-4 md:px-10">
      <div className="container bg-gradient-to-br from-black to-zinc-900 mx-auto text-center rounded-xl py-10 space-y-12">
        <motion.button
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white text-black px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-md shadow-sm"
        >
          OUR EXPERTISE
        </motion.button>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold px-2"
        >
          Empowering Companies with Proven Expertise
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base px-4"
        >
          FlipMaxx empowers companies through proven expertise, delivering tailored solutions that
          drive growth, efficiency, and long-term business success.
        </motion.p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-medium text-sm sm:text-[10px] lg:text-sm">
          {companies.map((company, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
            >
              <Link
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4 transition cursor-pointer text-white"
              >
                {company.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
