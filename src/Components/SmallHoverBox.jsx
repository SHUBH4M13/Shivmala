import React from 'react'

export default function SmallHoverBox({heading1 , heading2 , heading3}) {
    return (
        <div className='w-[407px] flex flex-col gap-5 hover:bg-HoverBlue hover:text-white duration-200 rounded-xl bg-white p-10 h-[333px]'>

            <div className=' flex gap-3 items-center'>
                <div className=' w-[5px] h-[30px] rounded-xl bg-linear-to-b from-[#9FD64D] to-[#2297B6]'></div>
                <div>
                    <p className='uppercase font-semibold text-[15px]'>SHIVMALA RESPONSE</p>
                </div>
            </div>

            <div className=' w-full font-bold text-[24px] '>
                <p>Help victims of recent
                    tragedies</p>
            </div>

            <div>
                <p className=' font-light text-[18px] '>Support those affected by recent
                    earthquakes, fires, hurricanes, floods,
                    and other catastrophes.</p>
            </div>

        </div>
    )
}
