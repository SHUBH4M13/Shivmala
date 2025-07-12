import React from 'react'

export default function BigHoverBox({ photo, heading1, heading2, heading3 }) {
  return (
    <div className="shadow-xl hover:shadow-black/50 w-[300px] sm:w-[450px] lg:w-[842px] h-auto sm:h-[330px] group hover:bg-HoverBlue duration-200 rounded-xl flex flex-col sm:flex-row overflow-hidden bg-white mx-auto">

      <div className="w-full sm:w-1/2 h-[200px] sm:h-full">
        <img
          src={photo}
          alt="Tragedy Relief"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full sm:w-1/2 p-4 sm:p-6 flex flex-col justify-center gap-4">
        {heading1 && (
          <div className="flex items-center gap-3">
            <div className="w-[5px] h-[30px] rounded-xl bg-gradient-to-b from-[#9FD64D] to-[#2297B6]"></div>
            <p className="uppercase font-semibold text-[14px] sm:text-[15px] group-hover:text-white transition-colors duration-200">
              {heading1}
            </p>
          </div>
        )}


        <div className="font-bold text-[20px] sm:text-[24px] group-hover:text-white transition-colors duration-200">
          <p>{heading2}</p>
        </div>

        <div>
          <p className="font-light text-[16px] sm:text-[18px] text-black group-hover:text-white transition-colors duration-200">
            {heading3}
          </p>
        </div>
      </div>
    </div >
  )
}
