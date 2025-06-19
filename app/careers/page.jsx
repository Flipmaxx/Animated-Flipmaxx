'use client';

import { motion } from 'framer-motion';
import Postings from '../Components/CareersAssets/Postings';
import CareersPage from '../Components/CareersAssets/GetC';

export default function Careers() {
  return (
    <div className="w-full min-h-full bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center px-4 sm:px-8 py-16 sm:py-20 lg:py-28  mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full"
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Excited to be partners in crime in the world of <span className="text-blue-600">Information Technology</span>?
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-light mt-4 md:mt-6 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Make Waves in the Industry With Us!
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl mt-6 md:mt-8 text-gray-600 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Explore exciting job opportunities and help shape the future with us. Join a team that values innovation, growth, and excellence.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-sm md:text-base font-medium transition-colors shadow-md">
              View Open Positions
            </button>
            <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-lg text-sm md:text-base font-medium transition-colors">
              Learn About Our Culture
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="w-full border-t border-gray-200 max-w-7xl mx-auto" />

      {/* Stats Section - Optional */}
      <motion.section 
        className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">Why Join Our Team?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: "100+", label: "Team Members" },
              { value: "4.8★", label: "Employee Rating" },
              { value: "30+", label: "Countries" },
              { value: "Flexible", label: "Work Options" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-2xl sm:text-3xl font-bold text-blue-600">{item.value}</p>
                <p className="mt-2 text-sm sm:text-base text-gray-600">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Job Postings Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-10 text-center">
            Current Openings
          </h2>
          <div className="w-full">
            <Postings />
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Don't See Your Dream Role?
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We're always looking for talented individuals. Send us your resume and we'll contact you when a matching position opens up.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg text-sm md:text-base font-medium transition-colors shadow-md">
              Submit Your Resume
            </button>
          </motion.div>
        </div>
        {/* <CareersPage/> */}
      </section>
    </div>
  );
}