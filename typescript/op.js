"use strict";
console.log("sčrus1");
//oop
class Department {
    constructor(na, nu) {
        this.name = na;
        this.number = nu;
    }
}
const HRdep = new Department("human resources", 100);
const MAdep = new Department("marketing", 200);
const FIdep = new Department("finance", 300);
console.log(HRdep);
console.log(MAdep);
console.log(FIdep);
//metody 
class Department2 {
    constructor(depName, number) {
        this.depName = depName;
        this.number = number;
    }
    describe() {
        console.log("odelenie " + this.depName + " ma čislo " + this.number);
    }
}
const HRdep2 = new Department2("serus", 100);
HRdep2.describe();
//ma rovnake somariny ako to department 2 
class ITdepartment extends Department2 {
    constructor(number, admins) {
        super("IT ", number);
        this.admins = admins;
        this.admins = admins;
    }
}
console.log(ITdepartment);
