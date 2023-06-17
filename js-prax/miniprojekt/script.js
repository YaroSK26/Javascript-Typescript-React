//id
!function (r) { if ("object" == typeof exports && "undefined" != typeof module) module.exports = r(); else if ("function" == typeof define && define.amd) define([], r); else { var e; e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.uuidv4 = r() } }(function () { return function r(e, n, t) { function o(f, u) { if (!n[f]) { if (!e[f]) { var a = "function" == typeof require && require; if (!u && a) return a(f, !0); if (i) return i(f, !0); var d = new Error("Cannot find module '" + f + "'"); throw d.code = "MODULE_NOT_FOUND", d } var p = n[f] = { exports: {} }; e[f][0].call(p.exports, function (r) { var n = e[f][1][r]; return o(n ? n : r) }, p, p.exports, r, e, n, t) } return n[f].exports } for (var i = "function" == typeof require && require, f = 0; f < t.length; f++)o(t[f]); return o }({ 1: [function (r, e, n) { function t(r, e) { var n = e || 0, t = o; return t[r[n++]] + t[r[n++]] + t[r[n++]] + t[r[n++]] + "-" + t[r[n++]] + t[r[n++]] + "-" + t[r[n++]] + t[r[n++]] + "-" + t[r[n++]] + t[r[n++]] + "-" + t[r[n++]] + t[r[n++]] + t[r[n++]] + t[r[n++]] + t[r[n++]] + t[r[n++]] } for (var o = [], i = 0; i < 256; ++i)o[i] = (i + 256).toString(16).substr(1); e.exports = t }, {}], 2: [function (r, e, n) { var t = "undefined" != typeof crypto && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && msCrypto.getRandomValues.bind(msCrypto); if (t) { var o = new Uint8Array(16); e.exports = function () { return t(o), o } } else { var i = new Array(16); e.exports = function () { for (var r, e = 0; e < 16; e++)0 === (3 & e) && (r = 4294967296 * Math.random()), i[e] = r >>> ((3 & e) << 3) & 255; return i } } }, {}], 3: [function (r, e, n) { function t(r, e, n) { var t = e && n || 0; "string" == typeof r && (e = "binary" === r ? new Array(16) : null, r = null), r = r || {}; var f = r.random || (r.rng || o)(); if (f[6] = 15 & f[6] | 64, f[8] = 63 & f[8] | 128, e) for (var u = 0; u < 16; ++u)e[t + u] = f[u]; return e || i(f) } var o = r("./lib/rng"), i = r("./lib/bytesToUuid"); e.exports = t }, { "./lib/bytesToUuid": 1, "./lib/rng": 2 }] }, {}, [3])(3) });




//funkcia nacitava data z local storage , osetrenie keby tam nie su
let getSavedNames = function () {
    let myNames = localStorage.getItem("names")


    if (myNames !== null) {
        return JSON.parse(myNames)
    } else {
        return []
    }
}
// funkcia pre pouzitie pri odoslanie formulara , uklada data do local storage

const saveNames = function (oneName) {
    localStorage.setItem("names", JSON.stringify(oneName))

}
//funkcia  ktora generaruje html strukturu  - ktora sa da do stranky po kliknuti , odstranit meno
const htmlStructure = function (oneName) {
    const newDiv = document.createElement("div")
    const newLink = document.createElement("a")
    const newButton = document.createElement("button")

    //nastavenie vymazania -tlacitko
    newButton.textContent = "vymazat meno"
    newDiv.appendChild(newButton)

    newButton.addEventListener("click" , function (event) {
        removeNames(oneName.id)
        saveNames(names)
        toListAgain()
    })
    newLink.textContent = oneName.firstName
    if (oneName.adult === true ) {
        newLink.classList.add("adult")
    }else{
        newLink.classList.add("no-adult")
    }
    newLink.setAttribute("href", `/edit.html#${oneName.id}`)
    newDiv.appendChild(newLink)

    return newDiv


}
//najdenie id a splice odstranenie 

const removeNames = function (id) {
    const index = names.findIndex(function(nameWantToCheck) {
        return nameWantToCheck.id === id 
    })
    

    if (index > -1){
        names.splice(index,1)
    }
}
// pri zmazani mena sa opatovne vypisu z local storage opat na stranku
const toListAgain = function () {
    document.querySelector(".list-names").innerHTML = ""

    let newData = getSavedNames()
    newData.forEach(function (onlyOneName) {
        const newContect = htmlStructure(onlyOneName)
        document.querySelector(".list-names").appendChild(newContect)
    })
}
//konieeeeeeeeccccccc funkciiiiiiiiii









let names = getSavedNames()



let myForm =  document.querySelector("#test-form")
let myCheckox =  document.querySelector(".checkbox")
myForm.addEventListener("submit", function (event) {
    event.preventDefault()


    names.push({
        id: uuidv4(),
        firstName: event.target.elements.firstName.value,
        adult: myCheckox.checked 
    })

    event.target.elements.firstName.value = ""
    myCheckox.checked = false 

    saveNames(names)  

})
//vypisovanie do stranky
let button = document.querySelector(".to-list")
button.addEventListener("click" , function (event) {
    document.querySelector(".list-names").innerHTML = ""
    
    let namesFromStorage = localStorage.getItem("names")
    let namesFromStorageJSON = JSON.parse(namesFromStorage)

   

    namesFromStorageJSON.forEach(function (myName) {
        const oneNameHTML = htmlStructure(myName)
        document.querySelector(".list-names").appendChild(oneNameHTML)
    })

})

window.addEventListener("storage", function (event) {
    this.location.reload()
})
