import React from 'react'
import HeroSection from '../Components/HomeComponents/HeroSection'
import Footer from "../Components/Footer"
import Search from "../Components/HomeComponents/SearchBox"
import Navbar from "../Components/Navbar"
import NewNotable from "../Components/HomeComponents/NewNotable"
import Jumpstart from '../Components/HomeComponents/JumpStart'
import TechnicalConnect from "../Components/HomeComponents/TechnicalConnect"
import PassionForward from "../Components/HomeComponents/PassionForward"

export default function Home() {
  return (
    <div className=' flex flex-col gap-5 '>
      <Navbar />
      <HeroSection />
      <Search />
      <NewNotable/>
      <Jumpstart/>
      <TechnicalConnect/>
      <PassionForward/>
      <Footer />
    </div>
  )
}
