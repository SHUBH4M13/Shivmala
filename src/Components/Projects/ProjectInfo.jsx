import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export default function ProjectInfo({
  InfoHeading,
  projectphoto1,
  projectphoto2,
  ProjectSubHeading,
  boxData = [],
  ProjectDesc
}) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);


  return (
    <div className="w-full px-4 sm:px-6 lg:px-16 py-10 space-y-10">
      {/* Back Button */}
      <div>
        <button
          onClick={() => navigate("/projects")}
          className="flex items-center text-blueEnd hover:text-blueStart font-medium text-base transition"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back
        </button>
      </div>

      {/* Heading */}
      <div>
        <h1 className="text-3xl sm:text-4xl text-center font-bold text-gray-900">
          {InfoHeading}
        </h1>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-center gap-4">
        <img
          src={projectphoto1}
          alt="projectphoto1"
          className="w-full md:w-1/2 h-[420px] object-cover"
        />
        {projectphoto2 && (
          <img
            src={projectphoto2}
            alt="projectphoto2"
            className="w-full md:w-1/2 h-[420px] object-cover"
          />
        )}
      </div>




      {/* Subheading */}
      <div>
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-blue-800">
          {ProjectSubHeading}
        </h2>
      </div>

      {/* Info Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {boxData.map((box, index) => (
          <Box key={index} BoxHeading={box.BoxHeading} BoxText={box.BoxText} />
        ))}
      </div>

      {/* Optional Description */}
      {ProjectDesc && (
        <div className="text-gray-700 text-[16px] sm:text-[18px] leading-relaxed">
          <p>{ProjectDesc}</p>
        </div>
      )}
    </div>
  );
}

// Reusable Box Subcomponent
function Box({ BoxHeading, BoxText }) {
  return (
    <div className="p-6 border-[2px] border-gray-300/50 rounded-lg shadow-sm bg-white hover:shadow-md transition duration-200">
      <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">
        {BoxHeading}
      </h3>
      <p className="text-gray-700 text-sm sm:text-base">{BoxText}</p>
    </div>
  );
}
