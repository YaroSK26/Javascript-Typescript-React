

//Pravidla pro tvorbu komponenty

// komponenta je funkcia
// komponenta má stejný název jako je název souboru
// komponenta obsahuje return
// na konci souboru musí být řádek s exportem
// v return musí něco být
//return moze vratit iba 1 tag

import "./book.css"
import OrderButton from "./OrderButton" 

const Book = (props) => {
    return (
    <div className="oneBook">
            <h2 className="main-heading">{props.myTitle}</h2>
        <img src={props.myImage} alt="" />
        <p>serus</p>
        <OrderButton />
    </div>
    )
}


export default Book