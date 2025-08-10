import React, { Suspense } from 'react'
import HeroSection from '../Components/HomeComponents/HeroSection'
import Footer from "../Components/Footer"
import Search from "../Components/HomeComponents/SearchBox"
import Navbar from "../Components/Navbar"
import { Helmet } from 'react-helmet-async'

import LoadingSpinner from '../Components/LoadingSpinner'

const NewNotable = React.lazy(() => import("../Components/HomeComponents/NewNotable"))
const Jumpstart = React.lazy(() => import("../Components/HomeComponents/JumpStart"))
const TechnicalConnect = React.lazy(() => import("../Components/HomeComponents/TechnicalConnect"))
const PassionForward = React.lazy(() => import("../Components/HomeComponents/PassionForward"))

export default function Home() {
  return (
    <div className=' flex flex-col gap-5 overflow-x-hidden '>
      <Helmet>
        <link rel="icon" type="image/png" href="/ShivmalaLogo.png" />
        <link rel="shortcut icon" type="image/png" href="/ShivmalaLogo.png" />
        <link rel="apple-touch-icon" href="/ShivmalaLogo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Shivmala Infrastructure Pvt. Ltd | Civil Engineering & Construction Services</title>
        <meta name="description" content="Shivmala Infrastructure Pvt. Ltd is a leading provider of civil engineering, building construction, and interior design services in Maharashtra, India." />
        <meta name="keywords" content="civil engineering, construction, infrastructure, building construction, interior design, Maharashtra, India" />
        <meta name="author" content="Shivmala Infrastructure Pvt. Ltd" />
        <meta name="google-site-verification" content="ELSqMiRiWSFlzjndWHH5PkYf0LmTNFzgTni7Z_HAW_A" />
        <meta property="og:title" content="Shivmala Infrastructure Pvt. Ltd | Civil Engineering & Construction Services" />
        <meta property="og:description" content="Shivmala Infrastructure Pvt. Ltd is a leading provider of civil engineering, building construction, and interior design services in Maharashtra, India." />
        <meta property="og:image" content="https://shivmalainfra.com/ShivmalaLogo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://shivmalainfra.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Shivmala Infrastructure Pvt. Ltd" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shivmala Infrastructure Pvt. Ltd | Civil Engineering & Construction Services" />
        <meta name="twitter:description" content="Leading provider of civil engineering, building construction, and interior design services in Maharashtra, India." />
        <meta name="twitter:image" content="https://shivmalainfra.com/ShivmalaLogo.png" />
      </Helmet>
      <Navbar />
      <HeroSection />
      <Search />

      <Suspense fallback={<LoadingSpinner />}>
        <NewNotable />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Jumpstart />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <TechnicalConnect />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <PassionForward />
      </Suspense>

      <Footer />
    </div>
  )
}
