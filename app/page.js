import Image from 'next/image'
import styles from './page.module.css'

export default async function Home() {
  const res = await fetch('http://www.omdbapi.com/?t=john+wick&apikey=45388f10')
  const movies = await res.json()
 
  return (
      <>
           <h1>Movies</h1>
           <ul>
              {movies.Title}
           </ul>

      </>
  )
}
