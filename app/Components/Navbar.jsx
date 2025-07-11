'use client';
import { useState, useEffect, useRef } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef(null);
  const desktopMenuRef = useRef(null);
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const menuButtonRef = useRef(null);
  const tlMobile = useRef();
  const tlDesktop = useRef();
  const tlNavbar = useRef();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
      { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    tlNavbar.current = gsap.timeline()
      .from(navbarRef.current, {
        y: -80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      })
      .from(logoRef.current, {
        x: -20,
        opacity: 0,
        duration: 0.5,
        ease: "back.out"
      }, "-=0.5")
      .from(menuButtonRef.current, {
        x: 20,
        opacity: 0,
        duration: 0.5,
        ease: "back.out"
      }, "-=0.5");
    tlMobile.current = gsap.timeline({ paused: true })
      .fromTo(mobileMenuRef.current, 
        { y: -20, opacity: 0, display: "none" },
        { y: 0, opacity: 1, display: "flex", duration: 0.4, ease: "power2.out" }
      )
      .from(mobileMenuRef.current.querySelectorAll("a"), 
        { y: 20, opacity: 0, stagger: 0.1, duration: 0.3, ease: "back.out" },
        "-=0.3"
      );
    tlDesktop.current = gsap.timeline({ paused: true })
      .fromTo(desktopMenuRef.current,
        { y: -50, opacity: 0, display: "none" },
        { y: 0, opacity: 1, display: "flex", duration: 0.5, ease: "expo.out" }
      )
      .from(desktopMenuRef.current.querySelectorAll("a"),
        { y: 30, opacity: 0, stagger: 0.15, duration: 0.4, ease: "elastic.out(1, 0.5)" },
        "-=0.4"
      );
    const scrollTriggerConfig = {
      trigger: document.body,
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        if (self.direction === -1) { 
          gsap.to(navbarRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        } else if (self.direction === 1 && self.scroll() > 100) {
          gsap.to(navbarRef.current, {
            y: -20,
            opacity: 0.9,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      }
    };

    if (window.innerWidth >= 768) {
      gsap.to(navbarRef.current, {
        scrollTrigger: scrollTriggerConfig
      });
    }

    return () => {
      tlNavbar.current.kill();
      if (window.innerWidth >= 768) {
        ScrollTrigger.getById("navbar-scroll")?.kill();
      }
    };
  }, []);

  useEffect(() => {
    if (open) {
      if (window.innerWidth >= 768) {
        tlDesktop.current.play();
      } else {
        tlMobile.current.play();
      }
    } else {
      tlDesktop.current.reverse();
      tlMobile.current.reverse();
    }
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav 
        ref={navbarRef}
        className={` w-full z-50 transition-all duration-300 border-b border-black ${scrolled ? "bg-white shadow-md py-2" : "bg-white py-4"}`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex justify-between items-center h-8">
            <div ref={logoRef} className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <img
                  src="./Images/FLIP.png"
                  alt="Flipmaxx Logo"
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            <div ref={menuButtonRef} className="flex items-center border-l">
              <button
                onClick={() => setOpen(!open)}
                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black focus:outline-none"
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
              >
                {open ? (
                  <RiCloseLine className="block h-6 w-6" />
                ) : (
                  <RiMenu3Line className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div 
        ref={mobileMenuRef}
        className="md:hidden fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col items-center overflow-hidden"
        style={{ display: 'none' }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`w-full text-center py-5 text-2xl font-medium border-b border-gray-100 transition-colors ${pathname === link.href ? "text-black" : "text-gray-800 hover:text-red-600"}`}
            onClick={() => setOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
<div 
  ref={desktopMenuRef}
  className="hidden md:grid md:grid-cols-2 fixed inset-0 z-40"
>
  <div className="bg-black/60 backdrop-blur-sm flex items-center justify-center w-full">
    
  </div>
  
  <div className="bg-white grid grid-cols-2 w-full">
    
    <div className="p-8 max-w-full">
      <nav className="flex flex-col space-y-4 items-start justify-center">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`text-xl lg:text-5xl mt-10 font-bold transition-colors w-full ${
              pathname === link.href 
                ? "text-black" 
                : "text-black hover:text-black"
            }`}
            onClick={() => setOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  </div>
</div>
    </>
  );
}