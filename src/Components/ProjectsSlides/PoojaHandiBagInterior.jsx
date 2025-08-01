import React from 'react';
import ProjectInfo from '../Projects/ProjectInfo';
import PoojaHandibagInteriorPhoto from '../../assets/ProjectAssets/PoojaHandibagInteriorPhoto.png';
import PoojaHnadibagp2 from '../../assets/ProjectAssets/PoojaHnadibagp2.png';

export default function PoojaHandiBagInterior() {
  const boxData = [
    {
      BoxHeading: 'Design Intent',
      BoxText:
        'The project goal was to turn a standard 2BHK house into a personalized and stylish living space. The interior layout was tailored for comfort, minimalism, and daily utility without compromising aesthetics.',
    },
    {
      BoxHeading: 'Execution Highlights',
      BoxText:
        'Included false ceiling with recessed lighting, laminated wardrobes, modular kitchen setup, dining and TV units, textured wall finishes, and efficient space zoning. All work was custom-built using MDF/plywood and branded laminates.',
    },
    {
      BoxHeading: 'Color & Lighting',
      BoxText:
        'Neutral tones were used for walls with bold accents in living and bedroom areas. Natural light was maximized with sheer curtains, and ambient LED lighting enhanced the space\'s warmth and coziness.',
    },
    {
      BoxHeading: 'Furniture & Fixtures',
      BoxText:
        'Custom wardrobes, folding dining sets, and wall-mounted TV units were integrated. Premium fittings were used in kitchen and bathrooms to match the overall theme of elegance and utility.',
    },
    {
      BoxHeading: 'Client Satisfaction',
      BoxText:
        'The house now reflects modern urban taste and lifestyle needs. The client appreciated the timely delivery, material transparency, and ability to visualize the outcome before execution using 3D renders.',
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
