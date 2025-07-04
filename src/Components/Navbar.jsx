import React from 'react'
import { Menu } from "lucide-react"

export default function Navbar() {
    return (
        <div className='w-full h-[90px] flex justify-between items-center px-6'>

            <div className='h-full w-1/3 flex items-center'>
            </div>

            <div className='h-full w-2/3 flex items-center justify-end'>
                <nav className='hidden lg:flex gap-8 font-semibold'>
                    <ul className=' ml-5 font-semibold flex gap-8'>
                        <li className=' text-lg cursor-pointer hover:text-primaryblue duration-200 '>Home</li>
                        <li className=' text-lg cursor-pointer hover:text-primaryblue duration-200 ' >About us</li>
                        <li className=' text-lg cursor-pointer hover:text-primaryblue duration-200 ' >Contact us</li>
                        <li className=' text-lg cursor-pointer hover:text-primaryblue duration-200 ' >Projects</li>
                        <li className=' text-lg cursor-pointer hover:text-primaryblue duration-200 ' >Career</li>
                        <li className=' text-lg cursor-pointer hover:text-primaryblue duration-200 ' >News & Media</li>
                        <li className=' text-lg cursor-pointer hover:text-primaryblue duration-200 '>Investors</li>
                        <li className=' text-lg cursor-pointer hover:text-primaryblue duration-200 '>Services</li>
                    </ul>
                </nav>

                <div className='cursor-pointer ml-4 text-black'>
                    <Menu size={28} />
                </div>
            </div>
        </div>
    )
}
