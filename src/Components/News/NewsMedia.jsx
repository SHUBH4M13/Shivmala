import React from 'react'

export default function NewsMedia({MediaData}) {
    return (
        <div className='px-6 sm:px-10 lg:px-20 py-10 flex flex-col'>

            <span className=' text-3xl font-bold mb-5'>
                In the Media
            </span>

            <Headline
            title={"hello this is testing "}
            />
        </div>
    )
}


function Headline({title , date}) {
    return (
        <div>
            <span className={`font-semibold hover:text-green-800 cursor-pointer hover:underline transition duration-150 leading-snug text-lg`}>
                {title}
            </span>

            {/* Date Info */}
            <div className="text-sm sm:text-[15px] flex gap-2 text-gray-600 flex-wrap">
                <span>News Release</span>
                <span>|</span>
                <span>{date}</span>
            </div>
        </div>
    )
}