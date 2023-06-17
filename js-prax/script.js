//query selector,  da s aj classu (".nieco")
let text = document.querySelector("h1")
console.log(text)

//query selector all
let allP = document.querySelectorAll("p")
console.log(allP)
console.log(allP[0])

//get elements by className , s id to iste 
let MyClass = document.getElementsByClassName("odkaz")
console.log(MyClass[0])


//opakovanie selectorov  testContent  - iba text , prevencia proti  hackerskym utokom  ,  innerText - iba text , InnerHTML - aj tagy vypise

// vyber h1 a  napis do konzoly obsah h1
let heading = document.querySelector("h1")
console.log(heading.textContent)
//vyber odstavec s id a vypis do konzoly
let paragraph = document.querySelector("#test2")
console.log(paragraph.textContent)
//vyber vsetky nadpisy a vypis  do konzoly
let paragraphs = document.querySelectorAll("h2")
console.log(paragraphs[0].innerText)
console.log(paragraphs[1].innerHTML)
//vypis odstavce pomocou class name cezc query all
let MyParagraphs = document.querySelectorAll(".test1")
console.log(MyParagraphs[0].textContent)
console.log(MyParagraphs[1].textContent)
//vypis odstavce pomocou class name cez  get elements
let OtherParagraphs = document.getElementsByClassName("test1")
console.log(OtherParagraphs)
//vypis cez get id odstavec s id 
let ID = document.getElementById("test2")
console.log(ID.textContent)

heading.textContent = "novy nadpis javascript"



//vyberanie odstavcov pomocov foreach

let foreachParagraphs = document.querySelectorAll("p")

foreachParagraphs.forEach(function(oneParagraph){
    console.log(oneParagraph.textContent)
})

//uloha ked je tam slovo nakrmit zmaze paragraphy

let p = document.querySelectorAll("p")
p.forEach(function(pF){
   if (pF.textContent.toLowerCase().includes("nakrmit")){
        pF.remove()
   }
})

//pridavanie prvkov napriklad do header

const newParagraph = document.createElement("p")
newParagraph.textContent = "text do noveho odstavca"
document.querySelector("header").appendChild(newParagraph)

const newDiv= document.createElement("div")
document.querySelector("header").appendChild(newDiv)

const secondP = document.createElement("p")
secondP.textContent = "test text do divu "
newDiv.appendChild(secondP)

secondP.prepend("stary text")
secondP.append("novy text")


//click interactions , call back function 

document.querySelector(".button").addEventListener("click", function (event){
    console.log(event.target.textContent = "klikol si")
    console.log(event.altKey)
    

})

document.querySelector("h3").addEventListener("click", function (event) {
    event.target.textContent = "hahaha"
})
//da sa aj miesto input dat change co az finalnu znemu
let input = document.querySelector("#input-text")
    input.addEventListener("input", function(event){
        console.log(event.target.value)

    })





