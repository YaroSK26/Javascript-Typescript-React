import "./Movie.css"
import data from "../data"
import MovieDeleteButton from "./MovieDeleteButton"
import AllDeleteButton from "./AllDeleteButton"
import ReloadAllMovies from "./ReloadAllMovies"
import { useState } from "react"


const Movie = () => {
    const [movieList, setMovieList] = useState(data)


    const deleteOneMovie = (idecko) => {
        const filteredMovies = movieList.filter((oneMovie) => {
            return oneMovie.id !== idecko
        })
        setMovieList(filteredMovies)
    }

    const DeleteAllMovies = () =>{
        setMovieList([])
    }
    const uploadMovie = () => {
        setMovieList(data)
    }

    return <section className="all-movies2">
        {
            movieList.map((oneMovie) => {
                const { id, image, title, age, tags, description } = oneMovie


                return <div className="one-movie2" key={id}>
                    <img src={image} alt="" />
                    <h2>{title}</h2>
                    <p>{age}</p>
                    <p>{tags}</p>
                    <p>{description}</p>
                    <MovieDeleteButton deleteMovie={() => deleteOneMovie(id)} />
                </div>
            })
        }
        <div className="button-box"><AllDeleteButton deleteMovies={DeleteAllMovies}/>

            <ReloadAllMovies uploadMovie={uploadMovie} />  
        </div>
    </section>

}


export default Movie
