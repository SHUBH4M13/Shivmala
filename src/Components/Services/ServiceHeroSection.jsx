import React from 'react'
import ServicePhoto from "../../assets/ServicePhoto.png"
import { useNavigate } from 'react-router'

export default function ServiceHeroSection() {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col-reverse lg:flex-row bg-white justify-between items-center  py-10 gap-10'>

            <div className="text-center lg:text-left w-full lg:w-2/3">
                <p className='font-bold text-4xl px-6 lg:px-24 sm:text-5xl lg:text-7xl leading-snug'>
                    Building a <br />Concrete Future
                </p>
                <p className='text-xl px-6 lg:px-24 sm:text-2xl font-light mt-4'>
                    Honest, Reliable Builders since 1968
                </p>

                <div className='mt-6 px-6 lg:px-24 '>
                    <button
                        className='px-6 py-3 cursor-pointer bg-[#3B82F6] text-white rounded-md hover:bg-[#2676f7] transition duration-200'
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
