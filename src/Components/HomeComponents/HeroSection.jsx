import React from 'react'
import CusButton from '../CusButton'
import ConstrcutionVideo from "../../assets/ConstrcutionVideo.mp4"
import { motion } from "motion/react"
import { useMediaQuery } from "react-responsive";
import ShivmalaLogo from "../../assets/ShivmalaLogo.png"

export default function HeroSection() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const initialX = isMobile ? 0 : -200;
  return (
    <div className="flex flex-col-reverse md:flex-row items-center w-full">

      <div className="w-full  md:w-1/2 p-6 md:p-20">
        <motion.div
          initial={{ opacity: 0, x: initialX }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col">
                            <p className="font-boldness-heavy text-4xl sm:text-5xl leading-tight">
              Infrastructure Leaders Building Communities
            </p>
            <p className="pt-5 text-base sm:text-lg">
              Tough problems require innovative solutions. At Shivmala, we engineer tomorrow’s infrastructure today. Join us as we move forward faster, redefining the infrastructure landscape            </p>
          </div>

          <div className=" flex justify-center items-center sm:justify-normal pt-8">
            <CusButton text="Join Now" wid='200px' />
          </div>
        </motion.div>
      </div>

      <div className="relative w-full md:w-1/2 h-[300px] sm:h-[450px] md:h-[453px] overflow-hidden">

        <video
          className="w-full h-full object-cover"
          src={ConstrcutionVideo}
          autoPlay
          muted
          loop
        />

        <img
          src={ShivmalaLogo}
          alt="Overlay"
          className="absolute top-50 left-0 w-[150px] h-full object-contain z-10"
        />
      </div>

    </div>
  )
}
