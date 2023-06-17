import "./OneMovieSlider.css"
import data from "../data"
import { useState } from "react";
import {FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"

const OneMovieSlider = ()  =>{
    const [index,setIndex] = useState(0)
    const {image,title,description} = data[index]

    const checkMovieNumber = (movieIndex) =>{
        if (movieIndex  < 0 ) {
            return data.length -1
        } else if (movieIndex > data.length -1 ){
            return 0 
        }else {
            return movieIndex
        }
    }

    const nextMovie = () =>{
        setIndex( (index) => {
            const newIndex = index + 1
            return checkMovieNumber(newIndex)

        })
    } 
    const previous = () => {
        setIndex((index) => {
            const previous = index - 1
            return checkMovieNumber(previous)
        })
    } 

    return (<div className="one-movie">
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={previous}>
            <FaArrowCircleLeft/>
        </button>
        <button onClick={nextMovie}>
            <FaArrowCircleRight />
        </button>
    </div>
    )
}
export default OneMovieSlider