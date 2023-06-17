import questions from "./dataF"
import Question from "./components/Question"
import Example from "./components/Example"
import Movie from "./components/Movie"
import Book from "./components/book"
import AllTasks from "./components/AllTasks"
import DecreaseButton from "./components/DecreaseButton"
import IncreaseButton from "./components/IncreaseButton"
import { useState, useEffect } from "react";
import ResetButton from "./components/ResetButton";
import OneMovieSlider from "./components/OneMovieSlider"
import OneMovieSlider2 from "./components/OneMovieSlider2"



const App =() =>{

  const books = [
    {
      id: 1,
      image: "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/h/harry-potter-a-kamen-mudrcu-9788000061917.jpg.webp",
      title: "Harry Potter a Kámen mudrců"
    },
    {
      id: 2,
      image: "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/333420609/10.jpg.webp",
      title: "Harry Potter a Tajemná komnata"
    },
    {
      id: 3,
      image: "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/h/harry-potter-a-vezen-z-azkabanu-9788000063393.jpg.webp",
      title: "Harry Potter a Vězeň z Azkabanu"
    },
  ]

  const [valueP, setValueP] = useState(0)

  const DecreaseOne = () => {
    const newValue = valueP - 1
    setValue(newValue)
  }


  const IncreaseOne = () => {
    const newValue = valueP + 1
    setValue(newValue)
  }

  const ResetToZero = () => {
    setValueP(0)
  }



  const [value, setValue] = useState(0)
  const [test, setTest] = useState(0)

  useEffect(() => {
    const button = document.querySelector(".btn")
    if (value >= 1) {
      button.textContent = `klik čislo: ${value}`
    } else {
      button.textContent = `klikni`
    }
    { console.log("serus klik") }
  }, [value]/*,[] stusti sa iba raz*/)

  useEffect(() => {
    document.title = `Nový titulok ${test}`
    { console.log("serus titulok") }
  }, [test])








  const [windowSize, setWindowSize] = useState(window.innerWidth)

  const sizeControl = () => {
    setWindowSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", sizeControl)
    return () => {
      window.removeEventListener("resize", sizeControl)
    }
  })









  const [quote, setQuote] = useState("text")
  const url = "https://api.kanye.rest/"
  const getQuote = async () => {
    const response = await fetch(url)
    const data = await response.json()
    const Finalquote = data["quote"]
    setQuote(Finalquote)
  }

  useEffect(() => {
    getQuote()
  }, [])







  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const [urlMap, setUrlMap] = useState("")

  const url2 = "http://api.open-notify.org/iss-now.json"
  const getCoordinates = async () => {
    const response = await fetch(url2)
    const data = await response.json()

    setLatitude(data["iss_position"]["latitude"])
    setLongitude(data["iss_position"]["longitude"])

    const iss_long = (data["iss_position"]["latitude"])
    const iss_lat = (data["iss_position"]["longitude"])
    setUrlMap(`https://sk.mapy.cz/zakladni?x=${iss_long}&y=${iss_lat}&z=10`)
  }
  useEffect(() => {
    getCoordinates()
  }, [])








  return(
    <div>
      <div className="all-books">
        <Book myImage={books[0].image} myTitle={books[0].title} />
        <Book myImage={books[1].image} myTitle={books[1].title} />
        <Book myImage={books[2].image} myTitle={books[2].title} />

      </div>

      <div className="changer">
        <Example />
      </div>


      <div className="all-tasks">
        <AllTasks />
        <div className="counter">
          <h1>Počitadlo</h1>
          <h2>{value}</h2>
          <DecreaseButton decrease={DecreaseOne} />
          <IncreaseButton increase={IncreaseOne} />
          <ResetButton ResetToZero={ResetToZero} />
        </div>
      </div>

      <div className="kanye">
        <p>{value}</p>
        <button className="btn" onClick={() => setValue(value + 1)}> klikni</button>
        <button onClick={() => setTest(test + 1)} className="btn-test"> titulek</button>

        <h1>Sirka okna</h1>
        <h2>{windowSize}</h2>

        <h1>Kanye west</h1>
        <p>{quote}</p>

        <h1>Medzinarodna stanica</h1>
        <h2>zemepisna sirka</h2>
        <p>{latitude}</p>
        <h2>zemepisna dlzka</h2>
        <p>{longitude}</p>
        <a target="_blank" href={urlMap}>Pozica ISS v mapách</a>



      </div>


      <div className="all-questions">{
        questions.map((oneQuestion) => {
          return <Question key={oneQuestion.id} {...oneQuestion} />
        })
      }
      </div>



      <div><Movie /></div>


      <div className="slider">
        <OneMovieSlider />
      </div>

      <div className="slider2">
        <OneMovieSlider2 />
      </div>


    </div>
  )
}
export default App