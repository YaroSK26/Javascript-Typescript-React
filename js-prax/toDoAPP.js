let MyToDos = [{
     text: "vyniesť kôš",
     completion: false
},{
    text: "nakupit",
    completion: false
},{
    text: "upratat izbu",
    completion: false
},{
    text: "nakrmit psa",
    completion: true
},{
    text: "nakrmit macku",
    completion: true
    
}
]





for (let i = 0; i < MyToDos.length; i++) {
        let paragraph2 = document.createElement("p")
        paragraph2.textContent = MyToDos[i].text
        document.querySelector("#idUlohy").appendChild(paragraph2)
}

/*for (let i = 0; i < MyToDos.length; i++){
      let paragraph2 = document.createElement("p")
      if(MyToDos[i].completion === false){
        paragraph2.textContent = MyToDos[i].text
          document.querySelector("main").appendChild(paragraph2)
      }
      
      
}
*/
// nacitavanie dat do premenej
let UlohyFilter = {
    text: ""
}
// nacitavanie dat z input
let UlohyData = document.querySelector("#ulohy")
UlohyData.addEventListener("input" , function(event){
   UlohyFilter.text = event.target.value
    RenderUlohy(MyToDos, UlohyFilter)

    if (UlohyFilter.text === "") {
        document.querySelector("#ulohy").innerHTML = ""
        
    }
})
// filter
const RenderUlohy = function (ourUlohy , UlohyFind) {
    let ArrayUlohy = ourUlohy.filter (function (ulohy1) {
        return ulohy1.text.toLowerCase().includes(UlohyFind.text.toLowerCase())
    })



    //kolko uloch treba spravit
    document.querySelector("#OstavajuceUlohy").innerHTML = ""
    
    

    let LeftUlohy = ArrayUlohy.filter(function(oneToDo){
        return  oneToDo.completion === false 
        
        
    })

    

    

    let paragraph = document.createElement("p")
    paragraph.textContent = `ostava este ${LeftUlohy.length}`
    document.querySelector("#OstavajuceUlohy").appendChild(paragraph)
    


    // vypisovanie uloh do stranky 
    document.querySelector("#idUlohy").innerHTML = ""

    ArrayUlohy.forEach (function (ulohy2) {
        let paragraph = document.createElement("p")
        paragraph.textContent = ulohy2.text

        document.querySelector("#idUlohy").appendChild(paragraph)
    })

    
}





















document.querySelector(".button").addEventListener("click" , function(event){
     event.target.textContent = "hihiha"
})

////komplexna uloha 
let criminals = [{
    firstName: "Martin",
    secondName: "Zelený",
    birth: 1985,
    licencePlate: "85C3322",
    address: "U sloupů 16",
    city: "České Budějovice"
}, {
    firstName: "Jana",
    secondName: "Růžová",
    birth: 1996,
    licencePlate: "93K3922",
    address: "Malská 29",
    city: "České Budějovice"
}, {
    firstName: "Anna",
    secondName: "Modrá",
    birth: 1989,
    licencePlate: "2EP6328",
    address: "Stevardská 38",
    city: "České Budějovice"
}]

//ulozime data z policka
let filters = {
    searchText : ""
}

//filter
const renderCriminals = function (OurCriminals,tryToFind) {
    let ArrayResult = OurCriminals.filter(function (OneSuspect2) {
      return OneSuspect2.licencePlate.toLowerCase().includes(tryToFind.searchText.toLowerCase())  

    })

   document.querySelector("#idCriminal").innerHTML = ""
  
    

    ArrayResult.forEach(function (oneSuspect) {
        let paragraph = document.createElement("p")
        paragraph.innerHTML = `meno: ${oneSuspect.firstName}, <br> priezvisko: ${oneSuspect.secondName} <br> rok narodenia: ${oneSuspect.birth} <br> licence plate: ${oneSuspect.licencePlate} <br> adresa: ${oneSuspect.address} <br> mesto: ${oneSuspect.city}`

        document.querySelector("#idCriminal").appendChild(paragraph)
    })
}
//nacitavanie dat z policka

let licencePlate = document.querySelector("#licence-plate")
licencePlate.addEventListener("input", function(event){
    filters.searchText = event.target.value
    renderCriminals(criminals,filters)

    if (filters.searchText === "") {
        document.querySelector("#idCriminal").innerHTML = ""
    }})



