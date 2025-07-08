import React from 'react'
import Photo1 from "../assets/Photo1.jpg"

export default function BigHoverBox() {
  return (
    <div className="w-full max-w-[842px] h-auto sm:h-[330px] group hover:bg-HoverBlue duration-200 rounded-xl flex flex-col sm:flex-row overflow-hidden bg-white mx-auto">
      
      {/* Left Photo */}
      <div className="w-full sm:w-1/2 h-[200px] sm:h-full">
        <img
          src={Photo1}
          alt="Tragedy Relief"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="w-full sm:w-1/2 p-4 sm:p-6 flex flex-col justify-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[5px] h-[30px] rounded-xl bg-gradient-to-b from-[#9FD64D] to-[#2297B6]"></div>
          <p className="uppercase font-semibold text-[14px] sm:text-[15px] group-hover:text-white transition-colors duration-200">
            shivmala ELECTION
          </p>
        </div>

        <div className="font-bold text-[20px] sm:text-[24px] group-hover:text-white transition-colors duration-200">
          <p>Haddock elected 2026 president-elect</p>
        </div>

        <div>
          <p className="font-light text-[16px] sm:text-[18px] text-black group-hover:text-white transition-colors duration-200">
            See who members chose as the newest Society leaders, including
            Board Directors and Region governors.
          </p>
        </div>
      </div>
    </div>
  )
}
