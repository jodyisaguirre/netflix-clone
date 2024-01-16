import Navbar from "@/app/components/Navbar";
import styles from './page.module.scss';

const MovieDetail = async ({params}) => {
  
  const res1 = await fetch(`http://www.omdbapi.com/?i=${params.id}&apikey=45388f10`)
  const movie = await res1.json()

  return (
    <div>
      <Navbar/>
      <div className={styles.movieContainer}>
        <header>      
          <h1>{movie.Title}</h1>
        </header>
        <section>
          <article>
            <figure>
            <img src={movie.Poster} alt={movie.Title} />
            </figure>
            <p>{movie.Plot}</p>
              <p>{movie.imdbRating}</p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default MovieDetail;