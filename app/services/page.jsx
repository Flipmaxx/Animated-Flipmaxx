'use client';

import {
  FaCogs,
  FaBullhorn,
  FaLaptopCode,
  FaPlane,
  FaBuilding,
  FaVideo,
} from 'react-icons/fa';

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
    <source src="https://cdn-front.freepik.com/revamp/temp/hero/v2-home-video.webm" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/20" />
  <div className="relative z-10 flex items-center justify-center h-full">
    <h2 className="text-white text-3xl font-bold text-start">Our Services</h2>
  </div>
</div>


     
      <div className="flex-1 container   mx-auto w-full px-4 py-12 sm:px-6 lg:px-8">
        {/* <h2 className="text-3xl font-bold mb-10 text-black">Our Services</h2> */}

     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black rounded-lg p-6 space-y-4 text-white shadow-lg hover:shadow-xl transition-shadow "
            >
              <h3 className="text-lg font-semibold leading-tight">
                {service.title}
              </h3>

              <div className="w-full h-24 flex items-center justify-center text-white  text-6xl py-28">
                <img src={service.icon} alt="no work" />
              </div>

              {service.points && (
                <div className="space-y-3 text-sm lg:text-xl">
                  {service.points.map((point, idx) => (
                    <p key={idx}>{point}</p>
                  ))}
                </div>
              )}
            </div>
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
    icon: '/Images/I4.png',
    points: ['Corporate Events', 'Destination Management', 'Flight & Hotel Booking'],
  },
  {
    title: 'Real Estate Services',
    icon: '/Images/I4.png',
    points: ['Property Listing', 'Buyer Assistance', 'Legal Consulting'],
  },
  {
    title: 'Video & Content Creation',
    icon: '/Images/I4.png',
    points: ['Scriptwriting', 'Editing', 'Distribution Strategy'],
  },
];
