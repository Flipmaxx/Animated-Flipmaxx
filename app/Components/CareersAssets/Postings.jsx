'use client'

import { Briefcase, MapPin, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'

export default function Postings() {
  const [postings, setPostings] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getPostings = async () => {
    try {
      const response = await axios.get('/api/job')
      if (response.data.success) {
        setPostings(response.data.data)
      } else {
        throw new Error('API returned success: false')
      }
    } catch (err) {
      console.error(err)
      setError('Failed to load job postings. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPostings()
  }, [])

  return (
    <div className="py-20 px-4 sm:px-8">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-gray-900 mb-16 leading-tight">
        Open Positions at Flipmaxx Global LLP
      </h2>

      {loading ? (
        <div className="text-center text-gray-600 text-xl font-medium">Loading job postings...</div>
      ) : error ? (
        <div className="text-center text-red-500 text-xl font-semibold">{error}</div>
      ) : postings.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">No positions available at the moment.</div>
      ) : (
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {postings.map((job, index) => (
            <motion.div
              key={job._id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white bg-opacity-90 border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <Briefcase className="text-black w-6 h-6" />
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {job.position}
                  </h3>
                </div>

                <p className="text-gray-700 text-base md:text-lg mb-8 font-medium">
                  {job.description}
                </p>

                <div className="flex flex-col gap-4 text-lg text-gray-700 font-medium">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gray-600" />
                    <span>Experience: {job.experience}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gray-600" />
                    <span>Location: {job.location}</span>
                  </div>
                </div>
              </div>

             <Link href={`/careers/${job._id}`}>
              <button className="mt-8 py-2 w-full bg-black text-white rounded-xl text-lg font-semibold hover:bg-red-600 transition-all">
                Apply Now
              </button>
             </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}
