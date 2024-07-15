// program 1
// Object literal 
let vrushali = {
    firstName:"vrushali",
    lastName :"patil",
    age:12,
    rollNo:23,
    displayName:function(){
        console.log(this.firstName+" "+this.lastName)
    }
}

vrushali.displayName()

let sanjeet = {
    firstName:"sanjeet",
    lastName:"wandhare",
    age:34,
    rollNo:57,
    displayName:function(){
        console.log(this.firstName +" "+this.lastName)
    }

}
sanjeet.displayName()

console.log(sanjeet.firstName)
console.log(sanjeet['firstName'])

sanjeet.firstName = "kabir"
sanjeet['firstName'] = "kabir"


sanjeet.city = "pune"
sanjeet['language']= "hindi"

delete sanjeet.city 
// delete sanjeet['language']


// // program 2
class Employee {
    firstName 
    lastName 
    age 
    roll 

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let C= new Employee()
let D= new Employee()
console.log(C)
console.log(D)

C.firstName = "chaitanya"
C.lastName = "wasnik"
C.age = 55
C.roll = 88
C.city = "pune"
console.log(C)

D.firstName = "denis"
D.lastName = "dudani"
D.age = 56
D.roll = 56


C.displayName()
D.displayName()

// // program 3
// // constructor 

class Person {
    constructor(fn,ln,ag,rn){
        this.firstName = fn 
        this.lastName = ln 
        this.age = ag 
        this.rollNo = rn
    }

    displayName(){
        console.log(this.firstName+ " "+this.lastName)
    }
}
let A = new Person("ashika","dutt",34,55)
let B = new Person("Bilal","nadeem",33,54)
console.log(A)

A.displayName()

B.displayName()

B.city = "pune"
console.log(B)       
// Person {
//     firstName: 'Bilal',
//     lastName: 'nadeem',
//     age: 33,
//     rollNo: 54,
//     city: 'pune'
//   }

console.log(B.firstName)   //Bilal


// program 3

class Clints {

    // properties
    setFirstName(fn){
        this.firstName = fn
    }
    setLastName(ln){
        this.lastName = ln 
    }
    setAge(ag){
        this.age = ag 
    }
    setRollNo(rn){
        this.rollNo = rn
    }

    // method
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let Sonia = new Clints()
console.log(Sonia)    // Clints {}
Sonia.setFirstName("Sonia")
Sonia.setLastName("sachdev")
Sonia.setAge(45)
Sonia.setRollNo(33)
Sonia.displayName()
 