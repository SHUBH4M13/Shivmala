import React from 'react'
import Navbar from '../Components/Navbar'
import CusButton from '../Components/CusButton'
import ContactHero from "../Components/Contact/ContactHero"
import Footer from '../Components/Footer'
import Locations from "../Components/Contact/Locations"
import MaharastraLoc from '../Components/Contact/MaharastraLoc'

export default function Contactus() {
    return (
        <div>
            <Navbar />

            <div>
                <div>
                    <ContactHero />
                </div>

                <div>
                    <Locations />
                </div>

                <div>
                    <MaharastraLoc/>
                </div>

                <div className=' w-full flex justify-center items-center'>
                    <CusButton
                        text={"Get In Touch"}
                    />
                </div>
            </div>

            <Footer />
        </div>
    )
}
