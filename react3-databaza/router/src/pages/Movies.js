import { Link } from "react-router-dom"
import movies from "../data"
import "./Movies.css"

 const Movies = () => {
  return (
      <section>
        <h1>Filmy</h1>
        <div className="all-movies">
            {movies.map((oneMovie)=>{
                return <article key={oneMovie.id} className="one-movie">
                  <h2>{oneMovie.title}</h2>
                  <img src={oneMovie.image} alt="" /><br />
                  <Link to={`/all-movies/${oneMovie.id}`}>Viac informacii..</Link>
                </article>
            })}
        </div>
      </section>
  )
}

export default Movies