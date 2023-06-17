import { useState, useEffect } from "react";
const App = () => {
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









  return (
    <div>
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
  )
  }
export default App
