import styles from './page.module.css'
import Navbar from './components/Navbar'
import DetailCard from './components/DetailCard'

export default async function Home() {
  const res1 = await fetch('http://www.omdbapi.com/?t=john+wick&apikey=45388f10')
  const movie1 = await res1.json()
  const res2 = await fetch('http://www.omdbapi.com/?t=batman&apikey=45388f10')
  const movie2 = await res2.json()
  const res3 = await fetch('http://www.omdbapi.com/?t=superman&apikey=45388f10')
  const movie3 = await res3.json()
  const res4 = await fetch('http://www.omdbapi.com/?t=flash&apikey=45388f10')
  const movie4 = await res4.json()
  const res5 = await fetch('http://www.omdbapi.com/?t=13+hours&apikey=45388f10')
  const movie5 = await res5.json()
  const movies= [movie1,movie2,movie3,movie4,movie5]
 
  return (
      <>
        <Navbar/>
        <div className={styles.movieContainer}>
       {movies.map((movie) => <DetailCard key={movie.imdbID} title={movie.Title} image={movie.Poster} id={movie.imdbID}/>)}
       </div>
      </>
  )
}
