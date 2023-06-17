import { useParams,Link } from "react-router-dom"
import projectFirestore  from "../firebase/config"
import { useState,useEffect } from "react"
import "./OneMovie.css"

const OneMovie = () => {
  const [data,setData] = useState({})
  const [error,setError] = useState(false)

 const {movieId} =  useParams()

 useEffect(()=>{
    projectFirestore.collection("movies").doc(movieId).get().then((document)=>{
      if (document.exists) {
        setData(document.data())
      }else{
        setError("nenašli sme film")
      }
    }).catch((err)=>{
      setError(err.message)
    })
 }, [movieId])

  return (
    <div className="one-movie-section">
      {movieId}
      {error &&  <p>{error}</p>}
      <h1>{data.title}</h1>
      <p>{data.minage} + </p>
      <p>{data.time} minut</p>
      <Link exact to="/all-movies">Späť na zoznam filmov</Link>
    
    </div>
  )
}

export default OneMovie