import React from 'react'
import Modal from "./components/Modal";
import data from "./data"
import { useState,useReducer } from "react";

const reducer = (state, action) => {
  /* musi vracat stav */
  console.log(state,action)
  if (action.type === "ADD_MOVIE") {
    const NewMovies = [...state.movies,action.payload]
    return {
      ...state,
      movies:NewMovies,
      showNotification:true,
      notificationContent: "Film bol pridaný"
    }
  }

  if (action.type === "NO_MOVIE_NAME") {
    return {
      ...state, showNotification:true, notificationContent:"zadaj film",
    }
  }

  if (action.type === "CLOSE_NOTIFICATION") {
      return{...state, showNotification:false,
  }
  }
  if (action.type === "REMOVE_MOVIE") {
    const filteredMovies = state.movies.filter((oneMovie) => {
      return oneMovie.id !== action.payload
    })
    return {
      ...state,movies:filteredMovies
    }
}
  return new Error("chyba- žiadna zhoda s action.type")
  //return state
}

const defaultState /*objekt vkuse*/ = {
  movies: [],
  showNotification: false,
  notificationContent: ""
}
  
const App = () => {
 

  const [movieName , setMovieName] = useState("")
  const [state,dispatch] = useReducer(reducer,defaultState)

 const submitForm = (event) =>{
  event.preventDefault()

  if (movieName) {
    const newMovie = {id: new Date().getTime(), name:movieName}
    dispatch({type: "ADD_MOVIE", payload:newMovie})
  }else{
    dispatch({type:"NO_MOVIE_NAME"})
  }

  setMovieName("")
 } 

const closeNotification = () =>{
  dispatch({type: "CLOSE_NOTIFICATION"})
}

  return (
    <section className='form'>
      {state.showNotification && <Modal notifContent={state.notificationContent} closeNotif={closeNotification}/>}
      <form >
        <input type="text" value={movieName} placeholder='Zadaj film' onChange={(e) =>{setMovieName(e.target.value)}} />
        <br />
        <input type="submit" value="Pridať" onClick={submitForm} />
      </form>

      <div>
        {
          state.movies.map((oneMovie)=>{
              return <div className='all-movies' key={oneMovie.id}><p>{oneMovie.name}</p>
                          <button onClick={()=>dispatch({type: "REMOVE_MOVIE", payload:oneMovie.id})}>Zmazať</button>
              </div>
          })
        }
      </div>

    </section>
  )
}

export default App