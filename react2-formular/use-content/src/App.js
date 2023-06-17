import data from "./data"
import MovieBox from "./components/MovieBox"
import { useState } from "react";
import MoviesContext from "./components/MoviesContext";

import Coordinates from "./components/Coordinates";

import Books from "./components/Books";

//useContext



const App = () => {
const [movies,setMovies] = useState(data)

const deleteMovie = (movieId) => {
  const newMovieList= movies.filter((oneMovie)=>{
      return oneMovie.id !== movieId
  })
  setMovies(newMovieList)
}


  return <div>
    <MoviesContext.Provider value={{deleteMovie,movies}}>
        <MovieBox />
    </MoviesContext.Provider>

    <br /><br /><br />

    
    <Coordinates/>

    <Books/>
  </div>
}

export default App