import React from 'react'
import CaratText from "./CaratText"
import CusButton from './CusButton'

export default function ZoomPhotoText({ photo, heading1, heading2, text1, ButtonText, onClick, textalign }) {
  return (
    <div className='flex flex-col'>

      {photo && (
        <div className='w-[623px] h-[440px]'>
          <img src={photo} alt="zoom-img" className='w-full h-full object-cover' />
        </div>
      )}

      <div className='pt-10'>
        <CaratText
          heading1={heading1}
          heading2={heading2}
        />
      </div>

      {text1 && (
        <div className="pt-4">
          <p className="text-left leading-relaxed whitespace-pre-line text-[18px] font-normal text-gray-800">
            {text1}
          </p>
        </div>
      )}


      {ButtonText && (
        <div className='pt-10'>
          <CusButton
            text={ButtonText}
            onClick={onClick}
          />
        </div>
      )}
    </div>
  )
}
