'use client'

import Abouth from "../Components/Homepage/Abouth"
import Landing from "../Components/Homepage/Landing"
import Servicesh from "../Components/Homepage/Servicesh"

export default function Hero(){
    return(
        <div className="text-6xl">
            <Landing/>
            <Abouth/>
            {/* <Servicesh/> */}
        </div>
    )
}