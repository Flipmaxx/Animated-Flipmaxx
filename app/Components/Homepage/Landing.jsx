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
          src="https://videos.pexels.com/video-files/6774633/6774633-sd_640_360_30fps.mp4"
          className="w-full h-screen object-cover"
          loop
          autoPlay
          muted
          playsInline
        />
        <div className='absolute inset-0 w-full h-screen bg-black/50'></div>

        <div className='flex flex-col items-start absolute top-40 left-7 text-4xl font-bold  text-white'>
          <h1>Flipmaxx Global LLp</h1>
          <p className='text-sm mt-2'>From concept to click</p>
        </div>
      </div>
    </div>
  );
}