//formulaaaaaaaaaaaaaaaaar

document.querySelector("#test-form").addEventListener("submit" , function (event) {
    //vypneme aby sa formulr znova neneacital
    event.preventDefault()
    //pristup k obsahu inputu
    console.log(event.target.elements.firstName.value)
    //vytvorime odstavec a pridame do nech text
    let paragraphP = document.createElement("p")
    firstName = event.target.elements.firstName.value
    paragraphP.innerHTML = `Meno: ${firstName}`

    document.querySelector("#from-form").appendChild(paragraphP)
    // po odoslani sa vymaze obsah policka
    event.target.elements.firstName.value = ""
})

//checkbox

let myCheckBox = document.querySelector("#my-checkbox")
myCheckBox.addEventListener("change", function (event) {
    console.log(event.target.checked)
})

//uloha checkbox

let myForm = document.querySelector("#my-form")
let Count = 0;
myForm.addEventListener("submit",function (event) {
    event.preventDefault()
    console.log(event.target.elements.task.value)
    

    Count = Count + 1 
    
    let input = document.createElement("input")
    input.type = "checkbox"
    input.id = `test ${Count}`
    document.querySelector("#results").appendChild(input)

    let label = document.createElement("label")
    label.textContent = event.target.elements.task.value
    label.setAttribute("for", `test ${Count}` )
    document.querySelector("#results").appendChild(label)
    console.log(label)
    event.target.elements.task.value = ""

})

//roletka

let MySelect = document.querySelector("#my-select")
MySelect.addEventListener("change", function (event) {
    console.log(event.target.value)
})

//mouseenter , mouseleave , keyup , keydown , keypress , key 
let button = document.querySelector("button")
button.addEventListener("keyup", function (event) {
 console.log(event.key)
    
})


//prepojenie css a js
let heading = document.querySelector("h3")
heading.addEventListener("mouseenter" , function (event) {
    heading.style.color = "blue"
})
heading.addEventListener("mouseleave", function (event) {
    heading.style.color = "green"
    heading.style.fontSize = "30px"
})

//  stvorec pohyb

let stvorec = document.querySelector(".square")
stvorec.style.top  = "10px" 
stvorec.style.left  = "10px"

let newLeft = null;
let newTop = null;

document.querySelector("body").addEventListener("keydown" , function (event) {
    if(event.key === "ArrowLeft"){
        newLeft = newLeft -30
        stvorec.style.left = newLeft + "px"
    } else if (event.key === "ArrowRight"){
        newLeft = newLeft + 30
    stvorec.style.left = newLeft + "px"
    }
    else if (event.key === "ArrowUp") {
        newTop = newTop - 30
        stvorec.style.top = newTop + "px"
    }
    else if (event.key === "ArrowDown") {
        newTop = newTop + 30
        stvorec.style.top = newTop + "px"
    }})

    //get computer style

    let style = getComputedStyle(stvorec)
    console.log(style.background)

    //menenie farby pozadia cez submit


    
    let background = document.querySelector("#my-form")
    let bodyB = document.querySelector("body")

    bodyB.addEventListener("submit" , function (event) {
        event.preventDefault()
        let R= event.target.elements.color1.value 
          let G = event.target.elements.color2.value
         let B =  event.target.elements.color3.value
      
        bodyB.style.backgroundColor = `rgb(${R},${G},${B})`

        event.target.elements.color1.value = ""
        event.target.elements.color2.value = ""
        event.target.elements.color3.value = ""
    })

//scrollovaniee

window.addEventListener("scroll" ,function (event) {
   let scrolled =  window.scrollY
    /*console.log(scrolled)*/
    let scrollable = document.documentElement.scrollHeight - window.innerHeight
    /*console.log(scrollable)*/

    if (Math.ceil(scrolled) === scrollable){
        alert("dostroloval si na koniec")
        
    }
})
//windows scrollTo(100,200) - prva suradnica x druha y  , scrollTo({top: 300, left: 100 , behavior: "smooth"})

let firstItemMenu = document.querySelector(".first-item-menu")
let scrollgoal = document.querySelector(".scroll-goal").offsetTop //pixely od hora 

firstItemMenu.addEventListener("click", function (event) {
    window.scrollTo({
        top: scrollgoal,
        behavior: "smooth"
    })
})