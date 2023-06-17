//string
let firstName="Yaro" 
let job="Madar" 
let age= 30
console.log("ahoj, volám sa " + firstName + " a pracujem ako " + job )

// operacie
let x = age + 5 *2
console.log(x)

// let age=30 , let age=20  , zle to je    if , 5 , !  nemoze byt v premenej


// uloha
student1= 50
student2= 88
student1name= "martin"
student2name="fero"
maxpoints=90

uspesnost1=((student1/maxpoints)*100 )
uspesnost2=((student2/maxpoints)*100)
console.log(student1name + " dosiahol si " + uspesnost1 + " percent")
console.log(student2name + " dosiahol si " + uspesnost2 + " percent")

//boolean  === rovna sa , !== nerovna sa , <= menši alebo rovna , >= vacsi alebo rovna
let madar = 21
let result = madar !== 50
console.log(result)

// podmienka
  if (5>0 )
  {
    console.log("pravda")
  }

// podmenka s else ,   davaj pozor na tie === , premenne v uvodzovkach 
 let age1 = 1
if (age1 > 18)
        {console.log("si dospely")}
   else{console.log("si decko")}


let Priezvisko = "humgad"
if(Priezvisko=== "Hungar"){
    console.log("serus  hungar")
}
else if (Priezvisko=== "Hungary"){
    console.log("Hungary")
}
else if (Priezvisko === "Hungaria"){
    console.log("hungaria")
}
else {
    console.log("madar si")
}


// a zaroven && (pravy alt c )
// alebo || (pravy alt w )
let Serus = "David"
let vyska = 185

if (Serus === "David" && vyska ===185){
  console.log("Je zlodej")
}

//scope  globalni scope (prvni)
//lokalni scope druha - nevypise  , v scopoch sa daju prepisovat premenne

/*let prvi = "text"
if(true){
  console.log(prvi)
  let druha = "text 2 "

}

console.log(druha)*/  


//fukncie 
function pozdrav1(){
  console.log("pozdrav ")
  
}

pozdrav1()
pozdrav1()
//druhy sposob

let pozdrav2 = function(){
  console.log("pozdrav 2 ")
}

pozdrav2()
pozdrav2()

//treti sposob

let pozdrav3 = () => console.log("pozdrav 3 ")

pozdrav3()

//funkcia  parameter a argument
let madariesports = function (number15) /*paramenter*/ {
  resultName= (number15 * number15)
  return resultName
}
let value1 = madariesports(5)
value1 = value1  + 50
console.log(value1)


// ulohy na kontrolu veku
let AdultChecker = function(age2){

  if(age2 >= 18)
{
  let result2 = "dospely"
  return result2
}
else{
  let result2 = "decko"
  return result
 }
}
let value2 = AdultChecker(20)

if(value2 === "dospely"){
  console.log("vysledok kontroly veku: " + value2 )
  console.log("možeš vstúpiť") 
}
else{
  console.log("vysledok kontroly veku: " + value2)
  console.log("nemožeš dnu")
}

//defaultna hodnota
let game = function(nameG = "anonymus" , scoreG = 0){
   return "Meno: " + nameG + " Score: " + scoreG

}
let vysledokG = game("Miro")
console.log(vysledokG)
 
//ulohaa na kod

let Prvecislo = 5
let Druhecislo = 3
let Tretiecislo = 8
let checker = function(a1,b1,c1){
  if (a1 === Prvecislo &&  b1 === Druhecislo && c1 === Tretiecislo){
    console.log("mozes vstupit")
  } else{ console.log("zly kod")
 }
}
checker(5,3,9)
checker(5,3,8)

//template strings

let myName = "harry poter"
let age3 = 15
console.log("serus " + myName + " maš " + age3) 
console.log(`serus ${myName} maš ${age3}`)


//objekty

let myBook = {
   title: "harry potter a kamen mudrcu",
   author: "J. K. Rowlingova",
   published: 1998,
   greet: function () {
     console.log("ahoj")
   }
}
myBook.title = "harry poter a tajomna komnata"
console.log(myBook.title)
myBook.greet()

