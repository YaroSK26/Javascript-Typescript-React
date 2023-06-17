import {useState,useEffect} from 'react'
import allMovies from "./data"

const App = () => {

  const [text, setText] = useState("")
  const [filteredMovies, setFilteredMovies]= useState([])

  useEffect(()=>{
    const moviesAfterFilter = allMovies.filter((oneMovie)=>{
        return oneMovie.title.toLowerCase().includes(text.toLowerCase())
    }) 
    setFilteredMovies(moviesAfterFilter)
  },[text])

  return (
    <div className="movies-box">
      <div>
        <form action="">
           <input type="text"  onChange={(event)=>setText(event.target.value)} placeholder="Hľadaný film"  />
        </form>
      </div>
      <div className="all-movies">
      {
        filteredMovies.map((oneMovie) => {
            const {id,image,title,age,tags,description} = oneMovie

            return <div  className="movie-list" key={id}>
                <img src={image} alt="" />
                <h2>{title}</h2>
                <p>{age}</p>
                <p>{tags}</p>
                <p>{description}</p>
            </div>
         
        })
      }
      </div>
    </div>


  )
}

export default App