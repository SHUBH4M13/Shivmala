import React from 'react'
import CaratText from "./CaratText"
import CusButton from './CusButton'

export default function ZoomPhotoText({ photo, heading1, heading2, text1, ButtonText, onClick, textalign }) {
  return (
    <div className='flex flex-col w-full max-w-[95%] md:max-w-[700px] mx-auto px-4'>

      {photo && (
        <div className='w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[440px]'>
          <img src={photo} alt="zoom-img" className='w-full h-full object-cover rounded-lg duration-300 ease-in-out transform hover:scale-101' />
        </div>
      )}

      <div className='pt-6 sm:pt-8 md:pt-10'>
        <CaratText
          heading1={heading1}
          heading2={heading2}
        />
      </div>

      {text1 && (
        <div className="pt-3 sm:pt-4">
          <p className={`leading-relaxed whitespace-pre-line text-[16px] sm:text-[17px] md:text-[18px] font-normal text-gray-800 ${textalign || 'text-left'}`}>
            {text1}
          </p>
        </div>
      )}

      {ButtonText && (
        <div className='pt-6 flex justify-center sm:justify-start sm:pt-8 md:pt-10'>
          <CusButton
            text={ButtonText}
            onClick={onClick}
          />
        </div>
      )}
    </div>
  )
}
