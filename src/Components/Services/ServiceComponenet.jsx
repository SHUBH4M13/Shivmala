import React from 'react'

export default function ServiceComponenet({heading , photo}) {
  return (
    <div className=' flex flex-col '>

        <div>
            <p>{heading}</p>
        </div>

        <div>
            <img src={photo} alt="" />
        </div>

        <div className='flex'>
            
        </div>

    </div>
  )
}
