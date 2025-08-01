import React from 'react'
import ProjectInfo from '../Projects/ProjectInfo'
import Photo2 from "../../assets/ProjectAssets/Photo2.png"

export default function RoadConstructionPage() {
  const boxData = [
    {
      BoxHeading: "Technical Specs",
      BoxText:
        "The road was constructed with a thickness of 200 mm M-30 grade concrete over a compacted subgrade and subbase layer. Curbstones were placed on both sides with a side slope to direct rainwater into side drains.",
    },
    {
      BoxHeading: "Execution Process",
      BoxText:
        "The entire roadbed was surveyed, leveled, and compacted using vibratory rollers. Concrete was poured using transit mixers and vibrated mechanically to ensure uniform compaction and strength.",
    },
    {
      BoxHeading: "Drainage & Finishing",
      BoxText:
        "Side drains were constructed with proper slope and gradient to ensure effective water runoff. The road edges were sealed and expansion joints added to enhance durability and prevent cracking.",
    },
  ];

  const projectdesc = `The 2 km RCC road construction project at Sarsa village improved rural connectivity by offering a robust and
  weather-resistant cement concrete surface with side drainage and curbstone alignment.`

  return (
    <ProjectInfo
      InfoHeading="Road Construction"
      projectphoto1={Photo2}
      ProjectSubHeading="Move"
      boxData={boxData}
      projectdesc ={projectdesc}
    />
  );
}
