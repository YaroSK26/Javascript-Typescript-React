import "./OneMovieSlider2.css"
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"
import data from "../data"
import { useState,useEffect } from "react";

const OneMovieSlider2 = () =>{

const [index,setIndex] = useState(0)

//filmy sa tocia stale to okola
useEffect(()=>{
    if (index < 0 ) {
        setIndex(data.length-1)
    }else if (index > data.length -1){
        setIndex(0)
    }
},[index])

//automaticke posuvanie 
useEffect (() =>{
    let  setInervalId = setInterval(() => {
        setIndex(index+1)
    }, 3000);
    return () => clearInterval(setInervalId)
},[index])


    return (<div className="all-movies">
        <div className="all-movies-content">
                {
                    data.map((oneMovie , oneMovieIndex)=>{
                        const {id,image,title,age,tags,description} = oneMovie

                        let mainClass = "next-slide"
                        if (oneMovieIndex === index) {
                            mainClass = "active-slide"
                        }
                       if (oneMovieIndex === index -1 || (index === 0 && oneMovieIndex === data.length -1)) {
                            mainClass = "last-slide"
                       }

                        return <article key={id} className={mainClass}>
                            <img src={image} alt="" />
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <p>{tags}</p>
                            <p>{age}</p>
                        </article>
                    })
                }
        </div>
        <button onClick={()=> setIndex(index -1)}> <FaArrowCircleLeft/> </button>
        <button onClick={() => setIndex(index + 1)}> <FaArrowCircleRight/></button>
    </div>
    )
}
export default OneMovieSlider2