import React from 'react'
import ServicePhoto from "../../assets/ServicePhoto.png"
import { useNavigate } from 'react-router'

export default function ServiceHeroSection() {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col-reverse lg:flex-row bg-white justify-between items-center  py-10 gap-10'>
            {/* Left Section */}
            <div className="text-center lg:text-left w-full lg:w-1/2">
                <p className='font-semibold text-4xl px-6 lg:px-24 sm:text-5xl lg:text-7xl leading-snug'>
                    Building a <br />Concrete Future
                </p>
                <p className='text-xl px-6 lg:px-24 sm:text-2xl font-light mt-4'>
                    Honest, Reliable Builders since 1968
                </p>

                <div className='mt-6 px-6 lg:px-24 '>
                    <button
                        className='px-6 py-3 bg-[#3B82F6] text-white rounded-md hover:bg-blue-600 transition'
                        onClick={() => navigate('/projects')}
                    >
                        View Projects
                    </button>
                </div>
            </div>

            <div>
                <img
                    className='h-[400px] w-[350px]'
                    src={ServicePhoto}
                    alt="ServicePhoto"
                />
            </div>
        </div>
    )
}
