import React from 'react';
import ProjectInfo from '../Projects/ProjectInfo'
import MANREKHARESIDENCYp1 from "../../assets/ProjectAssets/MANREKHARESIDENCYp1.png"
import MANREKHARESIDENCYp2 from "../../assets/ProjectAssets/MANREKHARESIDENCYp2.png"


export default function Manrekha_Residency() {
  const boxData = [
    {
      BoxHeading: `"Shape Tomorrow’s Living, Today – At ur Dream Houses"`,
      BoxText:
        'Spark excitement about the future of living in your local area—whether it’s within a housing app, community planning session, student architecture club, or real estate event.',
    },
    {
      BoxHeading: 'Building Tomorrow',
      BoxText:
        'Bring the Future of Housing to Life in Your Community with the innovations behind your Dream Houses. Use our curated resources to showcase how smart design, sustainability, and modern living come together to shape the neighborhoods of tomorrow—starting today.',
    },
    {
      BoxHeading: 'Through the Wonder',
      BoxText:
        'A perfect blend of modern architecture, premium materials, and future-ready living. Thoughtfully designed with elegant finishes, each home reflects our commitment to quality and innovation.',
    },
  ];

  const desc = `Every structure is built with precision and durability in mind. We use earthquake-resistant RCC frameworks, high-quality AAC blocks for insulation, and branded fittings for long-term reliability. Each home features concealed electrical wiring, vitrified tile flooring, modular kitchen layouts, and anti-skid bathroom tiles. Our construction adheres to the highest safety and quality standards, ensuring a home that’s not just beautiful—but built to last.`;

  return (
    <ProjectInfo
      InfoHeading="Dream Home Construction"
      projectphoto1={MANREKHARESIDENCYp1}
      projectphoto2={MANREKHARESIDENCYp2}
      ProjectSubHeading="Get-ready"
      boxData={boxData}
      ProjectDesc={desc}
    />
  );
}
