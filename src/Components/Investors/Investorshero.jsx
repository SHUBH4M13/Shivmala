import React from 'react'
import Investorsp1 from "../../assets/Investorsp1.jpg"
export default function Investorshero() {
    return (
        <div className="relative w-full h-[581px] overflow-hidden">
            <img
                src={Investorsp1}
                alt="Investor"
                className="w-full h-full object-cover z-0"
            />
            <div className="absolute p-30 inset-0 z-10 flex items-center justify-start">
                <span className="text-white text-7xl font-boldness drop-shadow-md">
                    Our Investors
                </span>
            </div>
        </div>

    )
}
