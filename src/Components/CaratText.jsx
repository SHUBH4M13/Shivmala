import React from 'react'

export default function CaratText({ heading1, heading2, h2Size = "20px" }) {
  return (
    <div className="w-full">
      <div className="flex gap-3 items-center">
        {heading1 && (
          <>
            <div className="w-[5px] h-[30px] rounded-xl bg-gradient-to-b from-[#9FD64D] to-[#2297B6]"></div>
            <p className="uppercase font-emphasis text-[15px]">{heading1}</p>
          </>
        )}
      </div>

              <div className="font-boldness sm:text-[24px] mt-2" style={{ fontSize: h2Size }}>
        <p>{heading2}</p>
      </div>

    </div>
  )
}
