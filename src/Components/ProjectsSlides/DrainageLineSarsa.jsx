
import React from 'react';
import ProjectInfo from '../Projects/ProjectInfo';
import DrainageLinePhoto from "../../assets/ProjectAssets/DrainageLinePhoto.png"

export default function DrainageLineSarsa() {
  const boxData = [
    {
      BoxHeading: 'Bring the Future of Urban',
      BoxText:
        'Infrastructure to Your Community with the innovations behind modern drainage solutions. Use our curated resources to showcase how smart planning, sustainability, and advanced engineering come together to build resilient and efficient drainage systems — shaping healthier, future-ready cities starting today.',
    },
    {
      BoxHeading: '"Smart, Sustainable Living"',
      BoxText:
        'From intelligent space planning and energy-efficient systems to eco-friendly construction materials and integrated smart technologies, every element is designed with long-term value in mind. These innovations not only elevate the living experience',
    },
    {
      BoxHeading: 'Smart Urban Planning',
      BoxText:
        'A perfect blend of advanced engineering, high-quality materials. Thoughtfully designed, every drainage line reflects our commitment to durability, efficiency, and long-term sustainability.',
    },
  ];

  return (
    <ProjectInfo
      InfoHeading="Drainage Line Construction"
      projectphoto1={DrainageLinePhoto}
      projectphoto2={""}
      ProjectSubHeading="Being-Healthier"
      boxData={boxData}
    />
  );
}
