import React from 'react'

export default function ServiceImg({photo}) {
    return (
        <div className="w-full lg:w-1/2 max-w-[629px] h-[500px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-md">
            <img
                src={photo}
                alt="Service Building"
                className="w-full h-full object-cover"
            />
        </div>
    )
}
