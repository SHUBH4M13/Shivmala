import React from 'react'
import SmallHoverBox from '../SmallHoverBox'
import BigHoverBox from '../BigHoverBox'
import { motion } from "motion/react"
import NewNotablep1 from "../../assets/NewNotablep1.jpeg"
import Photo2 from "../../assets/Photo2.jpg"
import Photo3 from "../../assets/Photo3.jpg"
import { useMediaQuery } from 'react-responsive'


export default function NewNotable() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const initialMinusX = isMobile ? 0 : -200;
  const initialX = isMobile ? 0 : 200;
  const initialY = isMobile ? 0 : 200;
  return (
    <div className='w-full h-fit flex flex-col gap-10 items-center px-4 sm:px-10 py-10 sm:py-20'>

              <p className=' font-boldness text-4xl  text-HoverBlue'>New & Notable</p>

      <motion.div
        initial={{ opacity: 0, x: initialX }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='flex flex-col lg:flex-row justify-center items-center gap-6 flex-wrap'>
        <BigHoverBox
          photo={NewNotablep1}
          heading1="SHIVMALA UPDATE"
          heading2="Shivaji More elected 2026 Civil Leadership Council Member"
          heading3="See how Shivaji More, co-founder of Shivmala Infrastructure, has been recognized for his leadership in shaping Maharashtra’s civil engineering landscape.
          "
        />
        <SmallHoverBox
          heading1={"SHIVMALA CARES"}
          heading2="Helping Communities Rebuild After Natural Disasters"
          heading3="Shivmala supports disaster-affected communities with rapid recovery and relief construction projects."
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: initialMinusX }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='flex flex-col lg:flex-row justify-center items-center gap-6 flex-wrap'>
        <SmallHoverBox
          heading1={"SHIVMALA FOUNDATION"}
          heading2="Inspire Future Engineers"
          heading3="Support the Shivmala Foundation’s mission to sponsor technical workshops and educational tools for students in underprivileged areas, nurturing tomorrow’s civil engineers."
        />
        <BigHoverBox
          photo={Photo2}
          heading1="PROJECT REPORT"
          heading2="Shivmala Scores ‘A’ in 2025 Infrastructure Quality Review"
          heading3="Our commitment to excellence is now certified. Shivmala earned an 'A' grade for quality, safety, and innovation across all ongoing construction projects in 2025."
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: initialX }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='flex flex-col lg:flex-row justify-center items-center gap-6 flex-wrap'>
        <BigHoverBox
          photo={Photo3}
          heading1="SHIVMALA CONFERENCE 2025"
          heading2="Register Now for InfraConnect Expo"
          heading3="Join us this December in Pune for Shivmala’s InfraConnect—bringing together engineers, architects, and developers to discuss India’s infrastructure future."
        />
        <SmallHoverBox
          heading1="NEW TEAM TALENT"
          heading2="Meet the Next Generation of Shivmala Engineers"
          heading3="Introducing our 2025 internship and trainee cohort—young, passionate engineers ready to contribute to innovative construction and smart infrastructure."
        />
      </motion.div>
    </div>
  )
}

