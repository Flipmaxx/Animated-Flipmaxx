'use client'

import Abouth from "../Components/Homepage/Abouth"
import Companies from "../Components/Homepage/Companies"
import ContactSection from "../Components/Homepage/Contacts"
import ExpertiseSection from "../Components/Homepage/Expert"
import Footer from "../Components/Homepage/Footer"
import Landing from "../Components/Homepage/Landing"
import TeamSection from "../Components/Homepage/Meetmyteam"
// import Linedown from "../Components/Homepage/Linedown"
import Servicesh from "../Components/Homepage/Servicesh"
import TestimonialSection from "../Components/Homepage/Testimonials"
import WhyChoose from "../Components/Homepage/Why"
import WorkingProcessSection from "../Components/Homepage/Working"

export default function Hero(){
    return(
        <div className="text-6xl overflow-x-hidden">
            <Landing/>
            {/* <Companies/> */}
            <Servicesh/>
            <Abouth/>
            <WorkingProcessSection/>
            <WhyChoose/>
            <ExpertiseSection/>
           
            {/* <TeamSection/> */}
            <ContactSection/>
             {/* <TestimonialSection/> */}
           
            {/* <Linedown/> */}
        </div>
    )
}