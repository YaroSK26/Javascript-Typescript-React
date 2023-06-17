import "./LoremIpsum.css"
import data from "../data"
import { useState } from "react";


function LoremIpsum() {

    const[count,setCount] = useState(0)
    const [paragraph, setParagraph] = useState([])

    const submitForm2 = (event) =>{
        event.preventDefault()
        let amount = parseInt(count)

        if (amount < 0 ) {
            amount = 1
        }else if (amount > 5 ){
            amount = 5 
        }

        setParagraph(data.slice(0,amount))
    }


  return (
    <div>
        <h2 className="h2">LoremIpsum Generator</h2>
        <form action="">
        <label htmlFor="inputNumber">Odstavce:</label>
        <input type="number" id="inputNumber" placeholder="Cislo" onChange={(e)=>{setCount(e.target.value)}} /><br/>
        <input type="submit" value="Generuj" onClick={submitForm2} />
          </form>

    <article>
        {paragraph.map((oneParagraph , index)=>{
            return <p  key={index} className="p">{oneParagraph}</p>
        })}
    </article>

    </div>
  )
}

export default LoremIpsum
