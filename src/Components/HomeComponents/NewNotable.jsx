import React from 'react'
import SmallHoverBox from '../SmallHoverBox'
import BigHoverBox from '../BigHoverBox'
import {motion} from "motion/react"
import Photo1 from "../../assets/Photo1.jpg"
import Photo2 from "../../assets/Photo2.jpg"
import Photo3 from "../../assets/Photo3.jpg"


export default function NewNotable() {
  return (
    <div className='w-full h-fit flex flex-col gap-10 items-center px-4 sm:px-10 py-10 sm:py-20'>

      <p className=' font-bold text-4xl  text-HoverBlue'>New & Notable</p>

      <motion.div 
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className='flex flex-col lg:flex-row justify-center items-center gap-6 flex-wrap'>
        <BigHoverBox
          photo={Photo1}
          heading1="shivmala ELECTION"
          heading2="Haddock elected 2026 president-elect"
          heading3="See who members chose as the newest Society leaders, including Board Directors and Region governors."
        />
        <SmallHoverBox
          heading1={"shivmala ELECTION"}
          heading2="Help victims of recent tragedies"
          heading3="Support those affected by recent earthquakes, fires, hurricanes, floods, and other catastrophes."
        />
      </motion.div>

      <motion.div
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className='flex flex-col lg:flex-row justify-center items-center gap-6 flex-wrap'>
        <SmallHoverBox
          heading1={"shivmala Foundation"}
          heading2="Inspire a kid to be an engineer"
          heading3="With a donation to the SHIVMALA Foundation, you’ll make possible free screenings of the exciting giant-screen Cities of the Future for students in underserved communities."
        />
        <BigHoverBox
          photo={Photo2}
          heading1="Report Card"
          heading2="SHIVMALA’s infrastructure grade improves to a ‘C’"
          heading3="The 2025 Report Card for America’s Infrastructure is here. See why the grade went up and learn about solutions to keep improving America’s infrastructure."
        />
      </motion.div>

      <motion.div 
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className='flex flex-col lg:flex-row justify-center items-center gap-6 flex-wrap'>
        <BigHoverBox
          photo={Photo3}
          heading1="shivmala 2025 Convention"
          heading2="Register Today"
          heading3="Join civil engineers from around the world in Seattle, Oct. 8-11, dedicated to inspiring innovative infrastructure."
        />
        <SmallHoverBox
          heading1="New Faces"
          heading2="Meet the New Faces of Civil Engineering–College"
          heading3="These talented students will be designing infrastructure for 2050 – SHIVMALA’s New Faces of Civil Engineering–College for 2025."
        />
      </motion.div>
    </div>
  )
}

