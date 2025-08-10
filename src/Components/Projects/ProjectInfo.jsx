import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

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
      <motion.button
        whileHover={{ x: -5 }}
        onClick={() => navigate("/projects")}
        className="flex items-center text-blueEnd hover:text-blueStart font-emphasis text-base transition"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back
      </motion.button>

      {/* Heading & Description */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-3xl sm:text-4xl font-boldness text-gray-900 font-heading mb-4">
          {InfoHeading}
        </h1>
        {ProjectDesc && (
          <p className="max-w-3xl mx-auto font-body text-lg sm:text-xl text-gray-700 leading-relaxed">
            {ProjectDesc}
          </p>
        )}
      </motion.div>

      {/* Images */}
      <motion.div
        className="w-full flex flex-col md:flex-row justify-center gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {[projectphoto1, projectphoto2].filter(Boolean).map((photo, idx) => (
          <motion.img
            key={idx}
            src={photo}
            alt={`projectphoto${idx + 1}`}
            className="w-full md:w-1/2 h-[420px] object-cover rounded-xl shadow-lg hover:scale-[1.02] hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.03 }}
          />
        ))}
      </motion.div>

      {/* Subheading */}
      {ProjectSubHeading && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-2xl sm:text-3xl font-boldness bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent font-heading"
        >
          {ProjectSubHeading}
        </motion.h2>
      )}

      {/* Info Boxes */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
        }}
      >
        {boxData.map((box, index) => (
          <Box key={index} BoxHeading={box.BoxHeading} BoxText={box.BoxText} />
        ))}
      </motion.div>
    </div>
  );
}

// Reusable Box Subcomponent with Animation
function Box({ BoxHeading, BoxText }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0px 8px 30px rgba(0,0,0,0.15)" }}
      transition={{ type: "spring", stiffness: 200 }}
      className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white hover:border-blue-300 transition duration-200"
    >
      <h3 className="font-boldness text-lg sm:text-xl mb-2 text-gray-900 font-heading">
        {BoxHeading}
      </h3>
      <p className="text-gray-700 leading-relaxed font-body">{BoxText}</p>
    </motion.div>
  );
}
