'use client';
import { BiSolidRightArrow } from "react-icons/bi";
import Aboutvid from "../Components/AboutComponents/Aboutvid";
import AboutLetters from "../Components/AboutComponents/AboutLetters";

export default function AboutLanding() {


  return (
    <div>
              <div className="relative w-full h-96 bg-black overflow-hidden">
                <video
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src="./Images/4.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/20" />
                <div className="relative z-10 flex items-center justify-start px-3 h-full">
             <div className='flex flex-col gap-y-4'>
                   <h2 className="text-white text-3xl font-bold text-start">Our Services</h2>
                  <h2 className="text-white text-sm font-bold text-start flex items-center gap-1">Home <BiSolidRightArrow className="w-3 h-3 text-white" /> Services</h2>
             </div>
                </div>
              </div>
        <Aboutvid/>
        <AboutLetters/>
    </div>
  );
}
