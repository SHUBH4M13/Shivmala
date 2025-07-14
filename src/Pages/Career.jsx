import React from "react";
import { Search } from "lucide-react";
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import JobCard from "../Components/Career/JobCard"
import JobDetail from "../Components/Career/JobDetail";


export default function Careers() {
  return (
    <>
      <Navbar />
      <div className="w-full bg-gradient-to-b from-[#1E40AF] to-[#3B82F6] text-white py-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join Our Team</h2>
          <p className="text-base sm:text-lg mb-8 text-white/80">
            Discover exciting opportunities and be part of something great. <br />
            We're always looking for talented individuals to join our team.
          </p>
        </div>
      </div>
      <div className=" z-10  mt-10 relative max-w-2xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search for positions..."
          className="w-full px-4 py-3 rounded-full shadow-lg text-black pr-12 focus:outline-none"
        />
        <Search size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
      </div>
      <div className=" w-fill bg-white py-12 px-4 sm:px-6 lg:px-12 ">
        <JobCard />
      </div>
      <Footer />
    </>

  );
}
