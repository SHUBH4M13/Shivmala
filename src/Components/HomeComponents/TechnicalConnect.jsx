import React from 'react'
import ZoomPhotoText from '../ZoomPhotoText'
import TechnicalResource from "../../assets/TechnicalResource.jpg"
import Laptop from "../../assets/Laptop.jpg"
import ConstructionWorker from "../../assets/ConstructionWorker.jpg"
import Laptopguy from "../../assets/Laptopguy.jpg"



export default function TechnicalConnect() {
    return (
        <div className=' flex flex-col justify-center items-center gap-10'>

            <p className=' text-4xl font-bold text-HoverBlue'>The technical resources you need to advance</p>

            <div className=' flex  p-10 gap-15 '>

                <div>
                    <ZoomPhotoText
                        photo={TechnicalResource}
                        heading2="Continuing education"
                        text1={`Expert taught programs to help you succeed and excel in
your career as you fulfill your licensure requirements. Over
55 years of high-quality programming and certificate
programs.
- Unlimited all access pass for on-demand webinars - New!
- PE civil exam prep
- Live and on-demand training`}
                        
                    />

                </div>

                <div>
                    <ZoomPhotoText
                        photo={Laptop}
                        heading2="Publications"
                        text1="SHIVMALA Library is your platform for the latest in civil
                        engineering practice and research. This core collection
                        covers all technical areas of civil engineering. Shivmala’s
                        scholarly publications include books, peer-reviewed journals,
                        conference proceedings, and magazines."
            ButtonText = "SHIVMALA Library"
                    />
                </div>

            </div>

            <p className=' text-4xl font-bold text-HoverBlue'>New Ways to Connect</p>

            <div className=' flex  p-10 gap-15 '>

                <div>
                    <ZoomPhotoText
                        photo={ConstructionWorker}
                        heading2="Career Connections"
                        text1={`Your home for the best jobs available in civil engineering.
                        Explore your one-stop shop for all things career-related.`}
                        ButtonText={"Find your Dream Job!"}
                    />

                </div>

                <div>
                    <ZoomPhotoText
                        photo={Laptopguy}
                        heading2="Communities of Practice"
                        text1="Communities built for overarching topics of engineering,
                        bringing unique perspectives from all types of engineers
                        throughout the society."
                        ButtonText = {"Join the Conversation"}
                    />
                </div>

            </div>

        </div>
    )
}
