import React from 'react'
import { Search } from 'lucide-react'

export default function SearchBox() {
    return (
        <div className='w-full flex justify-center items-center pt-15 '>
            <div className='flex justify-center items-center  w-[350px] md:w-[500px] bg-gradient-to-r from-blueEnd to-blueStart lg:w-[850px] h-[120px] rounded-xl'>
                <div className='flex items-center justify-center w-[80%] bg-white h-[50px] rounded-full px-4'>
                    <input
                        className='flex-grow h-full rounded-full outline-none px-4 text-black bg-transparent'
                        type="text"
                        placeholder="Search..."
                    />
                    <div className='border border-green-600 cursor-pointer flex justify-center items-center bg-green-600 w-[40px] h-[40px] rounded-full'>
                        <Search className='text-blueStart w-4 h-4' />
                    </div>
                </div>
            </div>
        </div>
    )
}
