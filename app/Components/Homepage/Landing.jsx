"use client";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Landing() {
  const imageRef = useRef(null);
  const secondHeroRef = useRef(null);
  const overlayRef = useRef(null);
  const squareRef = useRef(null);
  const [showContent, setShowContent] = useState(false);
  const [skipAnimation, setSkipAnimation] = useState(false);

  useLayoutEffect(() => {
    const hasPlayed = sessionStorage.getItem("introPlayed");

    // If animation has already played, skip GSAP and show content directly
    if (hasPlayed) {
      setSkipAnimation(true);
      setShowContent(true);
      gsap.set(secondHeroRef.current, { autoAlpha: 1 });
      gsap.set(overlayRef.current, { autoAlpha: 0 });
      gsap.set(imageRef.current, { display: "none" });
      return;
    }

    // Otherwise play animation once
    const calculateScale = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      return Math.max(width, height) / 20;
    };

    gsap.set(secondHeroRef.current, { autoAlpha: 0 });
    gsap.set(overlayRef.current, { autoAlpha: 0 });
    gsap.set(squareRef.current, { scale: 1 });

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        setShowContent(true);
        sessionStorage.setItem("introPlayed", "true"); // ✅ mark as played
      },
    });

    tl.from(imageRef.current, {
      y: "70vh",
      duration: 0.77,
      opacity: 0,
      ease: "back.out(1.7)",
    });

    tl.to(imageRef.current, {
      y: "-70vh",
      opacity: 0,
      duration: 0.66,
      delay: 1,
      ease: "power3.in",
      onComplete: () => gsap.set(imageRef.current, { display: "none" }),
    });

    tl.to(
      overlayRef.current,
      {
        autoAlpha: 1,
        duration: 0.5,
      },
      "-=0.3"
    );

    tl.to(squareRef.current, {
      scale: calculateScale(),
      duration: 2,
      ease: "power3.inOut",
      onComplete: () => {
        gsap.set(secondHeroRef.current, { autoAlpha: 1 });
        gsap.set(overlayRef.current, { autoAlpha: 0 });
      },
    });

    const handleResize = () => {
      gsap.set(squareRef.current, { scale: 1 });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Intro Animation (hidden if already played) */}
      {!skipAnimation && (
        <>
          <div
            ref={imageRef}
            className="fixed inset-0 flex items-center justify-center bg-white z-[100]"
          >
            <img
              src="./Images/FLIP.png"
              alt="Flipmaxx Logo"
              className="w-full max-w-[80%] md:max-w-md"
            />
          </div>

          <div
            ref={overlayRef}
            className="fixed inset-0 flex items-center justify-center bg-black z-[99]"
          >
            <h2 className="absolute text-sm md:text-2xl xl:text-6xl text-white">
              Solution`s that make a difference 
            </h2>
            <div
              ref={squareRef}
              className="w-[50px] h-[50px] sm:w-20 sm:h-20 bg-white border-4 border-white"
              style={{
                mixBlendMode: "difference",
                transformOrigin: "center center",
              }}
            ></div>
          </div>
        </>
      )}

      {/* Main Content */}
      <div
        ref={secondHeroRef}
        className={`transition-opacity duration-700 ${
          showContent ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <video
          src="./Images/LOOP.mp4"
          className="w-full h-screen object-cover"
          loop
          autoPlay
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="flex flex-col items-start absolute bottom-70 left-10 md:left-20 xl:left-37 text-4xl font-light text-white">
          <h1 className=" text-xl lg:text-5xl xl:text-7xl">Flipmaxx Global LLP</h1>
          <p className="text-sm mt-6 lg:mt-12  lg:text-xl max-w-xl">
            Solutions that make a difference →
          </p>
        </div>
      </div>
    </div>
  );
}
