import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Banner from '../components/Banner'
const inter = Inter({ subsets: ['latin'] })
import React, { useEffect, useState } from "react"
import { DatePicker } from 'antd';
import {Layout,Menu} from 'antd';

export default function Home({data}) {

// const {Header,Content,Sider,Footer} = Layout;

// const [videos, setVideos] = useState([]);

//   useEffect(() => {

//   const fetchVideos = async () => {
//     try {
//       const res = await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC1nL7deq9CpOe6Yv7_62uQA&maxResults=15&order=date&key=AIzaSyA_8YXuCws-yJ9BE5NXHvfjFJakFJ1sb6k");
//       const data = await res.json();
//       const videoData = data.items.map((item) => ({
//         id: item.id.videoId,
//         title: item.snippet.title,
//         description: item.snippet.description,
//         thumbnail: item.snippet.thumbnails.medium.url,
//       }));
//       setVideos(videoData);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   fetchVideos();
// }, []);

  return (
  <div className=''>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora magnam repellendus, cumque provident sit molestiae doloremque et, temporibus totam illo eligendi iusto consequuntur placeat ratione dicta culpa corrupti dolor accusamus!
  </div>
   
  )
}

