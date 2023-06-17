let containerSlider = document.querySelector(".container-slider")
let slideLeft = document.querySelector(".slide-left")
let slideRight = document.querySelector(".slide-right")
let arrowDown = document.querySelector(".arrow-down")
let arrowUp = document.querySelector(".arrow-up")

let slidesLength = slideRight.querySelectorAll("div").length

let numberActiveSlide = 0

slideLeft.style.top = `${-(slidesLength-1)*100}vh`

arrowUp.addEventListener("click" , function() {
    changeSlide("up")
})
arrowDown.addEventListener("click", function() {
    changeSlide("down")
})

function changeSlide(direction) {
    const sliderHeight = containerSlider.clientHeight
     if (direction === "up") {
        numberActiveSlide++
        if (numberActiveSlide > slidesLength -1) {
            numberActiveSlide = 0
        }
     }else {
        numberActiveSlide--
         if (numberActiveSlide < 0) {
             numberActiveSlide = slidesLength -1
         }
     }

     slideRight.style.transform = `translateY(-${numberActiveSlide* sliderHeight }px)`
     slideLeft.style.transform = `translateY(${numberActiveSlide* sliderHeight }px)`
}