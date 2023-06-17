import AllTasks from "./components/AllTasks"
import DecreaseButton from "./components/DecreaseButton"
import IncreaseButton from "./components/IncreaseButton"
import { useState } from "react";
import ResetButton from "./components/ResetButton";

const App = () => {
  const [value , setValue] = useState(0) 

  const DecreaseOne = () =>{
    const newValue = value -1
    setValue(newValue)
  }

  
  const IncreaseOne = () => {
    const newValue = value + 1
    setValue(newValue)
  }

  const ResetToZero = () => {
    setValue(0)
  }

  return (
    <div className="all-tasks">
    <AllTasks/>
    <div className="counter">
    <h1>Počitadlo</h1>
    <h2>{value}</h2>
    <DecreaseButton decrease={DecreaseOne}/>
    <IncreaseButton increase={IncreaseOne}/>
    <ResetButton ResetToZero={ResetToZero}/>
      </div>
    </div>
  )
}
export default App