// uloha s objektom
let resultBook = function (book) {
  if (book.published === 1997 ) {
    console.log("rok je 1997")
  } 
  else{ 
  console.log(`kniha od  ${book.author} z roku ${book.published}`)
}}
resultBook(myBook)

//objekty  a result

let bookINFO = function (book) {
  return {
    basicINFO: `${book.title} od ${book.author}`
  }
}

let resultINFO = bookINFO(myBook)
console.log(resultINFO.basicINFO)

//uloha s objektami a methodami
let skola = {
  type: "gymnazium",
  city: "košice",
  ulica: "poštova",
  capacity: 500,
  open:function () {
    console.log("skola je otvorena")
  },
  closed: function () {
    return "skola je zavreta"
  }
}
console.log(skola.type + " " +  skola.city)
skola.open()
let resultSkola = skola.closed()
console.log(resultSkola)

// objekt this
let clovek = {
  meno: "adam",
  priezvisko:"hudak",
  greet: function () {
    console.log(this.meno)
  }
}
clovek.greet()
//uloha 
vladneNaradenie = true
let school = {
  type: "gymnazium",
  street: "havlickova",
  city: "kosice" , 
  capacity: 500,
  open: function () {
    console.log(`škola ${this.type + " " +this.city} je otvorena`)
  },
  closed: function () {
    console.log(`škola ${this.type + " " +  this.street} je zatvorena`)
  }
} 

if (vladneNaradenie === true) {
   school.open()
}else {
  school.closed()
}
// predpripravane properties  a methody (mdn string)

let Madars = "David"
console.log(Madars.length)//dlžka
console.log(Madars.toUpperCase())//velke pismena
console.log(Madars.toLowerCase())//male pismena

let Jaro = "   brano sa uči javascript"
let word = "jaro"
console.log(Jaro.includes(word))//hladanie slov vo vete
console.log(Jaro.trim())//dava preč biele medzery

//uloha s length a includes
heslo = ("madarko1234")
words = 1234

 if (heslo.length > 13) {
  console.log ("silne heslo")
 }else if (heslo.length > 8 && heslo.length < 13){
  console.log("dobre heslo")
 } else{
  console.log("slabe heslo")
 }

 if (heslo.includes(words)) {
   console.log("heslo nemoze obsahovat 1234")
 } else {
  console.log("heslo je v poriadku")
 }

 //ciselka prednastavne funkcie
 let number = 3.154343
 console.log(number.toFixed(2)) // zaokruhlovanie na desatinne čisla
 console.log(Math.round(number)) //zaokr. na cele
 console.log(Math.floor(number)) //zaokr. dole
 console.log(Math.ceil(number)) // zokr. hore
 console.log(Math.ceil(Math.random() * 10))

//interval
let min = 15
let max = 20
console.log(Math.floor(Math.random() * (max - min + 1 )) + min )


//random uloha -automat
num1 = Math.floor(Math.random() * 6 + 1)
num2 = Math.floor(Math.random() * 6 + 1)
num3 = Math.floor(Math.random() * 6 + 1)
num4 = Math.floor(Math.random() * 6 + 1)
num5 = Math.floor(Math.random() * 6 + 1)
sum = (num1+ num2 + num3 + num4 + num5)
if (sum >= 18 ) {
  console.log("vitaz")
}else {
  console.log("rip")
}
console.log ("celkovy tvoj sucet je " + sum)

//konstanta , vlastnosti v objektu mozes prepisovat
const Konstanta = false 
const personK = {
  ageK:24
}
personK.ageK = 30
//  var (mozes opat vytvorit premenu tu )
var ageV = 30
var ageV = 40

 if(true){
  var numberV = 5
 }
console.log(numberV) // s let byt to neslo lebo neni v tom istom blocku

//ofarbenie textu v konzole
console.log("%ctento text ma farbu :)","color: #db0000; font-weight:bold; background:black;")

//poliaaaaaaaaaaaaaa

let data = [12, "Martin", false , 13.5]
console.log(data[1])

