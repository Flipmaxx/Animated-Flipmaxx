'use client'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

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
]

export default function Services() {
  return (
    <section className="bg-black text-white py-24 px-4 md:px-16 overflow-x-hidden">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button className="bg-white text-black px-4 py-1.5 rounded-md font-semibold text-sm">
          OUR SERVICES
        </button>
        <div className="flex-1" />
      </div>

      {/* Title and Arrows */}
      <div className="flex flex-col md:flex-row md:justify-center items-start md:items-center mb-14">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Partnering for Service Excellence
          </h2>
          <p className="text-gray-400 max-w-xl text-sm leading-relaxed">
            We collaborate with leading partners to deliver exceptional service,
            innovation, and value to every client.
          </p>
        </div>

        <div className="flex gap-4 mt-6 md:mt-0">
          <div className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full cursor-pointer">
            &#8249;
          </div>
          <div className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full cursor-pointer">
            &#8250;
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-16 px-3">
        {services.map((service, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

          return (
            <motion.div
              ref={ref}
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              className="bg-white relative group text-black text-3xl rounded-md p-6 flex flex-col justify-between min-h-[430px] overflow-hidden"
            >
              {/* Video Background - optimized with will-change */}
              <motion.video
                src={service.hover}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-0"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                style={{ willChange: 'opacity' }}
              />
              
              <div>
                <div className="flex justify-between items-center mb-4">
                  {/* Flip Container - optimized with perspective and transform-style */}
                  <motion.div 
                    className="bg-black p-6 rounded-md z-20"
                    style={{
                      perspective: '1000px',
                      transformStyle: 'preserve-3d'
                    }}
                    initial={{ rotateY: 180, opacity: 0 }}
                    animate={{ 
                      rotateY: 0, 
                      opacity: 1,
                      transition: { 
                        duration: 0.6,
                        delay: 0.4 + index * 0.1,
                        ease: "backOut"
                      }
                    }}
                    whileHover={{ 
                      rotateY: 180,
                      transition: { 
                        duration: 0.4,
                        ease: "easeOut"
                      }
                    }}
                  >
                    <motion.div
                      style={{ 
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(0deg)',
                        willChange: 'transform'
                      }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <img 
                        src={service.icon} 
                        alt="icon" 
                        className="w-9 h-9" 
                        style={{ pointerEvents: 'none' }}
                      />
                    </motion.div>
                  </motion.div>
                  <span className="text-gray-400 font-semibold text-sm">
                    {service.id}
                  </span>
                </div>
                <div className="z-40 relative">
                  <h3 className="text-2xl font-semibold mb-2 z-30 hover:text-black">{service.title}</h3>
                </div>
              </div>

              <div className="mt-2 z-20 relative">
                <p className="text-sm text-gray-500">{service.description}</p>
                <hr className="border-black text-black mb-5 mt-5" />
                <div className="flex items-center gap-2 text-lg font-medium mb-4">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}