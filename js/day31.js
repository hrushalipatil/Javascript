// constructor 

// object lateral

class Employee {
    constructor(fn, ln) {
        this.firstname = fn,
            this.lastname = ln
    }
}

let a = new Employee("vrushali", "patil")
console.log(a)                              // Employee { firstname: 'vrushali', lastname: 'patil' }

class ListName {
    constructor(names){
        this.names =names
    }
}

class student extends ListName {
    constructor(names,attendance){
        super(names)
        this.attendance =attendance
    }
}
let b= new student("vrushali",56)
console.log(b)                               // student { names: 'vrushali', attendance: 56 }


