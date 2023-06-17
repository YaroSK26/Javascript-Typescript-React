import { projectFirestore } from "./firebase/config"
import { useState, useEffect } from "react"

const App = () => {

  const [data, setData] = useState([])
  const [error, setError] = useState(false)

  const [movieTitle, setMovieTitle] = useState("")
  const [movieAge, setMovieAge] = useState(0)
  const [movieTime, setMovieTime] = useState(0)

  useEffect(() => {
    const unsubscribe = projectFirestore.collection("movies").onSnapshot((snapshot) => {

      if (snapshot.empty) {
        setError("Ziadne filmy k vypsaniu")
        setData([])
      }
      else {
        let result = []
        snapshot.docs.forEach((oneMovie) => {
          result.push({ id: oneMovie.id, ...oneMovie.data() })
        })
        setData(result)
        setError("")
      }
    }, (err) => { setError(err.message) })

    return () => {
      unsubscribe()
    }
    // .catch((err)=>{setError(err.message)})
  }, [])

  const deleteMovie = (id) => {
    projectFirestore.collection("movies").doc(id).delete()
  }

  const submitForm = async (e) => {
    e.preventDefault()

     
   
    
    const newMovie = { title: movieTitle || "x", minage: movieAge || 0, time: movieTime|| 0 }

    try {
      await projectFirestore.collection("movies").add(newMovie)
      setMovieTitle("")
      setMovieAge(null)
      setMovieTime(null)
    } catch (err) {
      setError("Film nebol pridaný " + err.message)
    }
  }


  return (
    <div className="all-movies">

      <form onSubmit={submitForm} className="form">
        <input className="input" type="text" onChange={(e) => setMovieTitle(e.target.value )} placeholder="title" value={movieTitle} /><br />
        <input className="input" type="number" onChange={(e) => setMovieAge(e.target.value || 0)} placeholder="age" min="0" value={movieAge} /><br />
        <input className="input" type="number" onChange={(e) => setMovieTime(e.target.value || 0)} placeholder="time" min="0" value={movieTime} /><br />
        <input type="submit" value="Pridať" />

      </form>


      {error && <p>{error}</p>}
      {data.map((oneMovie) => {
        const { id, title, minage, time } = oneMovie
        return <div className="one-movie" key={id}>
          <p>{title} {time} minut {minage} + </p>
          <button onClick={() => deleteMovie(id)}>Zmazať</button>
        </div>
      })}
    </div>
  )
}

export default App
