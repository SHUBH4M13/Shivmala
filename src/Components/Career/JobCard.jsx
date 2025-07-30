import React from 'react'
import { MapPin, BriefcaseBusiness } from 'lucide-react'
import CusButton from "../CusButton"

export default function JobCard({ jobheading, joblocation, jobExperiece, jobdesc, jobposted , onClick }) {
  return (
    <div className='flex flex-col p-6 sm:p-8 lg:p-10 border-[#0e0e0f38] border rounded-2xl hover:shadow-md hover:-translate-y-1 duration-200 transition-transform w-full max-w-xl shadow-black/20 bg-white'>

      <p className='text-xl sm:text-2xl text-[#1F2937] font-semibold'>{jobheading || "E3D/ SP3D Instrumentation Designer"}</p>

      <div className='flex flex-wrap gap-x-6 gap-y-2 pt-4'>
        <div className='flex items-center gap-1'>
          <MapPin size={20} className='text-[#4B5563]' />
          <p className='uppercase text-[#4B5563] text-sm'>{joblocation || "Mumbai"}</p>
        </div>

        <div className='flex items-center gap-1'>
          <BriefcaseBusiness size={20} className='text-[#4B5563]' />
          <p className='uppercase text-[#4B5563] text-sm'>{jobExperiece || "2+ years"}</p>
        </div>
      </div>

      <p className='pt-4 text-[#4B5563] text-sm sm:text-base leading-relaxed'>
        {jobdesc || "Instrumentation (Sr Modlers) Key Skills If Any 1.SP3D / E-3D 2. Smart Sketch & Dialux 3.Adnoc Modeling Procedure &…"}
      </p>

      <div className='pt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3'>
        <p className='text-[#4B5563] text-sm'>{jobposted || "Posted 2 weeks ago"}</p>
        <CusButton text={"View Details"} onClick={onClick} />
      </div>

    </div>
  )
}
