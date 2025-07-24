import React from 'react'
import NewsText from './NewsText'

export default function NewsComponent({Newsimg ,category ,title, date}) {
  return (
    <div className=' flex flex-col '>

        <div className=' w-[400px] h-[230px] border-black border-2'>
            <img 
            className=' w-full h-full'
            src={Newsimg} alt="News Photo" />
            <div className="absolute bottom-0 left-0 w-full h-full border-l-8 border-b-8 border-yellow-400 opacity-0 group-hover:opacity-100 pointer-events-none" />
        </div>

        <div className=' mt-3 '>
            <NewsText
            titleSize='text-[22px]'
            gap='gap-1'
            category={category[0]}
            title={title}
            date={date}
            />
        </div>

    </div>
  )
}
