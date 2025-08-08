import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Investorshero from '../Components/Investors/Investorshero'
import ImpactPatners from '../Components/Investors/ImpactPatners'
import PartnershipSection from '../Components/Investors/PartnershipSection'




export default function Investors() {
  return (
    <div className=' overflow-x-hidden '>
        <Navbar/>
        <Investorshero/>
        <ImpactPatners/>
        <PartnershipSection/>
        <Footer/>
    </div>
  )
}
