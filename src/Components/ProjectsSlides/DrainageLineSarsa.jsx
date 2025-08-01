import React from 'react';
import ProjectInfo from '../Projects/ProjectInfo';
import DrainageLinePhoto from "../../assets/ProjectAssets/DrainageLinePhoto.png";

export default function DrainageLineSarsa() {
  const boxData = [
    {
      BoxHeading: 'Engineering Specifications',
      BoxText:
        'The system included manholes, inspection chambers, RCC pipes of various diameters, and reinforced concrete linings. The pipeline layout was designed to accommodate peak flow capacity and ensure low maintenance.',
    },
    {
      BoxHeading: 'Implementation',
      BoxText:
        'Excavation and trenching were done using hydraulic equipment with minimal disruption to daily life. Each segment was tested for leakage and slope accuracy before backfilling and compacting. Safety barriers and signage were maintained throughout.',
    },
    {
      BoxHeading: 'Environmental & Compliance',
      BoxText:
        'Work was carried out in strict adherence to municipal norms and environmental safeguards. Provisions were made for future connections from new residential zones to avoid re-digging.',
    },
    {
      BoxHeading: 'Outcome',
      BoxText:
        'The project resulted in significant improvements in waterlogging prevention, cleanliness, and quality of life for the community, especially during monsoon seasons.',
    },
  ];

  return (
    <ProjectInfo
      InfoHeading="Drainage Line Construction"
      projectphoto1={DrainageLinePhoto}
      projectphoto2=""
      ProjectSubHeading="Being-Healthier"
      boxData={boxData}
    />
  );
}
