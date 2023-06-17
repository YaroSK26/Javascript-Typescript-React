//   cd  C:\Users\W10SK\Desktop\baroslav-jarabas\.vscode\javascript\typescript  , tsc -w script.ts

console.log("yaroo")


function soucet(num1:number, num2:number) {
    return num1 + num2
}

const vysledok = soucet(5,3)
console.log(vysledok)

//zakladni typy 
/*
number = 3, 2,1 -5
string = "string" `string`
boolean = true , false 
*/ 
const myName: string = "Yaro"
const myAge = 16
const adult: boolean = false

//nemusi tam byt to :number , on si to domysli 

const person = {
    name: "David",
    age: 15,
    hobbies: ["sports" , "chess"]
}
console.log(person.name)

//polia
let employees: any[]

employees = ["madar" , "harry" , true , 3]
for (const oneEmployee of employees){
    console.log(oneEmployee)
}
//tuples- pole s fixnou dlzkou
const array:string[] = ["hungar" , "brnao"]
const tuples:[string,number] = ["madarko", 10]

//enum
enum Role {
    ADMIN = 5,AUTHOR , READ_ONLY
}
const clovek = {
    vek:  15,
    meno1: "parada",
    role: Role.ADMIN
}

console.log(clovek.role)

if(clovek.role === 5 ){
    console.log("prava admina")
}

//any
const myArray:any[] = [true , 5 ,"hovno"]
//union type
 
function combination(input1: number | string, input2: number | string) {
    let result: number |string
    if (typeof(input1) === "number" && typeof(input2) === "number") {
        result = input1 + input2
        return result
    }else
        result = input1.toString() + input2.toString()
        return result
    
}
console.log(combination(5,6))
console.log(combination("a","b"))

//literal type 

function combination2(input1: number | string, input2: number | string , resultType: "as-number" | "as-text") {
    let result: number | string
    if (typeof (input1) === "number" && typeof (input2) === "number" || resultType === "as-number") {
        result = +input1 + +input2
        return result
    } else
        result = input1.toString() + input2.toString()
    return result

    // if (resultType === "as-number") {
    //     result = +result
    //     return result
    // }else {
    //     return result.toString()
    // }

}
// console.log(combination(5, 6, "as-number"))
// console.log(combination("a", "b" , "as-text"))
// console.log(combination("10", "8" , "as-number"))

//ma napisat 18 napriklad lebo moja podmienka prebyje to co ts chce

//type alias , custom type
type Combination  = string | number 
type Combination2  = "string" | "number" 
let resultC: Combination

//return a void

function sum(n1:number,n2:number):number {
    return n1 + n2
}
function sum2(n1: number, n2: number):string {
    return n1.toString() + n2.toString()
}
function writeResult(num:number) {
    console.log("result: " + num)
}
writeResult(30)

//funkcia ako typ

function sum3(num1:number , num2:number):number {
    return num1 + num2
}
//lepsia ako myFunction:function , lebo to viac špecifikujes
let myFunction: (x:number , y:number) => number
myFunction = sum
console.log(myFunction(10,40))

//call back funkcia

const y = (cislo:number) => console.log(cislo)
y(10) 

function g(n1:number, n2:number , callBackFun: (n3:number) => void) {
     const result = n1 + n2
     callBackFun(result)
}
g(5,30 ,(x) => console.log(x))

//unknown type , musi tam byt kontrola
let test:unknown
let result: string
test = 5
test = "b"
if (typeof test === "string") {
    result = test
}

// Default parameters
let mySum = (n1: number, n2: number = 3) => n1 + n2
console.log(mySum(5))


//never type  , nikdy nebude return, nekonecny cyklus 

// function generateError(errorText:String,errorNumber:number):never {
//     throw{message: errorText , errorCode: errorNumber}   
// }
// generateError("chyba" , 688)


// Spread operator
const hobbies = ["teaching", "reading", "cinema"]
const activeHobbies = ["running"]


// activeHobbies.push(hobbies)
// activeHobbies.push(hobbies[0], hobbies[1], hobbies[2])
activeHobbies.push(...hobbies)


console.log(activeHobbies)



// Rest parameters
const sum4 = (...myNumber: number[]) => {
    return myNumber.reduce((result, value) => {
        return result + value
    })
}


console.log(sum4(5, 3, 5))
console.log(sum4(10, 3, 4, 2, 4.2, 10))


// Array destructuring
const employeesA: string[] = ["David", "Harry", "Hermiona", "Ron"]


const [employee1, employee2, ...otherEmployees] = employees


console.log(employee1)
console.log(employee2)
console.log(otherEmployees)
console.log(employeesA)


// Object destructuring
// const person2 = {
//     firstName2: "David",
//     age: 34,
//     hobby: "teaching"
// }

// const {firstName2, age } = person


// console.log(firstName2)
// console.log(age)
