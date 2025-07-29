import React from 'react'
import ZoomPhotoText from '../ZoomPhotoText'
import jumpstartp1 from "../../assets/jumpstartp1.jpg"
import jumpstartp2 from "../../assets/jumpstartp2.jpg"
import {motion} from "motion/react"
import { useMediaQuery } from 'react-responsive'

export default function Jumpstart() {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const initialX = isMobile ? 0 : -200;
    const initialY = isMobile ? 0 : 200;

    return (
        <motion.div
        initial={{ opacity: 0, y: initialY }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        >
        <div className='w-full flex flex-col sm:flex-row  justify-center items-center p-10  gap-10  '>
        

            <div className=' flex '>
                <ZoomPhotoText
                    photo={jumpstartp1}
                    heading1={"FOR STUDENTS"}
                    heading2={"SHIVMALA on Campus"}
                    text1="Make a difference in the civil engineering professional
        community while still in college. Enjoy mentorship
        connections, networking opportunities and educational
        resources. For free."
                    ButtonText={"Learn more"}
                />
            </div>

            <div>
                <ZoomPhotoText
                    photo={jumpstartp2}
                    heading1={"FOR STUDENTS"}
                    heading2={"SHIVMALA on Campus"}
                    text1="Make a difference in the civil engineering professional
        community while still in college. Enjoy mentorship
        connections, networking opportunities and educational
        resources. For free."
                    ButtonText={"Learn more"}
                />
            </div>
        </div>
        </motion.div>
    )
}
