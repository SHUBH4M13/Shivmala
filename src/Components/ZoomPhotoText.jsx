import React from 'react'
import CaratText from "./CaratText"
import CusButton from './CusButton'

export default function ZoomPhotoText({ photo, heading1, heading2, text1, ButtonText, onClick }) {
  return (
    <div className=' flex flex-col '>

      <div className=' w-[623px] h-[440px] '>
        <img src={photo} alt="" />
      </div>

      <div className=' pt-10 '>
        <CaratText
        heading1={heading1}
        heading2={heading2}
        />
      </div>

      <div>
        <p>{text1}</p>
      </div>


      <div className=' pt-10 '>
        <CusButton
          text={ButtonText}
          onClick={onClick}
        />
      </div>



    </div>
  )
}
