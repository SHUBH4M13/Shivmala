import React from 'react';
import SmallHoverBox from '../SmallHoverBox';
import BigHoverBox from '../BigHoverBox';
import { motion } from "framer-motion";
import NewNotablep1 from "../../assets/NewNotablep1.jpeg";
import Photo2 from "../../assets/Photo2.webp";
import Photo3 from "../../assets/Photo3.jpg";

export default function NewNotable() {

  return (
    <div className='w-full h-fit flex flex-col gap-10 items-center px-4 sm:px-10 py-10 sm:py-20'>
      <p className='font-boldness text-4xl text-HoverBlue font-heading'>New & Notable</p>

      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='flex flex-col lg:flex-row justify-center items-center gap-6 flex-wrap'
      >
        <BigHoverBox
          photo={NewNotablep1}
          heading1="SHIVMALA UPDATE"
          heading2="Shivmala Expands Commercial Infrastructure Capabilities"
          heading3="Shivmala Infrastructure Pvt. Ltd. now offers comprehensive commercial construction solutions—from office complexes to retail spaces—focused on timely delivery, cost-efficiency, and top-grade structural quality."
        />
        <SmallHoverBox
          heading1="SHIVMALA CARES"
          heading2="Committed to Sustainable Construction & Safety"
          heading3="Shivmala ensures environmentally responsible development, strict safety protocols, and compliance-driven execution across all highway and building construction projects."
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='flex flex-col lg:flex-row justify-center items-center gap-6 flex-wrap'
      >
        <SmallHoverBox
          heading1="SHIVMALA FOUNDATION"
          heading2="Engineering Better Communities, Brick by Brick"
          heading3="Through high-impact projects like drainage systems and interior planning, Shivmala supports smart urban development and community-focused infrastructure."
        />
        <BigHoverBox
          photo={Photo2}
          heading1="PROJECT REPORT"
          heading2="Excellence in Execution Across All Projects"
          heading3="Shivmala continues to maintain top ratings in quality and delivery. Our recent projects across Maharashtra reflect our precision, planning, and client satisfaction."
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='flex flex-col lg:flex-row justify-center items-center gap-6 flex-wrap'
      >
        <BigHoverBox
          photo={Photo3}
          heading1="SHIVMALA CONFERENCE 2025"
          heading2="Shivmala Showcases Smart Infrastructure at Expo"
          heading3="Shivmala recently participated in India’s InfraConnect Expo, highlighting innovations in bridge construction, turnkey project delivery, and architectural design services."
        />
        <SmallHoverBox
          heading1="NEW TEAM TALENT"
          heading2="Meet the Engineers Behind Shivmala’s Success"
          heading3="Our experienced teams—from structural engineers to site planners—are the driving force behind Shivmala’s execution excellence and innovative project outcomes."
        />
      </motion.div>
    </div>
  );
}