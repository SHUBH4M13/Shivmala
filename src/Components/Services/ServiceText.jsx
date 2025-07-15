import React from 'react'

export default function ServiceText({ ServiceHeading, ServiceDesc, Side = "start" }) {
    const alignment = Side === "end" ? "items-end text-right" : "items-start text-left";

    return (
        <div className={`flex flex-col ${alignment} gap-4`}>
            <div className='w-[40px] bg-black h-[1px]'></div>

            <div className='font-semibold text-4xl sm:text-5xl leading-snug'>
                <p>{ServiceHeading}</p>
            </div>

            <div className='text-base sm:text-lg text-gray-700 max-w-xl'>
                <p>{ServiceDesc}</p>
            </div>
        </div>
    )
}
