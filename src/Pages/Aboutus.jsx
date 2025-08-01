import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import aboutusvector from "../assets/aboutusvector.jpg"
import { Info, Settings } from "lucide-react"

export default function Aboutus() {
    return (
        <div>
            <Navbar />

            <div className="text-center">
                <p className="text-textblue font-boldness text-4xl sm:text-5xl md:text-6xl p-6">About us</p>
                <p className="px-4 sm:px-16 md:px-32 text-[16px] sm:text-[18px] text-gray-700 leading-relaxed">
                Shivmala Infrastructure is a leading provider of innovative engineering and construction solutions. Since our inception, we have focused on building sustainable, robust, and scalable infrastructure solutions that meet the needs of communities and industries. Our expertise spans civil engineering, construction, and technology-driven solutions, making us a trusted partner in the development of critical infrastructure projects.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center px-4 sm:px-10 lg:px-20 py-12 gap-12">

                <div className="w-full lg:w-1/2 max-w-[500px]">
                    <img
                        className="w-full h-full"
                        src={aboutusvector}
                        alt="AboutUsPhoto"
                    />
                </div>

                {/* Right Content */}
                <div className="w-full lg:w-1/2 flex flex-col gap-12 text-gray-800">

                    {/* Business Motto */}
                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-boldness text-textblue mb-3">Business Motto</h2>
                            <p className="text-base sm:text-lg leading-relaxed">
                                To be trusted leaders in civil infrastructure development, delivering innovative and sustainable solutions that shape the future.
                                To provide quality civil engineering services with integrity, professionalism, and a commitment to excellence.
                            </p>
                        </div>
                    </div>

                    {/* Quality Policy */}
                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-boldness text-textblue mb-3">Quality Policy</h2>
                            <p className="text-base sm:text-lg leading-relaxed">
                                Shivmala Engineers and Consultants is committed to delivering client satisfaction and adhering to global quality standards.
                                We are certified by TUV Nord for implementing ISO 9001 Quality Management Systems.
                                We aim for continuous, sustainable, and economical development by minimizing resource waste and optimizing project cycles
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Director's Message and Our Team */}
            <div className="w-full px-4 sm:px-10 md:px-20 py-16 text-center text-gray-800 bg-white flex flex-col items-center gap-10">

                {/* Director's Message */}
                <div className="max-w-5xl">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-boldness text-textblue mb-6">DIRECTOR'S MESSAGE</h2>
                    <p className="text-base sm:text-lg leading-relaxed">
                    Mr. Shivaji Marutirao More &amp; Mrs. Ratnamala Shivajirao More , as Directors of Shivmala Infrastructure Pvt.
                        Ltd., have laid a solid foundation not only in concrete but also in values.
                        Our journey from fieldwork to a recognized brand is built on trust, continuous learning, and meaningful relationships.
                        We continue to lead with experience and a vision for inclusive growth.
                    </p>
                </div>

                {/* Our Team */}
                <div className="w-full">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-boldness text-textblue mb-8">OUR TEAM</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
                        {[
                            { role: "Site Engineer", name: "Nitin Bhise" },
                            { role: "Business Development", name: "Aishwarya Dhole" },
                            { role: "Architecture Engineer", name: "Raj Dhole" },
                            { role: "Marketing Research", name: "Mansi Walunj" },
                            { role: "Interior Designer", name: "Rekha Digrase" },
                        ].map((member, index) => (
                            <div
                                key={index}
                                className="bg-white flex flex-col items-center gap-4  rounded-xl hover:shadow-lg duration-200 px-6 py-5 text-center "
                            >
                                
                                <img
                                className=' w-[100px] h-[100px] rounded-full'
                                src="" alt="" />

                                <p className="font-emphasis-heavy text-black mb-2">{member.role}</p>
                                <p className="text-gray-700">{member.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}
