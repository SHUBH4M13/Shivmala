import React from 'react'
import NewsComponent from './NewsComponent'

export default function NewsBento({ TopStories }) {
    return (
        <div className='w-full'>
            <div>
                <span className='px-6 sm:px-10 lg:px-20 py-10 text-blueEnd text-xl sm:text-2xl lg:text-3xl uppercase font-boldness'>
                    Top Stories
                </span>

                <div className="px-6 sm:px-5 lg:px-10 py-10 bg-[#F1F1F1] grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {TopStories.map((news, idx) => (
                        <NewsComponent
                            key={idx}
                            Newsimg={news.image_url}
                            category={news.category}
                            title={news.title}
                            date={news.pubDate}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
