import React from 'react'

export default function CusButton({ text, onClick, wid = '120px' }) {
    return (
        <div className="bg-gradient-to-r from-blueStart to-blueEnd p-[2px] rounded-[2rem] w-fit inline-block">
            <button
                onClick={onClick}
                className={` cursor-pointer font-bold bg-white hover:bg-gradient-to-r from-blueStart to-blueEnd hover:text-white text-black rounded-[2rem] duration-300 w-[${wid}] h-[50px]`}
            >
                {text}
            </button>
        </div>
    );
}
