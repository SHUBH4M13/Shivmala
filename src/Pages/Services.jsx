import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ServiceHeroSection from "../Components/Services/ServiceHeroSection";
import ServiceText from "../Components/Services/ServiceText";
import ServiceImg from "../Components/Services/ServiceImg";

import ServiceBuilding from "../assets/ServiceBuilding.jpg";
import ArchService from "../assets/ArchService.jpg";
import InteriorService from "../assets/InteriorService.png";
import DrainageService from "../assets/DrainageService.jpg";
import Servicehighway from "../assets/Servicehighway.png";
import WaterTankService from "../assets/WaterTankService.jpg";
import BridgeService from "../assets/BridgeService.png";
import BuildingConstruction from "../assets/BuildingConstruction.jpg"



export default function Services() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <ServiceHeroSection />

      {/* Block 1 – lg:flex-row */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-6 sm:px-10 lg:px-24 py-12">
        <ServiceImg photo={ServiceBuilding} />
        <div className="w-full lg:w-1/2">
          <ServiceText
            ServiceHeading="Commercial"
            ServiceDesc="Shivmala Infrastructure Pvt. Ltd. delivers cutting-edge commercial construction solutions tailored to business
            needs. We specialize in office buildings, retail complexes, and institutional infrastructure with a focus on
            timely delivery, cost-efficiency, and structural quality. Our experienced team manages end-to-end project
            execution, including architectural planning, design, permits, and turnkey delivery. We ensure durable,
            future-ready commercial spaces that enhance functionality and value."
          />
        </div>
      </div>

      {/* Block 2 – lg:flex-row-reverse */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 px-6 sm:px-10 lg:px-24 py-12">
        <ServiceImg photo={Servicehighway} />
        <div className="w-full lg:w-1/2">
          <ServiceText
            ServiceHeading="Highway Construction"
            ServiceDesc="Shivmala Infrastructure Pvt. Ltd. is a trusted name in highway construction, offering robust road infrastructure
            services including asphalt paving, concrete road construction, and highway expansions. With advanced
            machinery and strict safety and environmental standards, we deliver high-performance roads that improve
            connectivity and withstand heavy traffic demands. Our team ensures compliance, precision, and delivery
            within budget and timelines."
          />
        </div>
      </div>

      {/* Block 3 – lg:flex-row */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-6 sm:px-10 lg:px-24 py-12">
        <ServiceImg photo={BuildingConstruction} />
        <div className="w-full lg:w-1/2">
          <ServiceText
            ServiceHeading="Building Construction"
            ServiceDesc="At Shivmala Infrastructure Pvt. Ltd., we offer comprehensive building construction services for residential,
            commercial, and institutional projects. From design to handover, we prioritize quality, aesthetics, and
            structural integrity. Whether it's an apartment complex, office, or school, we deliver high-end construction that
            meets client expectations and regulatory standards. Our focus is on sustainable building practices and
            customer satisfaction."
          />
        </div>
      </div>

      {/* Block 4 – lg:flex-row-reverse */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 px-6 sm:px-10 lg:px-24 py-12">
        <ServiceImg photo={ArchService} />
        <div className="w-full lg:w-1/2">
          <ServiceText
            ServiceHeading="Architectural Design"
            ServiceDesc="Our architectural design services at Shivmala Infrastructure Pvt. Ltd. blend innovation with practicality. We
            provide planning, 3D visualization, layout development, and approval drawings for residential, commercial,
            and public infrastructure. Our experienced architects ensure all designs are Vastu-compliant, efficient, and
            aesthetically pleasing. We align creativity with engineering precision to deliver transformative spaces."
          />
        </div>
      </div>

      {/* Block 5 – lg:flex-row */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-6 sm:px-10 lg:px-24 py-12">
        <ServiceImg photo={InteriorService} />
        <div className="w-full lg:w-1/2">
          <ServiceText
            ServiceHeading="Interior Design"
            ServiceDesc="Shivmala Infrastructure Pvt. Ltd. provides interior design services for homes, offices, retail, and hospitality
            spaces. We offer space planning, furniture layout, color palette selection, lighting design, and full execution.
            Our interiors reflect client lifestyle and vision, combining elegance with functionality. From modern minimalism
            to traditional themes, we create inspiring, practical interiors."
          />
        </div>
      </div>

      {/* Block 6 – lg:flex-row-reverse */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 px-6 sm:px-10 lg:px-24 py-12">
        <ServiceImg photo={DrainageService} />
        <div className="w-full lg:w-1/2">
          <ServiceText
            ServiceHeading="Drainage Line Construction"
            ServiceDesc="Our expert team at Shivmala Infrastructure Pvt. Ltd. designs and constructs efficient drainage and sewage
            systems, including stormwater drains, sewage lines, and pipelines. We use modern trenching and laying
            techniques to prevent waterlogging and ensure environmental compliance. Our solutions are tailored to
            residential layouts, urban developments, and industrial zones."
          />
        </div>
      </div>

      {/* Block 7 – lg:flex-row */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-6 sm:px-10 lg:px-24 py-12">
        <ServiceImg photo={BridgeService} />
        <div className="w-full lg:w-1/2">
          <ServiceText
            ServiceHeading="Bridge n Culvert Construction"
            ServiceDesc="Shivmala Infrastructure Pvt. Ltd. excels in bridge and culvert construction, delivering durable, load-bearing
            structures. We handle complete project lifecycle - from structural design and reinforcement to concreting and
            finishing. Our team ensures safety, strength, and regulatory compliance for every project, whether it's small
            culverts or major river-crossing bridges."
          />
        </div>
      </div>

      {/* Block 8 – lg:flex-row-reverse */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 px-6 sm:px-10 lg:px-24 py-12">
        <ServiceImg photo={WaterTankService} />
        <div className="w-full lg:w-1/2">
          <ServiceText
            ServiceHeading="Watertanks n Overhead Constructions"
            ServiceDesc="We design and construct durable water tanks and overhead storage systems for residential colonies,
            industries, and public utilities. Our solutions include RCC tank construction, structural engineering,
            waterproofing, and pipeline integration. Shivmala Infrastructure Pvt. Ltd. ensures long-lasting, hygienic water
            storage solutions that meet capacity demands and safety norms."
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
