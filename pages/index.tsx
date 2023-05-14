import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Banner from '../components/Banner'
const inter = Inter({ subsets: ['latin'] })
import React, { useEffect, useState } from "react"


export default function Home({data}) {
  
const [videos, setVideos] = useState([]);

  useEffect(() => {

  const fetchVideos = async () => {
    try {
      const res = await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC1nL7deq9CpOe6Yv7_62uQA&maxResults=15&order=date&key=AIzaSyA_8YXuCws-yJ9BE5NXHvfjFJakFJ1sb6k");
      const data = await res.json();
      const videoData = data.items.map((item) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.medium.url,
      }));
      setVideos(videoData);
    } catch (error) {
      console.error(error);
    }
  };
  fetchVideos();
}, []);

  return (
    <div className='bg-gray-50'>
      <Head>
        <title>Skillfusion</title>
       <link rel="icon" href="/favicon.ico" />
      </Head>
      
    <Banner/>

  {/* <main className='mt-10'>
  <h1 className="text-2xl font-bold text-gray-600 mb-8 ml-3">Videos From YouTube </h1>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <a href={`https://www.youtube.com/watch?v=${video.id}`}>
              <img className="w-full" src={video.thumbnail} alt={video.title} />
              <div className="p-4">
                <h2 className="text-lg font-medium text-gray-900">{video.title}</h2>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
    
  </main> */}

    </div>
  )
}

