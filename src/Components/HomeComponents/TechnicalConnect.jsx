import React from 'react'
import ZoomPhotoText from '../ZoomPhotoText'
import TechnicalResource from "../../assets/TechnicalResource.jpg"
import Laptop from "../../assets/Laptop.jpg"
import ConstructionWorker from "../../assets/ConstructionWorker.jpg"
import Laptopguy from "../../assets/Laptopguy.jpg"
import { motion } from "motion/react";
import { useMediaQuery } from 'react-responsive'


export default function TechnicalConnect() {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const initialMinusX = isMobile ? 0 : -200;
    const initialX = isMobile ? 0 : 200;
    const initialY = isMobile ? 0 : 200;
    return (

        <motion.div
            className=' flex flex-col justify-center items-center gap-10'
            initial={{ opacity: 0, y: initialY }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >


            <p className=' pr-10 pl-10 text-2xl sm:text-4xl  text-center font-boldness text-HoverBlue'>The technical resources you need to advance</p>

            <div className=' flex flex-col sm:flex-row  p-10 gap-15 '>
                <div>
                    <ZoomPhotoText
                        photo={TechnicalResource}
                        heading2="Continuing education"
                        text1={`At Shivmala, we offer expert-taught programs designed to help you succeed in your civil engineering career. Gain certifications and meet your licensure requirements with our professional development programs. From live webinars to PE civil exam prep, we have it all.`}

                    />

                </div>

                <div>
                    <ZoomPhotoText
                        photo={Laptop}
                        heading2="Publications"
                        text1="Access cutting-edge civil engineering resources through Shivmala’s library. Our collection includes books, peer-reviewed journals, and conference proceedings, ensuring you have access to the most up-to-date research and trends in the civil engineering world."
                        ButtonText="SHIVMALA Library"
                    />
                </div>
            </div>

            <p className='pr-10 pl-10 text-2xl  sm:text-4xl font-boldness text-HoverBlue'>New Ways to Connect</p>

            <motion.div
                initial={{ opacity: 0, y: initialY }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className='flex flex-col sm:flex-row p-10 gap-15 '>

                <div>
                    <ZoomPhotoText
                        photo={ConstructionWorker}
                        heading2="Career Connections"
                        text1={`Explore job opportunities and connect with top employers in the civil engineering field. Whether you’re looking for a new role or exploring career paths, Shivmala is here to help you find your dream job.`}
                        ButtonText={"Find your Dream Job!"}
                    />

                </div>

                <div>
                    <ZoomPhotoText
                        photo={Laptopguy}
                        heading2="Communities of Practice"
                        text1="Communities built for overarching topics of engineering,
                        bringing unique perspectives from all types of engineers
                        throughout the society."
                        ButtonText={"Join the Conversation"}
                    />
                </div>
            </motion.div>

        </motion.div>
    )
}
