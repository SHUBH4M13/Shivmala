import React from 'react';
import ProjectInfo from '../Projects/ProjectInfo';
import Hotelp1 from "../../assets/ProjectAssets/Hotelp1.png";
import Hotelp2 from "../../assets/ProjectAssets/Hotelp2.png";

export default function HotelRestaurantPage() {
  const boxData = [
    {
      BoxHeading: "Execution Scope",
      BoxText:
        "Work included RCC partitioning, acoustic insulation, custom furniture, lighting design, and theme-based aesthetics. Space was designed to meet hospitality and fire-safety norms.",
    },
    {
      BoxHeading: "Aesthetic Features",
      BoxText:
        "Warm wood tones, soft ambient lighting, soundproof windows, and elegant wall panels were used. The dining area features soft background lighting, maximizing guest comfort.",
    },
    {
      BoxHeading: "Operational Design",
      BoxText:
        "Back-end kitchen and staff movement zones were planned for efficiency. Maintenance and services are organized to avoid disruption to guests.",
    },
    {
      BoxHeading: "Client Outcome",
      BoxText:
        "Delivered on budget and ahead of schedule, the hotel became operational within 4 months. Post-launch feedback highlighted comfort, ambiance, and design quality.",
    },
  ];

  const desc = `A boutique hotel project focused on optimizing guest experience through thoughtful interior design and efficient space utilization. The property includes reception, dining, common lounge, and guest rooms.`;

  return (
    <ProjectInfo
      InfoHeading="Bhumkar Hotel"
      projectphoto1={Hotelp1}
      projectphoto2={Hotelp2}
      ProjectSubHeading="Guest Comfort Optimized"
      boxData={boxData}
      ProjectDesc={desc}
    />
  );
}
