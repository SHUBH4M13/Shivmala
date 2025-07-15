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
            ServiceDesc="Shivmala is a trusted and innovative construction company committed to delivering high-quality building solutions across residential, commercial, and industrial sectors. With a team of experienced professionals and a dedication to excellence, we offer a wide range of services including general contracting, project management, architectural planning, renovations, and turnkey construction solutions."
          />
        </div>
      </div>

      {/* Block 2 – lg:flex-row-reverse */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 px-6 sm:px-10 lg:px-24 py-12">
        <ServiceImg photo={Servicehighway} />
        <div className="w-full lg:w-1/2">
          <ServiceText
            ServiceHeading="Highway Construction"
            ServiceDesc="Shivmala is a leading highway construction company dedicated to building safe, durable, and efficient road infrastructure. With extensive experience in large-scale transportation projects, we specialize in highway development, road widening, asphalt paving, bridge construction, and maintenance services. Our skilled team combines advanced engineering techniques with modern equipment to deliver projects that meet the highest standards of quality, safety, and environmental compliance. From initial planning and surveying to final execution, we ensure every project is completed on time and within budget, supporting the growth and connectivity of regions across the country."
          />
        </div>
      </div>

      {/* Block 3 – lg:flex-row */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-6 sm:px-10 lg:px-24 py-12">
        <ServiceImg photo={BuildingConstruction} />
        <div className="w-full lg:w-1/2">
          <ServiceText
            ServiceHeading="Building Construction"
            ServiceDesc="Shivmala is a reliable building construction company offering services in residential, commercial, and institutional projects. We handle everything from design to finishing, ensuring high-quality work, on-time delivery, and complete client satisfaction. Whether it's a home, office, or school, we build with care and precision."
          />
        </div>
      </div>

      {/* Block 4 – lg:flex-row-reverse */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 px-6 sm:px-10 lg:px-24 py-12">
        <ServiceImg photo={ArchService} />
        <div className="w-full lg:w-1/2">
          <ServiceText
            ServiceHeading="Architectural Design"
            ServiceDesc="Shivmala is a specialized highway construction company committed to developing high-quality, long-lasting road infrastructure. We provide a full range of services including highway and expressway construction, asphalt and concrete paving, road widening, drainage systems, bridge construction, and routine maintenance. With a strong focus on safety, efficiency, and environmental standards, our experienced team uses advanced machinery and proven engineering practices to deliver projects on schedule and within budget. Whether it’s a new highway, an upgrade to existing roads, or critical repair work, we take pride in building transportation networks that improve connectivity and support regional development."
          />
        </div>
      </div>

      {/* Block 5 – lg:flex-row */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-6 sm:px-10 lg:px-24 py-12">
        <ServiceImg photo={InteriorService} />
        <div className="w-full lg:w-1/2">
          <ServiceText
            ServiceHeading="Interior Design"
            ServiceDesc="Shivmala is a professional interior design firm dedicated to creating stylish, functional, and personalized spaces for residential, commercial, and hospitality clients. Our services include space planning, concept development, 3D visualization, furniture selection, lighting design, and full interior execution. Whether it’s transforming a home, office, retail store, or hotel, our team blends creativity with practicality to deliver interiors that reflect each client's vision and lifestyle. From modern minimalism to classic elegance, we handle every project with attention to detail, quality craftsmanship, and a strong commitment to client satisfaction."
          />
        </div>
      </div>

      {/* Block 6 – lg:flex-row-reverse */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 px-6 sm:px-10 lg:px-24 py-12">
        <ServiceImg photo={DrainageService} />
        <div className="w-full lg:w-1/2">
          <ServiceText
            ServiceHeading="Drainage Line Construction"
            ServiceDesc="Shivmala specializes in the design and construction of efficient and durable drainage systems. We offer comprehensive services including stormwater drainage, sewer line installation, pipeline laying, trenching, and maintenance solutions. Our experienced team ensures that every project meets environmental and safety standards while effectively managing water flow to prevent flooding and erosion. Whether for residential layouts, commercial zones, or large-scale infrastructure projects, we deliver reliable drainage solutions tailored to site-specific needs."
          />
        </div>
      </div>

      {/* Block 7 – lg:flex-row */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-6 sm:px-10 lg:px-24 py-12">
        <ServiceImg photo={BridgeService} />
        <div className="w-full lg:w-1/2">
          <ServiceText
            ServiceHeading="Bridge n Culvert Construction"
            ServiceDesc="Shivmala specializes in the construction of high-quality bridges and culverts, essential components of modern transportation infrastructure. We offer end-to-end solutions including design, excavation, formwork, reinforcement, concreting, and finishing. Our skilled engineers and construction teams ensure structural strength, durability, and safety in every project, whether it's a small box culvert or a large-span bridge. Using advanced construction techniques and adhering to all regulatory standards, we deliver reliable structures that improve connectivity and withstand environmental challenges."
          />
        </div>
      </div>

      {/* Block 8 – lg:flex-row-reverse */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 px-6 sm:px-10 lg:px-24 py-12">
        <ServiceImg photo={WaterTankService} />
        <div className="w-full lg:w-1/2">
          <ServiceText
            ServiceHeading="Watertanks n Overhead Constructions"
            ServiceDesc="Shivmala  specializes in the construction of durable water tanks and overhead storage structures for residential, commercial, and municipal applications. We offer complete solutions including design, structural engineering, foundation work, RCC tank construction, steel tank fabrication, and waterproofing. Our overhead water tanks are built to ensure long-term strength, safety, and efficient water distribution. With a focus on quality materials, precision engineering, and adherence to industry standards, we deliver reliable storage systems that support daily water needs and infrastructure development."
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
