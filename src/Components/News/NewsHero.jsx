import React from 'react';
import Building from '../../assets/Building.jpg';
import NewsText from '../News/NewsText';

export default function NewsHero({HeroData}) {
  return (
    <div className=" bg-[#F1F1F1] px-6 sm:px-10 lg:px-20 py-10 flex flex-col gap-6 text-black">
      
      {/* Heading Section */}
      <div className="flex flex-col gap-2">
        <span className="text-xl sm:text-2xl lg:text-3xl uppercase font-medium">News & Media</span>
        <span className="text-4xl sm:text-5xl lg:text-6xl uppercase font-bold">SHIVMALA Newsroom</span>
      </div>

      {/* Image + Text Block */}
      <div className="mt-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        
        {/* Image with custom ring */}
        <div className="relative w-full max-w-[500px] h-[280px] overflow-hidden group">
          <img
            className="w-full h-full object-cover"
            src={Building}
            alt="Building"
          />
          <div className="absolute bottom-0 left-0 w-full h-full border-l-8 border-b-8 border-yellow-400 opacity-0 group-hover:opacity-100 pointer-events-none" />
        </div>

        {/* News Text */}
        <div className="w-full max-w-[500px] px-2 sm:px-0">
          <NewsText
            titleSize='text-5xl'
            category="Company news"
            title="SHIVMALA’s impact on infrastructure in 2025"
            date="30 April 2025"
          />
        </div>
      </div>
    </div>
  );
}
