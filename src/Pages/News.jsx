import React from 'react'
import Navbar from '../Components/Navbar'
import NewsHero from "../Components/News/NewsHero"
import NewsBento from '../Components/News/NewsBento'
import NewsMedia from '../Components/News/NewsMedia'
import Footer from '../Components/Footer'

export default function News() {
  return (
    <div>
        <Navbar/>
        <NewsHero/>
        <NewsBento/>
        <NewsMedia/>
        <Footer/>
    </div>
  )
}
