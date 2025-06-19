'use client'

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutLanding() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-woman-coding-on-her-laptop-3983-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="container mx-auto px-4 py-20 relative z-20">
          <div className="flex flex-col lg:flex-row items-center gap-12" data-aos="fade-up">
            <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-right">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-8">
                <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">Code.</span>
                <span className="block bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">Create. Innovate. things .</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
                We architect brilliant digital experiences that blend creativity, logic, and bleeding-edge technology — making the impossible, intuitive.
              </p>
              <button className="px-8 py-3 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg font-semibold bg-gradient-to-r from-white to-gray-200 text-black shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Explore Our Work →
              </button>
            </div>
            <div className="lg:w-1/2 w-full rounded-3xl overflow-hidden shadow-2xl" data-aos="fade-left">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                alt="Creative technology"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28 lg:py-36 bg-white text-black">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" data-aos="fade-up">
            <div className="relative" data-aos="zoom-in">
              <div className="absolute -top-8 -left-8 w-32 h-32 border-4 border-black rounded-lg z-0"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border-4 border-black rounded-lg z-0"></div>
              <div className="relative z-10 bg-black p-1 rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                  alt="Our team" 
                  className="w-full h-auto rounded-lg object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div data-aos="fade-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight">
                We Are <span className="bg-black text-white p-4">Digital Architects</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                Founded in 2012, we've grown from a small startup to a leading IT solutions provider with 150+ experts across the globe.
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
                Our mission is to bridge the gap between technology and business needs, delivering solutions that drive real impact.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 border-2 border-black">
                  Our Story
                </button>
                <button className="px-6 py-3 bg-white text-black rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300 border-2 border-black">
                  Meet The Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-28 bg-black text-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center" data-aos="fade-down">
            By The <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Numbers</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '12+', label: 'Years Experience' },
              { number: '500+', label: 'Projects Delivered' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '40+', label: 'Countries Served' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 hover:bg-gray-900 rounded-xl transition-all duration-300" data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  {stat.number}
                </div>
                <div className="text-lg md:text-xl text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-white text-black">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center" data-aos="fade-down">
            Our Core <span className="bg-black text-white p-3">Principles</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto" data-aos="fade-up">
            The foundation of everything we do
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Innovation', desc: 'We challenge conventions and push boundaries to deliver groundbreaking solutions.', icon: '💡' },
              { title: 'Excellence', desc: 'We pursue perfection in every detail while understanding when good is good enough.', icon: '✨' },
              { title: 'Transparency', desc: 'Open communication and honesty form the foundation of all our relationships.', icon: '🔍' },
              { title: 'Collaboration', desc: 'We believe the best solutions emerge from diverse perspectives working together.', icon: '🤝' },
              { title: 'Impact', desc: 'Every project is measured by its real-world results and tangible value created.', icon: '🚀' },
              { title: 'Integrity', desc: 'We do what we say we will do, and we stand by our work unconditionally.', icon: '🛡️' }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-black border-2 border-black rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl mb-6 text-white">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
                <p className="text-gray-700 text-lg text-white">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center" data-aos="zoom-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Transform</span> Your Business?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Let's collaborate to create something extraordinary that drives real results and stands the test of time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-black rounded-full text-lg font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get in Touch
            </button>
            <button className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
