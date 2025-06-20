'use client'

import Postings from "../Components/CareersAssets/Postings"


export default function Careers(){
  return(
    <div className="mx-auto p-3">
         
          {/* first */}
<div className="max-w-full h-96 mt-7 rounded-xl bg-gradient-to-r from-orange-500 via-yellow-400 via-green-500 to-blue-500 flex flex-col justify-center items-start text-start text-white px-4">
  <h1 className="text-xl md:text-5xl font-bold max-w-3xl leading-snug">
    LET'S WORK TOGETHER AND EXPLORE OPPORTUNITIES
  </h1>
  <p className="mt-4 text-lg text-start">Your new career starts today...!</p>
</div>


     {/* currrent Openings */}
        <div>
          <Postings/>
        </div>
    </div>
  )
}