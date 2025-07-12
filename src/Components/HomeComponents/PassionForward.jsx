import React from 'react'
import {motion} from "motion/react"
import BigHoverBox from '../BigHoverBox'
import SmallHoverBox from '../SmallHoverBox'

import windmill from "../../assets/windmill.jpg"
import GroupPpl from "../../assets/GroupPpl.jpg"
import Building from "../../assets/Building.jpg"


export default function PassionForward() {
  return (
    <div className='w-full h-fit flex flex-col gap-10 items-center px-4 sm:px-10 py-10 sm:py-20'>

      <p className=' font-bold text-4xl  text-HoverBlue'>Moving the profession forward</p>

      <motion.div 
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className='flex flex-col lg:flex-row justify-center items-center gap-6 flex-wrap'>
        <BigHoverBox
          photo={windmill}
          heading2="Sustainability"
          heading3="Integrating sustainability into practice
          addresses changing environmental,
          social, and economic conditions
          ethically and responsibly."
        />
        <SmallHoverBox
          heading2="Shivmala Foundation"
          heading3="The foundation provides philanthropic
          support for four main focus areas of
          Shivmala programs: Student Activities,
          Education, Leadership, and Engineering
          Programs."
        />
      </motion.div>

      <motion.div
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className='flex flex-col lg:flex-row justify-center items-center gap-6 flex-wrap'>
        <SmallHoverBox
          heading2="Ethics"
          heading3="Public trust, safety, and welfare
          depend on engineers' ethical
          performance of their duties."
        />
        <BigHoverBox
          photo={GroupPpl}
          heading2="Diversity, equity & inclusion"
          heading3="Fostering an inclusive civil engineering
          community so that anyone can break
          barriers and make a difference."
        />
      </motion.div>

      <motion.div 
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className='flex flex-col lg:flex-row justify-center items-center gap-6 flex-wrap'>
        <BigHoverBox
          photo={Building}
          heading2="Future World Vision"
          heading3="Future World Vision is an interactive,
          immersive experience exploring the
          built environment of 2070."
        />
        <SmallHoverBox
          heading2="Codes & standards"
          heading3="Shivmala Standards provide technical
          guidelines for promoting safety,
          reliability, productivity, and efficiency in
          civil engineering."
        />
      </motion.div>
    </div>
  )
}
