import React from 'react'
import ZoomPhotoText from '../ZoomPhotoText'
import TechnicalResource from "../../assets/TechnicalResource.webp"
import Laptop from "../../assets/Laptop.jpg"
import ConstructionWorker from "../../assets/ConstructionWorker.jpg"
import Laptopguy from "../../assets/Laptopguy.jpg"
import { motion } from "motion/react";
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router'

export default function TechnicalConnect() {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const navigate = useNavigate();
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


            <p className=' pr-10 pl-10 text-2xl sm:text-4xl  text-center font-boldness text-HoverBlue font-heading'>The technical resources you need to advance</p>

            <div className=' flex flex-col sm:flex-row  p-10 gap-15 '>
                <div>
                    <ZoomPhotoText
                        photo={TechnicalResource}
                        heading2="Infrastructure & Commercial Solutions"
                        text1={`Shivmala Infrastructure Pvt. Ltd. provides end-to-end construction services for commercial, residential, and institutional projects. We focus on timely execution, cost-efficiency, and structural quality. Our expertise includes commercial buildings, retail spaces, highways, and architectural design with practical, Vastu-compliant layouts tailored to modern needs.`}

                    />

                </div>

                <div>
                    <ZoomPhotoText
                        photo={Laptop}
                        heading2="Specialized Civil Engineering Services"
                        text1="We offer specialized solutions like interior design, drainage systems, and bridge or culvert construction. Our designs balance style with functionality, while our infrastructure projects ensure durability, safety, and compliance. These services support efficient, future-ready development across residential and industrial spaces."
                    />
                </div>
            </div>

            <p className='pr-10 pl-10 text-2xl  sm:text-4xl font-boldness text-HoverBlue font-heading'>New Ways to Connect</p>

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
                        onClick={ () => navigate("/career")}
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
                        onClick={ () => navigate("/contactus")}
                    />
                </div>
            </motion.div>

        </motion.div>
    )
}
