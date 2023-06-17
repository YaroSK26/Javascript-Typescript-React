import { useRef } from "react";

const UseRef = () => {
const refInput = useRef(null)
const refHeading = useRef(null)

const formSubmit = (e) =>{
    e.preventDefault()
    
    refInput.current.style.backgroundColor = "red"
    refInput.current.style.color = "white"
    refHeading.current.style.color = "red" 
    refHeading.current.textContent = "useRef je extrem"
}

  return (
    <div><form action="">
        <h1 ref={refHeading}>UseRef</h1>
                <input type="text" ref={refInput} placeholder="useRef"/><br /> 
                <input type="submit" onClick={formSubmit} />   
        </form>
    </div>
  )
}

export default UseRef