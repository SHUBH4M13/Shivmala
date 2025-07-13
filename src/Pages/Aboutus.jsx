import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import AboutUsPhoto from "../assets/AboutUsPhoto.png"
import { Info, Settings } from "lucide-react"

export default function Aboutus() {
    return (
        <div>
            <Navbar />

            <div className="text-center">
                <p className="text-textblue font-bold text-4xl sm:text-5xl md:text-6xl p-6">About us</p>
                <p className="px-4 sm:px-16 md:px-32 text-[16px] sm:text-[18px] text-gray-700 leading-relaxed">
                    Established in April 2025, Shivmala Infrastructure Pvt Ltd brings over 9 years of prior civil engineering experience dating back to 2016.
                    We are a professional and passionate team delivering excellence in infrastructure, building, road, interior, and drainage works across Maharashtra.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center px-4 sm:px-10 lg:px-20 py-12 gap-12">

                <div className="w-full lg:w-1/2 max-w-[500px]">
                    <img
                        className="rounded-3xl w-full h-auto object-cover shadow-md"
                        src={AboutUsPhoto}
                        alt="AboutUsPhoto"
                    />
                </div>

                {/* Right Content */}
                <div className="w-full lg:w-1/2 flex flex-col gap-12 text-gray-800">

                    {/* Business Motto */}
                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                        <div className="flex-shrink-0">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-black flex items-center justify-center rounded-lg">
                                <Info color="white" size={28} />
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-textblue mb-3">Business Motto</h2>
                            <p className="text-base sm:text-lg leading-relaxed">
                                To be a trusted leader in civil infrastructure development, delivering innovative and sustainable solutions that shape the future... <br />
                                & To provide quality civil engineering services with integrity, professionalism, and a commitment to excellence.
                            </p>
                        </div>
                    </div>

                    {/* Quality Policy */}
                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                        <div className="flex-shrink-0">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-black flex items-center justify-center rounded-lg">
                                <Settings color="white" size={28} />
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold text-textblue mb-3">Quality Policy</h2>
                            <p className="text-base sm:text-lg leading-relaxed">
                                Shivmala Engineers and Consultants is committed to strive for quality of services in terms of customer satisfaction and required global standards. We're certified by TUV Nord for implementing Quality Management System as per ISO 9001.<br />
                                We aim for continuous, sustained and economical development by reducing wastage of resources, applying minimum time cycle and managing funds.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Director's Message and Our Team */}
            <div className="w-full px-4 sm:px-10 md:px-20 py-16 text-center text-gray-800 bg-white flex flex-col items-center gap-10">

                {/* Director's Message */}
                <div className="max-w-5xl">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textblue mb-6">DIRECTOR’S MESSAGE</h2>
                    <p className="text-base sm:text-lg leading-relaxed">
                        Mr. Shivaji Marutirao More &amp; Mrs. Ratnamala Shivajirao More &nbsp;
                        As Directors of Shivmala Infrastructure Pvt Ltd, we believe in creating a solid foundation, not only in concrete but also in relationships and reputation. <br />
                        Our journey from fieldwork to a recognized brand is built on experience, trust, and continuous learning.
                    </p>
                </div>

                {/* Our Team */}
                <div className="w-full">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-textblue mb-8">OUR TEAM</h2>

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
                                className="bg-white rounded-xl shadow-md hover:shadow-lg duration-200 px-6 py-5 text-center border border-gray-200"
                            >
                                <p className="font-semibold text-black mb-2">{member.role}</p>
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
