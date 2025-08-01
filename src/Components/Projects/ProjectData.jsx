import Photo1 from "../../assets/ProjectAssets/Photo1.jpg"
import Photo2 from "../../assets/ProjectAssets/Photo2.png"
import Photo3 from "../../assets/ProjectAssets/Photo3.png"
import Photo4 from "../../assets/ProjectAssets/Photo4.png"
import Photo5 from "../../assets/ProjectAssets/Photo5.png"
import Photo8 from "../../assets/ProjectAssets/Photo8.png"

const projectData = [
    {
      heading1: "Now all over India",
      heading2: "Housing Projects",
      text1: "Complete RCC Building Construction (G+3) including plastering, electrical fittings, and interior finishing. Delivered with strict adherence to quality and timelines, enhancing urban living standards in Latur.",
      ButtonText: "Learn more",
      Photo: Photo1,
      PhotoLoc: "MANREKHA RESIDENCY, LATUR",
      PhotoDuration: "Duration: Jan 2023 – Sep 2023",
      onClickRoute:"/projects/Housing"
    },
    {
      heading2: "Construction",
      text1:
        "10 km underground drainage network including chambers and slope alignment. Designed for efficient water management and long-term durability in the region",
      ButtonText: "Learn more",
      Photo: Photo8,
      PhotoLoc: "DRAINAGE LINE – SARSA",
      PhotoDuration: "Jan 2023 - Feb 2023",
      direction: "reverse",
      onClickRoute:"/projects/DrainageLine"
    },
    {
      heading2: "Interior Designing",
      text1:
        "Complete 2BHK residential interior design with modular furniture, POP design, and false ceiling. Customized aesthetics and utility for modern home living.",
      ButtonText: "Read the report",
      Photo: Photo3,
      PhotoLoc: "POOJA HANDIBAG HOUSE — INTERIOR",
      PhotoDuration: "Duration: Feb 2023 – May 2023",
      onClickRoute:"/projects/interior"
    },
    {
      heading2: "Dream Home Construction",
      text1:
        "Civil and architectural works with emphasis on space utilization and modern design standards for a premium urban lifestyle.",
      ButtonText: "Learn more",
      Photo: Photo4,
      PhotoLoc: "PATEL PROJECT PUNE",
      PhotoDuration: "Duration: Ongoing",
      direction: "reverse",
      onClickRoute:"/projects/Housing"
    },
    {
      heading2: "Bhumkar Hotel",
      text1:
        "Designed and executed interior and civil works for Bhumkar Hotel. Focused on space optimization, elegant finishes, and durable structures suitable for hospitality environments.",
      ButtonText: "Read the report",
      Photo: Photo5,
      PhotoLoc: "Hotel & Restaurant",
      PhotoDuration: "Duration: Completed",
      onClickRoute:"/projects/Bhumkar_Hotel",
    },
    {
      heading2: "Sankrut Family Restaurant",
      text1:
        "Full construction and interior execution of a family dining restaurant. Built to deliver warm ambiance, functional kitchen layouts, and superior guest experience.",
      ButtonText: "Read the report",
      Photo: Photo5,
      PhotoLoc: "Hotel & Restaurant",
      PhotoDuration: "Duration: Completed",
      direction: "reverse",
      onClickRoute:"/projects/Sankrut_Hotel",
    },
    {
      heading2: "Road Construction",
      text1:
        "2 km long RCC road construction with side drains, curbstone alignment, and compaction. Built to withstand high traffic and promote smooth transportation in Sarsa village.",
      ButtonText: "Learn more",
      Photo: Photo2,
      PhotoLoc: "CONCRETE ROAD – SARSA",
      PhotoDuration: "Duration: Feb 2023 - Mar 2023",
      onClickRoute:"/projects/roads"
    },
  ];


  export default projectData;