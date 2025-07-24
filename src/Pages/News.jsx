import { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import NewsHero from "../Components/News/NewsHero"
import NewsBento from '../Components/News/NewsBento'
import NewsMedia from '../Components/News/NewsMedia'
import Footer from '../Components/Footer'
import axios from 'axios'

export default function News() {
  
  const [newsData , SetnewsData ] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`https://newsdata.io/api/1/latest?`, {
          params: {
            apikey: import.meta.env.VITE_NEWS_API_KEY,
            country:'in',
            category:'business',
            language:'en',
          }
        });
        SetnewsData(response.data.results);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const Herodata = newsData.slice(0,1)
  const BentoData = newsData.slice(1 , 5);
  const NewsMediaData = newsData.slice(5 , 10)

  return (
    <div>
      <Navbar />
      <NewsHero HeroData={Herodata}/>
      <NewsBento TopStories = {BentoData} />
      <NewsMedia MediaData={NewsMediaData} />
      <Footer />
    </div>
  );
}
