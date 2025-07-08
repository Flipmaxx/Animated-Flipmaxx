'use client'

import Abouth from "../Components/Homepage/Abouth"
import Landing from "../Components/Homepage/Landing"
// import Linedown from "../Components/Homepage/Linedown"
import Servicesh from "../Components/Homepage/Servicesh"

export default function Hero(){
    return(
        <div className="text-6xl overflow-x-hidden">
            {/* <Landing/> */}
            {/* <Abouth/> */}
            <Servicesh/>
            {/* <Linedown/> */}
        </div>
    )
}