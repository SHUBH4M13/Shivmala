import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function MaharastraLoc() {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const LocationData = [
        {
            City: "Pune",
            OfficeType: "Head Office",
            Address: "2000 S. Pune Blvd., Suite 2-500 Pune, Maharashtra, India – 411001",
            Highlight: "This is the nerve center of our operations—housing senior engineers, project managers, architects, and client support teams. From tender processing to final project delivery, everything begins here."
        },
        {
            City: "Latur",
            OfficeType: "Regional Office",
            Address: "Shivmala Infra, Station Road, Latur, Maharashtra – 413512",
            Highlight: "Specialized in executing building and drainage projects. Supports on-site teams with logistics, reporting, and material coordination."
        },
        {
            City: "Ambejogai",
            OfficeType: "Site Coordination Office",
            Address: "Behind Municipal Office, Ambejogai – 431517",
            Highlight: "Primarily handles labor and contractor coordination, minor project supervision, and procurement follow-ups for nearby locations."
        },
    ];

    return (
        <div className='flex flex-col px-4 sm:px-10 py-5'>
            <div className='text-xl sm:text-2xl font-bold px-4 sm:px-10 justify-start'>
                MAHARASHTRA
            </div>

            <div className='py-5 px-4 sm:px-10 flex flex-col gap-8 sm:gap-12 w-full max-w-4xl mx-auto'>
                {LocationData.map((location, index) => (
                    <div key={index} className='border-b border-gray-200 pb-4'>
                        <div
                            className='flex items-center justify-between cursor-pointer'
                            onClick={() => toggleOpen(index)}
                        >
                            <div className='flex items-center gap-4 sm:gap-6'>
                                <span className='text-lg sm:text-xl font-medium hover:text-HoverBlue'>{location.City}</span>
                                <div className='rounded-xl bg-amber-400/50 p-1 sm:p-2'>
                                    <p className='font-bold text-xs sm:text-sm'>{location.OfficeType}</p>
                                </div>
                            </div>
                            <ChevronDown
                                className={
                                    `transition-transform duration-300 ease-in-out w-5 h-5 sm:w-6 sm:h-6 ${openIndex === index ? 'rotate-180' : ''}`
                                }
                            />
                        </div>

                        {openIndex === index && (
                            <div className='mt-4 p-4 bg-gray-100 rounded-lg animate-fade-in'>
                                <p className='text-sm sm:text-base'>{location.Address}</p>
                                <p className='mt-2 text-xs sm:text-sm text-gray-600'>{location.Highlight}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}