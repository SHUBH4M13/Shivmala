import React from 'react';
import ProjectInfo from '../Projects/ProjectInfo';
import Hotelp1 from "../../assets/ProjectAssets/Hotelp1.png";
import Hotelp2 from "../../assets/ProjectAssets/Hotelp2.png";

export default function HotelRestaurantPage() {
  const boxData = [
    {
      BoxHeading: "Interior Zoning",
      BoxText:
        "Dining zones were divided into open, semi-private, and kids-friendly areas. Lighting and acoustic elements ensured a relaxed dining environment. The entrance used warm tones and inviting textures.",
    },
    {
      BoxHeading: "Kitchen & Service",
      BoxText:
        "The project included a well-ventilated commercial kitchen with stainless steel surfaces, exhaust systems, and fire safety protocols. Serving counters were placed for maximum coverage and ease of operation.",
    },
    {
      BoxHeading: "Furniture & Ambiance",
      BoxText:
        "Furniture was custom-built with durable finishes. Tables and chairs reflected rustic-modern blend, while wall decor added local cultural flair.",
    },
    {
      BoxHeading: "Impact",
      BoxText:
        "The restaurant became a known spot locally within weeks of opening due to its comfort, ambiance, and timely completion by Shivmala Infrastructure Pvt. Ltd.",
    },
  ];

  const desc = `This restaurant construction combined architectural charm with practical design for a mid-sized family dining experience in Nagar. The design emphasized both functionality and emotional appeal.`;

  return (
    <ProjectInfo
      InfoHeading="Sankrut Family Restaurant"
      projectphoto1={Hotelp1}
      projectphoto2={Hotelp2}
      ProjectSubHeading="Dine-ready"
      boxData={boxData}
      ProjectDesc={desc}
    />
  );
}
