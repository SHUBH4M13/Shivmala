import React, { Suspense } from 'react'
import HeroSection from '../Components/HomeComponents/HeroSection'
import Footer from "../Components/Footer"
import Search from "../Components/HomeComponents/SearchBox"
import Navbar from "../Components/Navbar"

import LoadingSpinner from '../Components/LoadingSpinner'

const NewNotable = React.lazy(() => import("../Components/HomeComponents/NewNotable"))
const Jumpstart = React.lazy(() => import("../Components/HomeComponents/JumpStart"))
const TechnicalConnect = React.lazy(() => import("../Components/HomeComponents/TechnicalConnect"))
const PassionForward = React.lazy(() => import("../Components/HomeComponents/PassionForward"))

export default function Home() {
  return (
    <div className=' flex flex-col gap-5 '>
      <Navbar />
      <HeroSection />
      <Search />

      <Suspense fallback={<LoadingSpinner/>}>
        <NewNotable />
      </Suspense>

      <Suspense fallback={<LoadingSpinner/>}>
        <Jumpstart />
      </Suspense>

      <Suspense fallback={<LoadingSpinner/>}>
        <TechnicalConnect />
      </Suspense>

      <Suspense fallback={<LoadingSpinner/>}>
        <PassionForward />
      </Suspense>

      <Footer />
    </div>
  )
}
