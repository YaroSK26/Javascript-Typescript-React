/*
//pridanie položky do storage
localStorage.setItem("location", "košice")
localStorage.setItem("location2", "bratislava")
//update polozky
localStorage.setItem("location", "prešov")
//ziskanie polozky
localStorage.getItem("location")
console.log(localStorage.getItem("location"))
//zmazanie polozky
localStorage.removeItem("localion2")
//zmazanie vsetkeho
localStorage.clear()*/


//json
let user = {
    name: "istvan" , 
    age: 27
}
let userJSON = JSON.stringify(user)
localStorage.setItem("user", userJSON)

let userLS = localStorage.getItem("user")
let myUser = JSON.parse(userLS)
console.log(` ahoj ja som ${myUser.name} a mam ${myUser.age} rokov `)

//local storage a formular   -- foreach nefunguje
if (localStorage.getItem('users') == null) {
    var myArray = [];
} else {
    myArray = JSON.parse(localStorage.getItem('users'));
}

let myForm = document.querySelector("#test-form")
myForm.addEventListener("submit", function (event) {
    event.preventDefault()

    myArray.push(event.target.elements.firstName.value)
    myArrayToLS = JSON.stringify(myArray)
    localStorage.setItem("users", myArrayToLS)

    event.target.elements.firstName.value = ""

    let myArrayFromLS = localStorage.getItem("users")
    let myArrayFromLSj = JSON.parse(myArrayFromLS)

    let paragraph = document.createElement("p")
    paragraph.textContent = myArrayFromLSj[myArrayFromLSj.length - 1]
    document.querySelector("#my-users").appendChild(paragraph)
})

let myPresentArray = localStorage.getItem("users")
let myPresentArrayJ = JSON.parse(myPresentArray)

if (myPresentArrayJ !== null) {
    myPresentArrayJ.forEach(function (oneUser) {
        let paragraph = document.createElement("p")
        paragraph.textContent = oneUser
        document.querySelector("#my-users").appendChild(paragraph)
    })
}

//formular 2 - viacej hodnot

let myForms = document.querySelector("#test-form2")

if(localStorage.getItem("criminals") == null){
    var pole = []
}else {
    pole = JSON.parse(localStorage.getItem("criminals"))
}
//odoslanie formularu
myForms.addEventListener("submit" , function (event) {
    event.preventDefault()
    

    pole.push({
        id:"",
        firstName: event.target.elements.meno.value,
        secondName: event.target.elements.priezvisko.value,
        crime: event.target.elements.zlocin.value
    })
    poleJSON = JSON.stringify(pole)
    localStorage.setItem("criminals", poleJSON) 
    
    event.target.elements.meno.value = ""
    event.target.elements.priezvisko.value = ""
    event.target.elements.zlocin.value = ""
})
//vypisovanie do stranky
let toList = document.querySelector(".to-list")
        if (localStorage.getItem("criminals") == null) {

            let paragraph = document.createElement("p")
            paragraph.textContent = "Databáze zločinců je prázdná"
            document.querySelector(".list-criminals").appendChild(paragraph)


    } else {
        
        toList.addEventListener("click", function () {
            let myStorage = localStorage.getItem("criminals")
            let myStorageJSON = JSON.parse(myStorage)

            document.querySelector(".list-criminals").innerHTML = ""

            myStorageJSON.forEach(function (oneCriminal) {
                let paragraph = document.querySelector("p")

                paragraph.innerHTML = `meno: ${oneCriminal.firstName}, <br> priezvisko: ${oneCriminal.secondName} <br> zločin: ${oneCriminal.crime}`
                paragraph.classList.add("basic-styles");
                document.querySelector(".list-criminals").appendChild(paragraph)

                

            })
        })
    }

    //filteeeer

    let filter = document.querySelector(".filter")
    
    let ulozisko = localStorage.getItem("criminals")
    let uloziskoJSON = JSON.parse(ulozisko)

    filter.addEventListener("input" , function (event) {
    let search = event.target.value
    let vysledky = uloziskoJSON.filter(function (oneCriminal) {
         return oneCriminal.firstName.toLowerCase().includes(search.toLowerCase())
    })

    document.querySelector(".filter-name").innerHTML = ""
    document.querySelector(".list-criminals").innerHTML = ""

    

    vysledky.forEach(function (oneCriminal) {
        let paragraph = document.createElement("p")
        paragraph.innerHTML = `Meno: ${oneCriminal.firstName} <br> Priezvisko: ${oneCriminal.secondName} <br> Zlocin: ${oneCriminal.crime} `
        
        document.querySelector(".filter-name").appendChild(paragraph)
        
            if (search === "") {
              paragraph.innerHTML = ""
            }
          
    })
        
    })
 

    