console.log(data.length)
console.log(data[data.length-1])
//prepsanie prvku
let TArray = ["test1", "test2", "test3"]
TArray[0] = "novy prvok v poli"
console.log(TArray)
//pridanie posledneho prvku
let MyArray =  [1,2,3]
MyArray.push(4)
  console.log(MyArray)
//odstranenie posledneho prvku
 MyArray.pop()
 console.log(MyArray)
 //pridanie prvneho prvku
 MyArray.unshift("Nulty")
 console.log(MyArray)
 //odstranenie prveho prvku
 MyArray.shift()
 console.log(MyArray)

 //mdn array , odtranenie z hociakej pozicie
 let secondArray = ["jedna", "dva", "tri"]
 secondArray.splice(1,2) //jedna je poradie , 2 je odstranenie prvkov dalšihch
 console.log(secondArray)

let tretiaArray = ["jedna", "dva", "styri"]
tretiaArray.splice(2,0, "tri")
console.log(tretiaArray)
//otazka na stranke
 let nameP = prompt("zadaj meno ")
console.log(nameP)

//vypisanie pola cez cyklus
let ludia  = ["Madar","madarko", "hungarko"]
ludia.forEach(function(){
  console.log("testujeme")
})

ludia.forEach(function(person , index){
  console.log(index + 1 + ".",person)
})

//cyklus for
for(let i = 0; i <=5; i++ ){
  console.log("testovaci text")
}
//vypis pole cez for

let madarsko = ["hungar","madar","gabor"]

for(let k = 0; k < madarsko.length; k++){
  console.log(madarsko[k])
}
//uloha s for cyklom
toDo = ["video", "pokoj","vysavat"]

for (let i = 0 ;i < toDo.length ; i++){
  console.log(`${i+1}. ${toDo[i]}`)
}

//index of  - polia
let pracovnici = ["ano", "nie", "mozno"]
console.log(pracovnici.indexOf("nie"))
console.log(pracovnici.indexOf("nemozem"))

//pole objektov - indexof nefunguje na pole objektov
let books =  [{
      titles: "harry potter",
      authors: "madari",
      vyšlo: 1997
} , {
  titles: "harry otterovia",
  authors: "nemci",
  vyšlo: 1998
} , {
  titles: "harry otters",
  authors: "polaci",
  vyšlo: 1999
}, {
    titles: "zabijem sa",
    authors: "robim si sranu i",
    vyšlo: 1999

}]

console.log(books[2].titles)

//findIndex fuckcia na poli

let arrayFI = [ 1,2,16,17]
let resultFI = arrayFI.findIndex(function (number) {
   return number > 15 
})
console.log(resultFI)

//findIndex na poli objektov
 resultONEBOOK = books.findIndex(function(OneBook) {
   return OneBook.vyšlo === 1998
})
console.log(resultONEBOOK)

// pole objektov metoda find
let Pole152 = [ 1,2,3,4,5,6]

 let result152 = Pole152.find(function(oneNumber){
  return oneNumber > 4 
})
console.log(result152)


 let result1999 = books.find(function(Bookss){
if(Bookss.vyšlo === 1999){
    return Bookss
}
})
console.log(result1999.authors)

//pole objektov a filtrovanie

let names = ["Jana", "Anna","Navid" ,  "David"]

 let ArrayResult = names.filter(function(JednoMeno){
 let WeTryFind = JednoMeno.toLocaleLowerCase().includes("na")
 return WeTryFind
})

console.log( ArrayResult)

// filtrovanie 1
 let FILTER= books.filter(function(oneBookF){
  let WeTryFind2 = oneBookF.authors.toLocaleLowerCase().includes("i")
  return WeTryFind2
})

FILTER.forEach(function(ZABIJEMSA) {
  console.log(ZABIJEMSA.authors)
})

// filtrovanie 2 - vo viacerých vyhladava
let FILTER2 = books.filter(function (oneBookF) {
  let WeTryFind2 = oneBookF.authors.toLocaleLowerCase().includes("x")
  let WeTryFind3 = oneBookF.titles.toLocaleLowerCase().includes("p")
  return WeTryFind2 || WeTryFind3
})

