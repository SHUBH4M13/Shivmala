import React from 'react';
import DotsSVG from './DotsSVG';

export default function ProjectsHero() {
    return (
        <div className="flex flex-col justify-center items-center px-4 sm:px-10 py-12">
            {/* Small Heading */}
            <div>
                <span className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A]">
                    Initiatives
                </span>
            </div>

            <div className="font-extrabold mt-6 sm:mt-8 text-center text-[#1A1A1A] text-2xl sm:text-4xl lg:text-5xl leading-tight max-w-full whitespace-nowrap overflow-auto">
                <span>
                    Capturing <span className="text-blueEnd">Moments</span>, Sharing <span className="text-blueEnd">Stories</span>
                </span>
            </div>


            <div className="mt-6 sm:mt-8">
                <DotsSVG />
            </div>

            <div className="flex justify-center items-center mt-4 sm:mt-6 px-4">
                <p className="font-medium text-center text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl text-gray-800">
                    SHIVMALA’s long-term efforts to strengthen our members’ role in society,
                    help advance the profession, and create positive change.
                </p>
            </div>

            {/* Bottom Dots */}
            <div className="mt-6 sm:mt-8">
                <DotsSVG />
            </div>
        </div>
    );
}
