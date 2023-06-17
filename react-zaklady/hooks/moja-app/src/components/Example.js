import "./Example.css"
import { useState } from "react" 

const Example = () =>{
    const [title, setTitle] = useState("moj prvy title")
    const [btn, setButton] = useState("moj prvy title")

    const buttonHandler = () =>{
         
        setTitle("novy text v title")

    }
    const buttonHandler2 = () => {
        setTitle("suress")
    }
    const buttonHandler3 = () => {
        setTitle("")
    }

    const buttonHandler4 = () => {
        setButton(" dobry den")
    }
    return(
    <div className="text-button-changer">
        <h1>{title}</h1>
        <button type="button" onClick={buttonHandler}>Zmenit title</button>
        <button type="button" onClick={buttonHandler2}>Zmenit title2</button>
        <button type="button" onClick={buttonHandler3}>vymazat title</button>
        <button type="button" onClick={buttonHandler4}> {btn}</button>
    </div>
    )
}

export default Example