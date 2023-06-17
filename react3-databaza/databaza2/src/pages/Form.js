import { useState } from "react"
import projectFirestore from "../firebase/config"
import "./Form.css"
const Form = () => {
const [movieTitle,setMovieTitle] = useState("")
const [movieAge,setMovieAge] = useState(null)
const [movieTime,setMovieTime] = useState(null)





    const submitForm = async (e) => {
        e.preventDefault()

        const newMovie = { title: movieTitle,
             minage: parseInt(movieAge),
              time: parseInt(movieTime) 
            }


        try {
            await projectFirestore.collection("movies").add(newMovie)
            setMovieTitle("")
            setMovieAge("")
            setMovieTime("")

        } catch (error) {
            console.log(error.message)
        }
    }


  return (
    <section className="form-section">
      <h1>Pridanie filmov</h1>
        <form onSubmit={submitForm}>
            <input className="input" type="text" placeholder="Title" onChange={(e)=> setMovieTitle(e.target.value)}  value={movieTitle}/><br />
              <input className="input" type="number" placeholder="Min age" min="0" onChange={(e) => setMovieAge(e.target.value)} value={movieAge} /><br />
              <input  className="input" type="number" placeholder="Time" min="0" onChange={(e) => setMovieTime(e.target.value)} value={movieTime}/><br />
            <input type="submit" value="Pridať"/>
        </form>
    </section>
  )
}

export default Form