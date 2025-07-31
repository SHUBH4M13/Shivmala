import React from 'react'
import { MapPin, BriefcaseBusiness } from 'lucide-react'

export default function JobDetail() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-700 to-blue-500 text-white">
      {/* Top Header */}
      <div className="px-4 sm:px-10 pt-10 pb-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-emphasis-heavy">Shivmala Engineers & Consultant</h2>
        <h1 className="text-3xl sm:text-4xl font-boldness mt-2">E3D/ SP3D Instrumentation Designer</h1>

        <div className="flex flex-wrap justify-center gap-6 mt-4 text-white/90">
          <div className="flex items-center gap-2">
            <MapPin size={20} />
            <span className="uppercase text-sm">Mumbai</span>
          </div>
          <div className="flex items-center gap-2">
            <BriefcaseBusiness size={20} />
            <span className="uppercase text-sm">2+ Years</span>
          </div>
        </div>
      </div>

      {/* Detail Section */}
      <div className="bg-white text-black rounded-t-2xl px-4 sm:px-10 py-8">
        {/* Experience & Education */}
        <div className="grid sm:grid-cols-2 gap-6 border border-blue-300 p-6 rounded-xl">
          <div>
            <p className="font-boldness uppercase text-sm mb-1">Experience Required</p>
            <p className="text-gray-700 text-sm">2+ Years</p>
          </div>
          <div>
            <p className="font-boldness uppercase text-sm mb-1">Educational Background</p>
            <p className="text-gray-700 text-sm">BE / BTECH / MTECH (ELECTRICAL ENGG)</p>
          </div>
        </div>

        {/* Job Description */}
        <div className="mt-8">
          <h3 className="font-boldness text-lg mb-3">Job Description</h3>
          <div className="text-sm text-gray-700 space-y-1 leading-relaxed">
            <p>Instrumentation (Sr Modlers)</p>
            <p>Key Skills If Any</p>
            <ul className="list-decimal list-inside pl-4">
              <li>SP3D / E-3D</li>
              <li>Smart Sketch & Dialux</li>
              <li>Adnoc Modeling Procedure & Standards</li>
              <li>Navis Work</li>
              <li>Handle Model Reviews, Tag Closure Reports, Clash Reports & To Do List</li>
              <li>Modeling Cable Trays, Cable Trench, Equipments, Gland Supports</li>
              <li>Extraction of Drawings & MTO reports</li>
              <li>Hook-Up, Jb Wiring, Loop Drawings, P&ID's, Vendor GA's, etc.</li>
            </ul>
            <p className="pt-2">Standards to be known:</p>
            <p>Adnoc / Aramco, IEEE, NEMA, IEC & IS Standards (Onshore / Off-Shore)</p>
          </div>
        </div>
      </div>

      {/* Apply Button Fixed at Bottom */}
      <div className="fixed bottom-5 w-full flex justify-center px-4">
        <button className="bg-white text-blue-700 font-emphasis-heavy px-6 py-3 rounded-full shadow-lg hover:scale-105 transition">
          Tender an Application for this Job
        </button>
      </div>
    </div>
  )
}
