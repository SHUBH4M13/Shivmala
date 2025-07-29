import React from 'react';
import { useEffect } from 'react';
import ProjectsHero from '../Components/Projects/ProjectsHero';
import ProjectCard from '../Components/Projects/ProjectCard';
import { motion } from 'motion/react';
import Photo7 from "../assets/ProjectAssets/Photo7.jpg"
import projectData from '../Components/Projects/ProjectData';
import { useNavigate } from 'react-router';
import { useMediaQuery } from 'react-responsive';

export default function Projects() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const initialMinusX = isMobile ? 0 : -200;
  const initialX = isMobile ? 0 : 200;
  const initialY = isMobile ? 0 : 200;
  const navigate = useNavigate();


  return (
    <div>      
      <ProjectsHero />

      <> {/* lisitng the projects done*/}
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? initialX : initialMinusX }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
          >
            <ProjectCard {...project}
            onClick={() => navigate(project.onClickRoute || '/projects')}
            />
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
          <img src={Photo7} alt="Building Tomorrow" className="w-full h-auto object-contain" />
        </div>
        <div className="w-full max-w-[450px] text-center lg:text-left">
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl">Building Tomorrow</h2>
          <p className="pt-5 text-base sm:text-lg text-gray-800">
            SHIVMALA's focus is on ensuring today's civil engineers gain the necessary knowledge, skills, and experience to sustain the profession in the future.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
