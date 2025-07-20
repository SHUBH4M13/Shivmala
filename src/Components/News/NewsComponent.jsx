import React from 'react'
import NewsText from './NewsText'

export default function NewsComponent({NewsImg}) {
  return (
    <div className=' flex flex-col '>

        <div className=' w-[400px] h-[230px] border-black border-2'>
            <img src={NewsImg} alt="" />
            <div className="absolute bottom-0 left-0 w-full h-full border-l-8 border-b-8 border-yellow-400 opacity-0 group-hover:opacity-100 pointer-events-none" />
        </div>

        <div className=' mt-3 '>
            <NewsText
            titleSize='text-[22px]'
            gap='gap-1'
            />
        </div>

    </div>
  )
}
