const  heading = document.getElementById("text")
const speedOr = document.getElementById("speed")
const text = " Yaro vypisuje text"
let idletter = 1
let delay = 500 / speedOr.value 

function printText() {
    heading.innerText = text.slice(0,idletter)
    //zvysi idletter o 1 
    idletter++
    //vyesetuje idletter na 1 a ide to znovu 
    if(idletter > text.length){
        idletter = 1
    }
     //spusti funkciu s delayom
    setTimeout( printText , delay)


    
}

printText()

speedOr.addEventListener("input", function (event) {
    delay = 500 / event.target.value
})





//konzolaaaaaa

function pozdrav() {
        console.log("ahoj")

        setTimeout(pozdrav , 1000)
}
pozdrav()


//vypisovanie z input do odstavca
let input = document.querySelector(".input")
let p = document.querySelector("p")
input.addEventListener("input" , function (event) {
    
    p.textContent = event.target.value
})