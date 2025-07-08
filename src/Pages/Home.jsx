import React from 'react'
import HeroSection from '../Components/HomeComponents/HeroSection'
import Footer from "../Components/Footer"
import Search from "../Components/HomeComponents/SearchBox"
import Navbar from "../Components/Navbar"
import NewNotable from "../Components/HomeComponents/NewNotable"

export default function Home() {
  return (
    <div className=' flex flex-col gap-5 '>
      <Navbar />
      <HeroSection />
      <Search />
      <NewNotable/>
      <Footer />
    </div>
  )
}
