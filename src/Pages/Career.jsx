import { React, useState } from "react";
import { Search, MapPin, Briefcase } from "lucide-react";
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import JobCard from "../Components/Career/JobCard"

export default function Careers() {

  const JobData = [
    {
      jobheading: "Junior Site Engineer (Fresher)",
      joblocation: "PUNE",
      jobExperience: "0–1 YEARS",
      jobEducation: "BE/BTech (Civil Engineering)",
      jobdesc:
        "Join our on-site project execution team and learn end-to-end construction site management under the guidance of senior engineers.",
      jobdetails: [
        "Assist senior engineers with daily site operations and project execution.",
        "Support in preparing daily progress reports, checking levels, and verifying drawings.",
        "Coordinate with contractors, vendors, and material suppliers.",
        "Learn documentation of DPR, BBS, and BOQ.",
        "Ensure safety compliance at site.",
        "Good knowledge of AutoCAD and MS Office is a plus.",
        "Strong willingness to learn and work on field."
      ],
      jobposted: "3 days ago"
    },
    {
      jobheading: "AutoCAD Draftsman (Experienced)",
      joblocation: "AURANGABAD",
      jobExperience: "2+ YEARS",
      jobEducation: "Diploma/ITI in Civil or Architectural Drafting",
      jobdesc:
        "Required skills: AutoCAD 2D/3D, architectural layout design, civil drafting. Experience in RCC and drainage layout preferred.",
      jobdetails: [
        "Create 2D/3D architectural and structural drawings.",
        "Interpret site measurements into technical drawings.",
        "Work on RCC detailing, layouts, and construction plans.",
        "Modify and revise drawings based on mark-ups and engineer inputs.",
        "Coordinate with site and design teams.",
        "Must have proficiency in AutoCAD, Revit is a bonus."
      ],
      jobposted: "1 week ago"
    },
    {
      jobheading: "Project Coordinator (Fresher/Experienced)",
      joblocation: "LATUR",
      jobExperience: "0–3 YEARS",
      jobEducation: "BE/BTech in Civil or Construction Management",
      jobdesc:
        "Looking for detail-oriented engineers to manage timelines, vendor coordination, documentation, and daily progress tracking on construction sites.",
      jobdetails: [
        "Monitor project timelines, documentation, and daily schedules.",
        "Handle vendor coordination, approvals, and material tracking.",
        "Maintain progress charts, MOMs, and documentation flow.",
        "Assist in preparing reports and client updates.",
        "Strong communication and organizational skills required.",
        "Knowledge of MS Excel, Project Planning tools preferred."
      ],
      jobposted: "4 days ago"
    },
    {
      jobheading: "Civil Quantity Surveyor",
      joblocation: "MUMBAI",
      jobExperience: "3+ YEARS",
      jobEducation: "BE/BTech (Civil) or Diploma in Quantity Surveying",
      jobdesc:
        "Proficiency in BOQ, estimation, billing, and AutoCAD. Experience in infrastructure or residential construction preferred.",
      jobdetails: [
        "Prepare BOQ, cost estimation, rate analysis.",
        "Manage billing, subcontractor payments, and reconciliation.",
        "Ensure material and quantity tracking on-site.",
        "Evaluate drawings and site changes for costing.",
        "Software skills: AutoCAD, MS Excel, and estimation tools.",
        "Must have strong knowledge of CPWD/MORTH formats."
      ],
      jobposted: "2 weeks ago"
    },
    {
      jobheading: "Interior Design Assistant (Fresher)",
      joblocation: "PUNE",
      jobExperience: "0–1 YEARS",
      jobEducation: "BSc/BDes/Diploma in Interior Design",
      jobdesc:
        "Assist senior designers in space planning, mood boards, furniture design, and client presentations. Must be creative and willing to learn.",
      jobdetails: [
        "Assist in layout planning, 3D visualization, and mood boards.",
        "Support in vendor coordination and on-site execution.",
        "Help in client presentation, material selection, and cost estimates.",
        "Learn use of design software like SketchUp, AutoCAD, or 3ds Max.",
        "Passionate about space design and client aesthetics.",
        "Freshers with project internship experience preferred."
      ],
      jobposted: "5 days ago"
    },
    {
      jobheading: "Planning Engineer – Primavera/MSP",
      joblocation: "NAGPUR",
      jobExperience: "2–4 YEARS",
      jobEducation: "BE/BTech (Civil/Project Management)",
      jobdesc:
        "Expertise in project planning software, Gantt charts, timelines, resource allocation, and milestone monitoring.",
      jobdetails: [
        "Prepare and monitor project schedules using Primavera/MS Project.",
        "Track progress, manage delays, and prepare catch-up plans.",
        "Create Gantt charts, resource histograms, and S-curves.",
        "Generate weekly/monthly reports and planning dashboards.",
        "Coordinate with execution and design teams for schedule updates.",
        "Experience with EPC/Infra/Residential projects preferred."
      ],
      jobposted: "1 week ago"
    }
  ];

  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleBackClick = () => {
    setSelectedJob(null);
  };

  return (
    <>
      <Navbar />
      {selectedJob ? (
        <div className="min-h-screen w-full bg-white text-black">
          <div className="bg-gradient-to-r from-blue-800 to-blue-500 text-white py-12 px-6 sm:px-12 relative">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-lg sm:text-xl mb-2 font-semibold">Shivmala Engineers & Consultant</h3>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">{selectedJob.jobheading}</h1>
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>{selectedJob.joblocation}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase size={18} />
                  <span>{selectedJob.jobExperience}</span>
                </div>
              </div>
            </div>
            <button
              className="absolute right-6 top-6 bg-white text-black text-sm font-semibold px-4 py-1 rounded-full shadow hover:bg-gray-100 transition"
              onClick={handleBackClick}
            >
              BACK
            </button>
          </div>

          <div className="max-w-5xl mx-auto mt-10 mb-20 bg-white px-4 sm:px-8">
            <div className="bg-gray-100 rounded-xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row justify-between mb-6">
                <div>
                  <h4 className="text-sm font-bold text-gray-600">EXPERIENCE REQUIRED</h4>
                  <p className="font-medium text-base">{selectedJob.jobExperience}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-600">EDUCATIONAL BACKGROUND</h4>
                  <p className="font-medium text-base">{selectedJob.jobEducation}</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-4">Job Description</h3>
              <div className="text-[15px] leading-relaxed text-gray-800 space-y-3">
                {selectedJob.jobdetails.map((item, index) => (
                  <p key={index}>• {item}</p>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <button className="bg-white border-2 border-blue-700 text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-200">
                Tender an application for this job
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="w-full bg-gradient-to-b from-[#1E40AF] to-[#3B82F6] text-white py-12 px-4 sm:px-6 lg:px-12">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join Our Team</h2>
              <p className="text-base sm:text-lg mb-8 text-white/80">
                Discover exciting opportunities and be part of something great. <br />
                We're always looking for talented individuals to join our team.
              </p>
            </div>
          </div>

          <div className="z-10 mt-10 relative max-w-2xl mx-auto mb-10">
            <input
              type="text"
              placeholder="Search for positions..."
              className="w-full px-4 py-3 rounded-full shadow-lg text-black pr-12 focus:outline-none"
            />
            <Search size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-fill bg-white py-12 px-4 sm:px-6 lg:px-12">
            {JobData.map((job, idx) => (
              <JobCard
                key={idx}
                jobheading={job.jobheading}
                joblocation={job.joblocation}
                jobExperiece={job.jobExperience}
                jobdesc={job.jobdesc}
                jobposted={job.jobposted}
                onClick={() => handleJobClick(job)}
              />
            ))}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}