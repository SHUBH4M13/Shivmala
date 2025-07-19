import React from 'react'
import ProjectInfo from '../Projects/ProjectInfo'
import HouseProjectp1 from '../../assets/ProjectAssets/HouseProjectp1.png'; // placeholder photo


export default function HousingProjectsPage() {
  const boxData = [
    {
      BoxHeading: "Shaping the Future of Living Today — Welcome to Your Dream Residency",
      BoxText:
        "Inspire excitement about the future of living within your community—whether at a housing expo, urban planning forum, student architecture group, or real estate conference.",
    },
    {
      BoxHeading: "Reimagining Neighborhoods with Innovation and Vision",
      BoxText:
        "Bring the future of housing to your community through the innovative vision behind Dream Houses. Utilize our curated resources to showcase how smart design, sustainability, and contemporary living come together to shape the neighborhoods of tomorrow — beginning today.",
    },
    {
      BoxHeading: "Through the Wonder of Thoughtful Living",
      BoxText:
        "A harmonious blend of contemporary design, premium materials, and a warm, welcoming ambiance. Every space is thoughtfully curated with sophisticated finishes, reflecting our unwavering commitment to quality and delivering unforgettable experiences.",
    },
  ];

  return (
    <ProjectInfo
      InfoHeading="Housing Projects"
      projectphoto1={HouseProjectp1}
      ProjectSubHeading="Lively Neighborhood"
      boxData={boxData}
    />
  );
}
