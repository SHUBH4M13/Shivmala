import React from 'react';
import { motion } from "motion/react"


export default function ContactHero() {
    return (
        <div className="w-full px-6 sm:px-12 lg:px-20 py-10 text-black">
            <div>

                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="text-xl sm:text-2xl text-black">Our Offices</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                        SHIVMALA has more than <span className="text-black">32</span><br className="hidden sm:block" />
                        offices across 30+ cities
                    </h1>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="text-base sm:text-lg text-black max-w-3xl">
                        The SHIVMALA family is an independent construction company that carries
                        out diverse operations in the buildings, civil, industrial and special project sectors.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
