import React from 'react'
import { Twitter, Linkedin, Youtube, Instagram, Facebook } from "lucide-react"

export default function Footer() {
    return (
        <div className='w-full bg-plainGrey px-10 py-12'>
            <div className='flex flex-col md:flex-row justify-between w-full gap-10'>

                <div className='flex flex-col items-center justify-center md:flex-row gap-14 md:w-1/2'>

                    <ul className='font-semibold space-y-3'>
                        <li className='text-lg cursor-pointer hover:text-primaryblue duration-200'>Home</li>
                        <li className='text-lg cursor-pointer hover:text-primaryblue duration-200'>About us</li>
                        <li className='text-lg cursor-pointer hover:text-primaryblue duration-200'>Services</li>
                        <li className='text-lg cursor-pointer hover:text-primaryblue duration-200'>For media Inquiries</li>
                        <li className='text-lg cursor-pointer hover:text-primaryblue duration-200'>Help</li>
                    </ul>

                    <ul className='font-semibold space-y-3'>
                        <li className='text-lg cursor-pointer hover:text-primaryblue duration-200'>Contact us</li>
                        <li className='text-lg cursor-pointer hover:text-primaryblue duration-200'>Projects</li>
                        <li className='text-lg cursor-pointer hover:text-primaryblue duration-200'>Career & Growth</li>
                        <li className='text-lg cursor-pointer hover:text-primaryblue duration-200'>News & Media</li>
                        <li className='text-lg cursor-pointer hover:text-primaryblue duration-200'>Investors</li>
                    </ul>
                </div>

                <div className='flex flex-col justify-between md:w-1/2 gap-4'>

                    <div className='flex flex-wrap items-center gap-4'>
                        <p className='hover:text-primaryblue cursor-pointer'>8424142486</p>
                        <div className='w-[1.5px] h-[28px] bg-gray-300' />
                        <p className='hover:text-primaryblue cursor-pointer'>+1 703-295-6300 (international number)</p>
                        <div className='w-[1.5px] h-[28px] bg-gray-300' />
                        <p className='hover:text-primaryblue cursor-pointer'>Contact us</p>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-4'>
                            {[Twitter, Linkedin, Youtube, Instagram, Facebook].map((Icon, idx) => (
                                <div key={idx} className="group flex justify-center items-center w-[40px] h-[40px] border-[2px] border-primaryblue rounded-full hover:bg-primaryblue transition duration-200 cursor-pointer">
                                    <Icon size={24} className="text-primaryblue group-hover:text-white transition duration-200" />
                                </div>
                            ))}
                        </div>

                        <div className='w-fit px-4 py-1 rounded-2xl border-[2px] border-primaryblue cursor-pointer hover:bg-primaryblue hover:text-white transition'>
                            <p>Chat on WhatsApp</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <div className='w-1/2 h-[1px] bg-gray-300'></div>

                        <p className='text-sm'>© 2025 Shivmala</p>

                        <div className='flex flex-wrap items-center gap-4 text-sm'>
                            <p className='hover:text-primaryblue cursor-pointer'>Code of Conduct</p>
                            <div className='w-[1.5px] h-[20px] bg-gray-300' />
                            <p className='hover:text-primaryblue cursor-pointer'>Privacy</p>
                            <div className='w-[1.5px] h-[20px] bg-gray-300' />
                            <p className='hover:text-primaryblue cursor-pointer'>Terms & Conditions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
