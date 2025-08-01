// LocationItem.jsx
import React from 'react';
import { ChevronDown } from 'lucide-react'; // Example icon library

const LocationItem = ({ location, isOpen, onClick }) => (
    <div>
        <div
            className='flex items-center justify-between cursor-pointer'
            onClick={onClick}
        >
            <div className='flex gap-6 items-center'>
                <span className='text-xl font-medium hover:text-HoverBlue'>{location.City}</span>
                <div className='rounded-xl bg-amber-400/50 p-2'>
                    <p className='font-bold text-sm'>{location.OfficeType}</p>
                </div>
            </div>
            <ChevronDown
                className={isOpen ? 'rotate-180 transition-transform' : 'transition-transform'}
            />
        </div>
        {isOpen && (
            <div className='mt-4 p-4 bg-gray-100 rounded-lg'>
                <p>{location.Address}</p>
                <p className='mt-2 text-sm text-gray-600'>{location.Highlight}</p>
            </div>
        )}
    </div>
);

export default LocationItem;