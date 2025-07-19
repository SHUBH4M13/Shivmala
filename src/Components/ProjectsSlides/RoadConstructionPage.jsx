import React from 'react'
import ProjectInfo from '../Projects/ProjectInfo'
import Photo2 from "../../assets/ProjectAssets/Photo2.png"

export default function RoadConstructionPage() {
  const boxData = [
    {
      BoxHeading: "Building the Roads That Lead to Tomorrow’s Cities",
      BoxText:
        "Craft the roads of the future with next-gen construction and smart infrastructure tools. Explore our curated resources on sustainable transport networks, smart road alignment systems, and student innovation challenges.",
    },
    {
      BoxHeading: "Next-Gen Infrastructure: Smarter Roads for Connected Cities",
      BoxText:
        "Our dynamic infrastructure is driven by intelligent tools, smart urban layouts, and seamless mobility innovations. From shared transport to multi-use green corridors, rethink the way we connect and travel — long into the future.",
    },
    {
      BoxHeading: "Through the Wonder of Roadway Design",
      BoxText:
        "Embrace the strength of modern engineering, smart materials, and elegant execution. Every element reflects performance, resilience, and safety in our vision for tomorrow’s roads and highway infrastructure.",
    },
  ];

  return (
    <ProjectInfo
      InfoHeading="Road Construction"
      projectphoto1={Photo2}
      ProjectSubHeading="Move"
      boxData={boxData}
    />
  );
}
