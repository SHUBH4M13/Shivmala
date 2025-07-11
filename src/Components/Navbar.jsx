import { useState } from 'react'
import { Menu } from "lucide-react"
import ShivmalaLogo from "../assets/ShivmalaLogo.png"

export default function Navbar() {

    const [ToggleMenu,SetToggleMenu] = useState(false);

    function HandleToggleMenu(){
        SetToggleMenu( (prev) => !prev)
    }

    return (
        <div className='w-full h-[90px] flex justify-between items-center px-6'>

            <div className='h-full w-1/3 flex items-center'>
                <img 
                className='h-[200px] '
                src={ShivmalaLogo} alt="CompanyLogo" />
            </div>

            <div className='h-full w-2/3 flex items-center justify-end'>
                <nav className='hidden lg:flex gap-8 font-semibold'>
                    <ul className=' hidden ml-5 font-semibold md:flex gap-8'>
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

                <div className=' md:hidden cursor-pointer ml-4 text-black'>
                    <Menu size={28} />
                </div>

                {}


            </div>
        </div>
    )
}
