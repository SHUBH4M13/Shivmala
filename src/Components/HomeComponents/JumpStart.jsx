import React from 'react'
import ZoomPhotoText from '../ZoomPhotoText'
import jumpstartp1 from "../../assets/jumpstartp1.jpg"
import jumpstartp2 from "../../assets/jumpstartp2.jpg"


export default function Jumpstart() {
    return (
        <div className='w-full flex justify-center items-center p-10  gap-10  '>

            <div className=' flex '>
                <ZoomPhotoText
                    photo={jumpstartp1}
                    heading1={"FOR STUDENTS"}
                    heading2={"SHIVMALA on Campus"}
                    text1="Make a difference in the civil engineering professional
        community while still in college. Enjoy mentorship
        connections, networking opportunities and educational
        resources. For free."
                    ButtonText={"Learn more"}
                />
            </div>

            <div>
                <ZoomPhotoText
                    photo={jumpstartp2}
                    heading1={"FOR STUDENTS"}
                    heading2={"SHIVMALA on Campus"}
                    text1="Make a difference in the civil engineering professional
        community while still in college. Enjoy mentorship
        connections, networking opportunities and educational
        resources. For free."
                    ButtonText={"Learn more"}
                />
            </div>

        </div>
    )
}
