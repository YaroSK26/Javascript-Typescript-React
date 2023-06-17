import "./Modal.css"
import { useEffect } from "react"


const Modal = ({ notifContent,closeNotif }) => {
  useEffect (()=>{
    setTimeout(() => {
      closeNotif()
    }, 2000);
    
  })

  return (
<div >
    <div  className="notification">{notifContent }</div>
  
    </div>
  )
}

export default Modal

  /* <p onClick={closeNotif}></p>*/