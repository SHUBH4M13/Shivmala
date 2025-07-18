import React from 'react'
import DotsSVG from './DotsSVG'

export default function ProjectsHero() {
    return (
        <div className=' flex flex-col justify-center items-center p-10 '>
            <div>
                <span className=' font-extrabold text-5xl text-[#1A1A1A]'>Initiatives</span>
            </div>

            <div className='font-extrabold mt-10 text-[#1A1A1A] text-6xl'>
                <span>Capturing <span className=' text-blueEnd  '>Moments</span> , Sharing <span className=' text-blueEnd ' >Stories</span></span>
            </div>

            <div>
                <DotsSVG/>
            </div>

            <div className="flex justify-center items-center mt-3 mb-3 ">
                <p className=" font-bold text-center max-w-xl text-wrap leading-snug">
                    SHIVMALA’s long-term efforts to strengthen our members’ role in society,
                    help advance the profession and create positive change.
                </p>
            </div>

            <div>
                <DotsSVG/>
            </div>


        </div>
    )
}
