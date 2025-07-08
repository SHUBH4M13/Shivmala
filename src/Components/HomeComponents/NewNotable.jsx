import React from 'react'
import SmallHoverBox from '../SmallHoverBox'
import BigHoverBox from '../BigHoverBox'

export default function NewNotable() {
  return (
    <div className=' w-full h-fit flex flex-col gap-5 items-center '>
      <div className=' flex flex-col sm:flex-row justify-center gap-3  '>
        <BigHoverBox />
        <SmallHoverBox />
      </div>
      <div className=' flex flex-col sm:flex-row gap-3 justify-center '>
        <SmallHoverBox />
        <BigHoverBox />
      </div>
      <div className=' flex flex-col sm:flex-row justify-center gap-3 '>
        <BigHoverBox />
        <SmallHoverBox />
      </div>
    </div>
  )
}
