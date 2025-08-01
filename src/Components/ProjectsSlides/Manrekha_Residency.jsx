import React from 'react';
import ProjectInfo from '../Projects/ProjectInfo';
import MANREKHARESIDENCYp1 from "../../assets/ProjectAssets/MANREKHARESIDENCYp1.png";
import MANREKHARESIDENCYp2 from "../../assets/ProjectAssets/MANREKHARESIDENCYp2.png";

export default function Manrekha_Residency() {
  const boxData = [
    {
      BoxHeading: 'Construction Details',
      BoxText:
        'The project involved excavation, RCC foundation, framed structure construction, internal and external plastering, waterproofing, and terrace treatments. Standard quality materials such as PPC cement, TMT bars, and ready-mix concrete were used.',
    },
    {
      BoxHeading: 'Electrical & Plumbing',
      BoxText:
        'Concealed copper wiring with branded switches and MCB panels ensured safety. Plumbing included CPVC/UPVC pipes and premium fixtures. Separate underground and overhead water storage systems were implemented.',
    },
    {
      BoxHeading: 'Interior Execution',
      BoxText:
        'Each flat was completed with elegant false ceilings, customized modular kitchens, laminated wardrobes, and tile work in all bathrooms and kitchens. Premium paint and POP finishing gave the homes a clean, modern look.',
    },
    {
      BoxHeading: 'Impact & Benefits',
      BoxText:
        'Delivered 16 premium flats in a gated community with proper amenities, power backup, and rainwater harvesting system. The project set a new benchmark for urban residential infrastructure in the region.',
    },
  ];

  const desc = `Manrekha Residency is a prestigious G+3 RCC residential development in Latur, undertaken with a vision to provide modern, durable, and aesthetically pleasing living spaces. The project was completed within 9 months, encompassing civil, electrical, and interior work.`;

  return (
    <ProjectInfo
      InfoHeading="Dream Home Construction"
      projectphoto1={MANREKHARESIDENCYp1}
      projectphoto2={MANREKHARESIDENCYp2}
      boxData={boxData}
      ProjectDesc={desc}
    />
  );
}
