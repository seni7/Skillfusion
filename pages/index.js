import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Headerprofail from '../components/Headerprofail'
const inter = Inter({ subsets: ['latin'] })

const YOUTUBE_PLAYLIST_ITEMS_API='https://www.googleapis.com/youtube/v3/playlists'

export async function getServerSideProps(){

  const res=await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLOGi5-fAu8bGBOc63cDfdTR6l7gN6yh5U&maxResults=50key=${process.env.YOUTUBE_API_KEY}`);
  const data=await res.json();
  return{
    props: { 
       data
    }  
}
}
export default function Home({data}) {
  console.log('data',data)
  return (
    <>
      <Head>
        <title>Skillfusion</title>
       <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header/>
    <Banner/>

  <main>
    <h1>Youtube Video </h1>
    <ul>
        {data.items?.map((item)=>{
          const {id,snippet={}}=item;
          const {title,thumbnails={},resourceId}=snippet;
          const{medium={}} =thumbnails;

            <li key={id}>
              <a href={`https://www.youtube.com/watch?v=${resourceId}`}>
              <p>
                <Image width={medium.width} height={medium.height} src={medium.url} alt=""/>
              </p>
              <h3>{title}</h3>
              </a>
            </li>
          
        })}
  
    </ul>
  </main>

    </>
  )
}
