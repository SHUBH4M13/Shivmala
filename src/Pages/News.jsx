import {useEffect , useState} from 'react'
import Navbar from '../Components/Navbar'
import NewsHero from "../Components/News/NewsHero"
import NewsBento from '../Components/News/NewsBento'
import NewsMedia from '../Components/News/NewsMedia'
import Footer from '../Components/Footer'
import axios from 'axios'

export default function News() {

  useEffect( () => {
    try {
      const response = axios.get("http://api.mediastack.com/v1/news" , 
      {
        params: {
          access_key:import.meta.env.VITE_NEWS_API_KEY,
          keywords:"business",
          countries:"in",
        }
        
      })
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  },[])

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