FILTER2.forEach(function (ZABIJEMSA) {
  console.log(ZABIJEMSA.titles)
  
})
//uloha   na promp
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
  firstName: "Filip",
  secondName: "Modrý",
  birth: 1989,
  licencePlate: "2EP6328",
  address: "Stevardská 38",
  city: "České Budějovice"
}]


let witness = prompt(22)
console.log(witness)

 let vysledokNajdi =criminals.filter(function(sus){
  let najdi = sus.licencePlate.toLowerCase().includes(witness)
  return najdi 
})
vysledokNajdi.forEach(function(sus){
  console.log(`meno:${sus.firstName}`)
  console.log(`priezvisko:${sus.secondName}`)
  console.log(`rok narodenia:${sus.birth}`)
  console.log(`poznavacia znacka:${sus.licencePlate}`)
  console.log(`adresa:${sus.address}`)
  console.log(`mesto:${sus.city}`)
  console.log("----------------")
})

//riadenie pola podla abecedy

Menaa = ["anna" , "cecilia", "barbora"]
Menaa.sort()
console.log(Menaa)

Cislaa = [ 1,8,2,9,52,4]
Cislaa.sort()
console.log(Cislaa)

//riadenie pole objektov

let sortsArrat = function(ArrayBooks){
  ArrayBooks.sort(function(a,b){
    if(a.titles.toLowerCase() < b.titles.toLowerCase()){
       return -1}
     else if (b.titles.toLowerCase() < a.titles.toLowerCase()){ 
          return 1 }
     else {
      return 0
     }
         
  })
}
sortsArrat(books)
console.log(books)



/*const square = function (num) {
    return num * num
}

const square = (num)  => {
    return num * num
}*/


const square = (num) => num * num

console.log(square(5))




const people = [{
  name: "david",
  age: 25
}, {
  name: "jaro",
  age: 15
}]

const less20 = people.filter((onePerson) => onePerson.age < 20)
console.log(less20)

//ternarni operator

const ages = 20
let notification

/*if (age > 18){
    notification = "muzes vstupit"
}else{
    notification = "nemozes vtupit"
}*/

notification = ages > 18 ? "muzes vstupit" : "nemozes vstupit"
console.log(notification)


//falsy - false, 0 , prazny string, null , undefined , NaN
// truthy

const products = []
const product = products[0]
console.log(product)

if (product) {
  console.log("produkt bol najdeny")
} else {
  console.log("produkt nebol najdeny")
}

//coersion 
console.log("5" + 5)
console.log("5" - 5)

const result1 = "5" + 5
const result2 = "5" - 5

console.log(typeof result1)
console.log(typeof result2)

console.log(typeof true + 5)

const result3 = true + 5
console.log(result3)

//chyby

const myFaxes = (income) => {
  if (typeof income === "number") {
    return income * 0.25
  } else {
    throw Error("hihiha ")
  }

}

try {
  const result4 = myFaxes(1000)//daj true 
} catch (e) {
  console.log("hihihha")
}

const result4 = myFaxes(1000)
console.log(result4)

//prakticky 
//localStorage.setItem("age", 30)
let myAge = localStorage.getItem("age")
try {
  console.log(JSON.parse(myAge))
} catch (e) {
  console.log("chyba")
}

console.log("pokracuje")

//strict mod
"use strict"  // musi by na zaciatku subory (teraz nefunguje) , normalne by to nemala vypisat lebo to neni definovane

const ourTest = () => {
  data = "abc"
}
ourTest()
console.log(data)

//cykly
// foreach - prochazi pole
// for - pocet opakovani
// while - pokial  nemusi sa spravit vobec
// do while  vzdy sa spravi  minimalne raz

let i = 20
while (i < 3) {
  console.log(i)
  i++
}

do {
  console.log(i)
  i++
} while (i < 3) //naprv sa riesi podmineka 

//prakticky

let result5
while (result5 != "x") {
  result5 = prompt("heslo je x ")
  console.log(result5)
}