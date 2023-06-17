import projectFirestore from "../firebase/config"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./AllMovies.css"


const AllMovies = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState("")


  useEffect(() => {
    const unsubscribe =  projectFirestore.collection("movies").onSnapshot((snapshot) => {
      // console.log(snapshot.docs)


      if (snapshot.empty) {
        setError("Žádné filmy k vypsání")
      } else {
        let result = []
        snapshot.docs.forEach((oneMovie) => {
          // console.log(oneMovie.data())
          result.push({ id: oneMovie.id, ...oneMovie.data() })
        })
        setData(result)
      }
    }, (err) =>setError(err.message))

    return () => unsubscribe()
  }, [])

  const deleteMovie = (id) =>{
    projectFirestore.collection("movies").doc(id).delete()
  }

  return <section>
    {error && <p>{error}</p>}

    {data.map((oneMovie) => {
      const { id, title} = oneMovie


      return <div key={id} className="one-movie">
        <p>{title}</p>
        <Link to={`/one-movie/${id}`}>Viac informacii</Link>
        <button onClick={()=> deleteMovie(id)}>Zmazať</button>
      </div>
    })}
  </section>
}



export default AllMovies