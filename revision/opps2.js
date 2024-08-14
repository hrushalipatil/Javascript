// program 1
class Person {

    firstName = "vrushali"
    lastName = "patil"
    age = 24
    rollNo = 34

}

let A = new Person()
let B = new Person()

console.log(A)
console.log(B)

A.firstName = "Aboli"
A.lastName = "wandhare"
A.age = 23
A.rollNo = 34
console.log(A)

// program 2 
class Person2 {
    constructor(fn,ln,ag,rn){
        this.firstName = fn 
        this.lastName = ln 
        this.age = ag 
        this.rollNo = rn
    }
}
let C = new Person2("chaitali","kadu",34,66)
let D = new Person2("Denis","dudani",34,66)
let E = new Person2("Elis","leoni",27,66)

let students = [C,D,E]
students.forEach(function(el){
    console.log(el.firstName)
    console.log(el.lastName)
    console.log(el.age)
    console.log(el.rollNo)
})


// program 3 
class Person3 {
    setFirstName(fn){
        this.firstName = fn
    }
    getFirstName(){
        console.log(this.firstName)
    }
    
    setLastName(ln){
        this.lastName = ln
    }
    getLastName(){
        console.log(this.lastName)
    }
}

let F = new Person3()
F.setFirstName("falguni")
F.setLastName("sachdev")
console.log(F)

F.getFirstName()
F.getLastName()

