import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ProjectsHero from '../Components/Projects/ProjectsHero';
import ProjectCard from '../Components/Projects/ProjectCard';
import { motion } from 'motion/react';
import photo7 from "../assets/ProjectAssets/photo7.jpg"
import projectData from '../Components/Projects/ProjectData';

export default function Projects() {
  return (
    <div>
      <Navbar />
      <ProjectsHero />

      <>
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? 200 : -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </>

      <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
      }}
      viewport={{ once: true }}
      className="flex flex-col lg:flex-row justify-evenly items-center gap-10 mb-16 px-4">
        <div className="w-full max-w-[400px]">
          <img src={photo7} alt="Building Tomorrow" className="w-full h-auto object-contain" />
        </div>
        <div className="w-full max-w-[450px] text-center lg:text-left">
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl">Building Tomorrow</h2>
          <p className="pt-5 text-base sm:text-lg text-gray-800">
            SHIVMALA's focus is on ensuring today's civil engineers gain the necessary knowledge, skills, and experience to sustain the profession in the future.
          </p>
        </div>
      </motion.div>


      <Footer />
    </div>
  );
}
