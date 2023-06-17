console.log("sčrus1")
//oop

class Department {
    name: string
    number: number

    protected employee: string[] = []
    static currentYear: number = 2022

    constructor(na:string , nu:number){
        this.name = na
        this.number = nu
    }
}

 const HRdep = new Department("human resources" , 100)
 const MAdep = new Department("marketing" , 200)
 const FIdep = new Department("finance" , 300)

 console.log(HRdep)
 console.log(MAdep)
 console.log(FIdep)
//staticke metody
console.log(Math.PI )

//  const employee1 = Department1.createEmployee("Ron")
// //  console.log(employee1)




//metody 

class ITDepartment extends Department {
    public mainAdmin: string


    constructor(number: number, public admins: string[]) {
        super("IT", number)
        this.admins = admins
        this.mainAdmin = admins[0]
    }


    // Getter - musí mít return
    get leadAdmin() {
        if (this.mainAdmin) {
            return this.mainAdmin
        }
        throw new Error("Hlavní admin nenalezen")
    }


    // Setter - musíte do něj poslat hodnotu
    set leadAdmin(value: string) {
        if (this.mainAdmin) {
            this.mainAdmin = value
        } else {
            throw new Error("Hlavní admin nenastaven")
        }
    }


    addEmployee(name: string) {
        if (name === "David" || name === "Harry") {
            return "Už mají přístup"
        } else {
            // this.employee.push(name)
        }
    }
}

const frontEndDepartment = new ITDepartment(600, ["David", "Harry"])
console.log(frontEndDepartment.leadAdmin)
frontEndDepartment.leadAdmin = "Hermiona"
console.log(frontEndDepartment.mainAdmin)

//abstrakt class 
 abstract class Department2 {
    name:string
    number: number

    constructor(na:string,num:number){
        this.name = na
        this.number = num
    }

     abstract describe():void 
  //   {     console.log(this.name + " odelenie ma cislo " + this.number )
    // }
}

// const marketing2 = new Department2("Marketing" , 100)
// marketing2.describe()

class ITDepartment2 extends Department2 {
    private static myObject:ITDepartment2

    private constructor (depName:string,depNum:number){
        super(depName,depNum)
    }

    describe(){
        console.log("text")
    }

    static getObject(){
        if(this.myObject){
            return this.myObject
        }
        this.myObject = new ITDepartment2("IT" ,999)
        return this.myObject
    }
}
// const ITdepCzech = new ITDepartment2("czech" , 900)
// ITdepCzech.describe()
const IT= ITDepartment2.getObject()



//interface


interface PersonSerus {
    name: string
    greet(phrase:string) : void //neni tam return -void
}
let person1:PersonSerus 
person1= {
    name: "David",
    greet(myPhrase: string){
        console.log(myPhrase + " " + this.name )
    }
}
person1.greet("cau")
//interface a class
class PersonSerus2 implements PersonSerus  /* , mozu tu byt aj viac interface alebo daj extends*/ {
   readonly name: string// da sa iba jeden pridat, nemali by sme menit
   age?:number//volitelne
   
    constructor(n:string){
        this.name = n 
        
    }
    greet(myPhrase:string){
        console.log(myPhrase + " " + this.name )
    }
}
let person2 = new PersonSerus2("madar")
person2.greet("ahoj ja som ")

interface addFunction {
    (a: number, b: number): number
}
let sum5: addFunction

sum5 = (number1:number, number2:number) =>{
    return number1 + number2
}
const result5 = sum(5,20)