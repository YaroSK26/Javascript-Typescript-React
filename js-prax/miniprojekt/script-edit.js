let nameID = location.hash.substring(1)
console.log(nameID)
let namess = getSavedNames()

let searchedNames = namess.find(function (oneObject) {
    return oneObject.id === nameID
})

if(searchedNames === undefined){
    location.assign("/index.html")
}
//ukaze na tej druhej stranke to meno co si sklikol
document.querySelector("#editedName").value = searchedNames.firstName
let changingForm = document.querySelector("#changing-form")
changingForm.addEventListener("submit" , function (event) {
    event.preventDefault()

    searchedNames.firstName =  event.target.elements.changingName.value
    
    saveNames(namess) 
})
//pozera na zmenu v  local storage
window.addEventListener("storage" , function (event) {

    if (event.key === "names") {
        names = JSON.parse(event.newValue)
    }

    let searchedNames = namess.find(function (oneObject) {
        return oneObject.id === nameID
    })

    if (searchedNames === undefined) {
        location.assign("/index.html")
    }
    //ukaze na tej druhej stranke to meno co si sklikol
    document.querySelector("#editedName").value = searchedNames.firstName

})

window.addEventListener("storage", function (event) {
    this.location.reload()
})
