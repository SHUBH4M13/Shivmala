import React from 'react';
import ProjectInfo from '../Projects/ProjectInfo'; // adjust path as needed
import PoojaHandibagInteriorPhoto from '../../assets/ProjectAssets/PoojaHandibagInteriorPhoto.png'; // placeholder photo
import PoojaHnadibagp2 from '../../assets/ProjectAssets/PoojaHnadibagp2.png'; // placeholder photo

PoojaHnadibagp2
export default function PoojaHandiBagInterior() {
  const boxData = [
    {
      BoxHeading: 'Crafting Spaces That Reflect Your Lifestyle',
      BoxText:
        'Bring the Future of Living Spaces to Life in Your Community with the innovation and creativity behind exceptional interior design. Use our curated resources to showcase how smart layouts and modern aesthetics come together to create functional future-ready interiors—starting today.',
    },
    {
      BoxHeading: 'Designing Homes That Endure',
      BoxText:
        'From intelligent space planning and energy-efficient solutions to eco-conscious materials and seamlessly integrated smart technologies, every element is thoughtfully designed for lasting value.',
    },
    {
      BoxHeading: 'Timeless Interiors',
      BoxText:
        'A seamless blend of advanced engineering and high-quality materials, every interior is thoughtfully designed to reflect our commitment to durability, operational efficiency, and long-term sustainability.',
    },
  ];

  return (
    <ProjectInfo
      InfoHeading="Interior Designing"
      projectphoto1={PoojaHandibagInteriorPhoto}
      projectphoto2={PoojaHnadibagp2}
      ProjectSubHeading="Spacious"
      boxData={boxData}
    />
  );
}
