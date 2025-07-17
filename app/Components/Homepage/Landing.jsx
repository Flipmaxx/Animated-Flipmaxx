'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Landing() {
  const imageRef = useRef(null);
  const secondHeroRef = useRef(null);
  const overlayRef = useRef(null);
  const squareRef = useRef(null);

  useLayoutEffect(() => {
    const calculateScale = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      return Math.max(width, height) / 20;
    };
    gsap.set(secondHeroRef.current, { autoAlpha: 0 });
    gsap.set(overlayRef.current, { autoAlpha: 0 });
    gsap.set(squareRef.current, { scale: 1 });

    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    tl.from(imageRef.current, {
      y: '70vh',
      duration: 0.77,
      opacity: 0,
      ease: "back.out(1.7)"
    });

    tl.to(imageRef.current, {
      y: '-70vh',
      opacity: 0,
      duration: 0.66,
      delay: 1,
      ease: "power3.in",
      onComplete: () => {
        gsap.set(imageRef.current, { display: 'none' });
      }
    });

    tl.to(overlayRef.current, {
      autoAlpha: 1,
      duration: 0.5
    }, "-=0.3");
    tl.to(squareRef.current, {
      scale: calculateScale(),
      duration: 2,
      ease: "power3.inOut",
      onComplete: () => {
        gsap.set(secondHeroRef.current, { autoAlpha: 1 });
        gsap.set(overlayRef.current, { autoAlpha: 0 });
      }
    });
    const handleResize = () => {
      gsap.set(squareRef.current, { scale: 1 }); 
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, []);

  return (
    <div className="w-full h-full">
      <div ref={imageRef} className="w-full h-screen flex items-center justify-center fixed inset-0 bg-white z-10">
        <img 
          src="./Images/FLIP.png" 
          alt="Flipmaxx Logo" 
          className="w-full max-w-[80%] md:max-w-md"
        />
      </div>
      <div 
        ref={overlayRef} 
        className="w-full h-screen fixed inset-0 bg-black z-20 flex items-center justify-center"
      >
        <h2 className='absolute text-sm md:text-2xl xl:text-6xl text-white'>From concept to clicks</h2>
        <div 
          ref={squareRef}
          className="w-[50px] h-[50px] sm:w-20 sm:h-20 bg-white border-4 border-white"
          style={{
            mixBlendMode: 'difference',
            transformOrigin: 'center center'
          }}
        ></div>
      </div>
      <div ref={secondHeroRef} className="w-full h-full flex items-center text-start justify-start bg-white relative">
        <video
          src="./Images/LOOP.mp4"
          className="w-full h-screen object-cover"
          loop
          autoPlay
          muted
          playsInline
        />
        <div className='absolute inset-0 w-full h-screen bg-black/20'></div>

        <div className='flex flex-col items-start absolute top-20 left-7 text-4xl font-bold  text-white'>
          <h1 className='text-xl xl:text-5xl'>Flipmaxx Global LLP</h1>
          <p className='text-sm mt-2 max-w-xl mt-6 lg:mt-12'>FLIPMAXX GLOBAL is a dynamic parent company offering end-to-end marketing solutions 
            designed to elevate brands in the modern business landscape. As a 
            comprehensive marketing powerhouse, we specialize in strategy, branding, 
            digital marketing, advertising, and innovative promotional services tailored to meet the unique needs of every client.</p>
        </div>

 <div className="bg- text-white py-12 px-6 md:px-12 absolute bottom-0 right-3">
  <div className="max-w-4xl mx-auto text-center">
  

    <div className="flex justify-center gap-6">
 
      <a
        href="https://www.facebook.com/flipmaxxglobal"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-500 transition transform hover:scale-110"
        aria-label="Facebook"
      >
        <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
          <path d="M22 12.07C22 6.6 17.52 2 12 2S2 6.6 2 12.07c0 4.99 3.66 9.12 8.44 9.87v-6.99H7.9v-2.88h2.54V9.41c0-2.5 1.5-3.88 3.8-3.88 1.1 0 2.24.2 2.24.2v2.48h-1.26c-1.24 0-1.63.78-1.63 1.58v1.9h2.77l-.44 2.88h-2.33v6.99C18.34 21.19 22 17.06 22 12.07z"/>
        </svg>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/flipmaxx"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-pink-500 transition transform hover:scale-110"
        aria-label="Instagram"
      >
        <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
          <path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9A5.5 5.5 0 0116.5 22h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0 2A3.5 3.5 0 004 7.5v9A3.5 3.5 0 007.5 20h9a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0016.5 4h-9zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.5-2a1 1 0 110 2 1 1 0 010-2z" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/company/flipmaxx"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-300 transition transform hover:scale-110"
        aria-label="LinkedIn"
      >
        <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
          <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM7.1 20.3H3.8V9h3.3v11.3zM5.5 7.6C4.3 7.6 3.3 6.6 3.3 5.5S4.3 3.3 5.5 3.3 7.6 4.3 7.6 5.5 6.6 7.6 5.5 7.6zM20.3 20.3h-3.3v-5.4c0-1.3-.4-2.3-1.6-2.3-1 0-1.6.7-1.9 1.3-.1.3-.2.6-.2 1v5.4h-3.3s.1-8.8 0-9.7h3.3v1.4c.4-.7 1.2-1.7 2.9-1.7 2.1 0 3.7 1.4 3.7 4.4v5.6z" />
        </svg>
      </a>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}