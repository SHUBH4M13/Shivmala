import React from 'react'
import CusButton from './CusButton'
import ConstrcutionVideo from "../assets/ConstrcutionVideo.mp4"

export default function HeroSection() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center w-full">
      
      <div className="w-full  md:w-1/2 p-6 md:p-20">
        <div className="flex flex-col">
          <p className="font-extrabold text-4xl sm:text-5xl leading-tight">
            Infrastructure leaders building communities
          </p>
          <p className="pt-5 text-base sm:text-lg">
            Tough problems require innovative solutions. Now is the time <br />
            to be bold. Shivmala members engineer tomorrow and <br />
            reimagine infrastructure. Move forward faster with Shivmala.
          </p>
        </div>

        <div className=" flex justify-center items-center sm:justify-normal  pt-8">
          <CusButton text="Join Now" />
        </div>
      </div>

      <div className="w-full md:w-1/2 h-[300px] sm:h-[450px] md:h-[453px] overflow-hidden">
        <video
          className="w-full h-full object-cover"x
          src={ConstrcutionVideo}
          controls
          autoPlay
          muted
          loop
        />
      </div>
    </div>
  )
}
