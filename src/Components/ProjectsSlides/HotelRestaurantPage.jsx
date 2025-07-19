import React from 'react'
import ProjectInfo from '../Projects/ProjectInfo'
import Hotelp1 from "../../assets/ProjectAssets/Hotelp1.png"
import Hotelp2 from "../../assets/ProjectAssets/Hotelp2.png"

export default function HotelRestaurantPage() {
  const boxData = [
    {
      BoxHeading: "Shape Tomorrow’s Hospitality, Today — At Your Dream Stay & Dine",
      BoxText:
        "Bring the future of fine dining and hospitality to your community with the innovations behind our luxurious hotel & restaurant services. Use curated materials to envision premium comfort spaces that reflect elegant service, ambiance, and memorable stays.",
    },
    {
      BoxHeading: "Dining Reinvented",
      BoxText:
        "Envision the future of luxury dining and hospitality with the innovations that define tomorrow’s spaces. Our restaurant offerings bring elevated service, warm ambiance, and cutting-edge design — shaping unforgettable dining experiences.",
    },
    {
      BoxHeading: "Through the Wonder of Culinary Art",
      BoxText:
        "A perfect blend of contemporary architecture, curated menus, and refined settings. Each moment spent within reflects thoughtful execution and timeless appeal.",
    },
  ];

  return (
    <ProjectInfo
      InfoHeading="Hotel & Restaurant"
      projectphoto1={Hotelp1}
      projectphoto2={Hotelp2}
      ProjectSubHeading="Dine-ready"
      boxData={boxData}
    />
  );
}
