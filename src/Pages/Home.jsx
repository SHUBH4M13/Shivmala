import React from 'react'
import HeroSection from '../Components/HeroSection'
import Footer from "../Components/Footer"
import Search from "../Components/SearchBox"
import Navbar from "../Components/Navbar"

export default function Home() {
  return (
    <div className=' flex flex-col gap-5 '>
        <Navbar/>
        <HeroSection/>
        <Search/>
        <Footer/>
    </div>
  )
}
