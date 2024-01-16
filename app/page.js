import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'
import DetailCard from './components/DetailCard'

export default async function Home() {
  const res = await fetch('http://www.omdbapi.com/?t=john+wick&apikey=45388f10')
  const movies = await res.json()
 
  return (
      <>
        <Navbar/>
        <DetailCard title={movies.Title} image={movies.Poster}/>
        

      </>
  )
}
