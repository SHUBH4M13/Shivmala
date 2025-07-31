import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import ContactUs from "../../assets/ContactUs.jpg";

export default function ContactHero() {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const initialX = isMobile ? 0 : -200;

    return (
        <div className="w-full px-6 sm:px-12 lg:px-20 py-5 text-black">

            <motion.div
                initial={{ opacity: 0, y: -80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <p className="text-xl sm:text-2xl text-black mb-6">Our Offices</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: initialX }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col-reverse lg:flex-row items-start gap-6 mb-10"
            >
                <div className="w-full lg:w-1/2">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-boldness-heavy leading-tight tracking-tight">
                        SHIVMALA has more than <span className="text-black">32 </span>
                        offices across 30+ cities
                    </h1>

                    <p className="mt-6 text-base sm:text-lg max-w-xl text-black">
                        The SHIVMALA family is a fast-growing, independent construction company operating
                        across urban and rural India. With a strong presence in the building, civil,
                        industrial, and infrastructure sectors, our branch offices ensure seamless project
                        execution and regional outreach.
                    </p>
                </div>

                <div className="w-full lg:w-1/2">
                    <img
                        src={ContactUs}
                        alt="Contact Us"
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>
            </motion.div>
        </div>
    );
}
