// set and get 

// object literal 

let vrushali = {
    firstName:"vrushali",
    lastName:"patil",
    rollNo:34,
    skills:["python","html","css","javascript"],
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}
vrushali.displayName()

let kabir = {
    firstName:"kabir",
    lastName:"wandhare",
    rollNo:33,
    skills:["python","html","css","javascript"],
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}
kabir.displayName()

// Template 

class Person {
    firstName
    lastName
    age 
    roll
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let Vru = new Person()
console.log(Vru)
Vru.firstName = "Vrushali"
Vru.lastName = "wandhare"
Vru.age = 44
Vru.roll = 56
Vru.displayName()


class Clint {
    constructor(Firstname,Lastname,Age,rollNo){
        this.firstName = Firstname 
        this.lastName = Lastname 
        this.ag = Age 
        this.roll = rollNo
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let A = new Clint("Alia","Bhaat",45,66)
A.displayName()

class Clint2 {
    setFirtName(fn){
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
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let B = new Clint2()
console.log(B)
B.setFirtName("Babita")
B.setLastName("Iyar")
B.setAge(34)
B.setRollNo(32)
B.displayName()



// set and get keyword

let info = {
    firstName:"Vrushali",
    lastName:"patil"
}

console.log(info.firstName)
console.log(info.lastName)
info.city = "pune"
console.log(info)

// set and get
class Clint3{

    set firstName(fn){
        this.first_name = fn
    }
    get firstName(){
        return this.first_name
    }

    set lastName(ln){
        this.last_name = ln
    }
    get lastName(){
        return this.last_name
    }

    set rollNo(rn){
        this.roll_no = rn
    }
    get rollNo(){
        return this.roll_no
    }

    set Age(ag){
        this.age = ag
    }
    get Age(){
        return this.age
    }


    displayName(){
        console.log(this.first_name + this.last_name)
    }

}

let C = new Clint3()
console.log(C)         // Clint3 {}

C.firstName = "shweta"
C.lastName = "chandani"
C.Age = 24
C.rollNo = "---"

console.log(C.firstName)    //shweta
console.log(C.lastName)     //chandani
console.log(C.Age)          //24
console.log(C.rollNo)       // ---

console.log(C.firstName)   //shweta
console.log(C)
// Clint3 {
//     first_name: 'shweta',
//     last_name: 'chandani',
//     age: 24,
//     roll_no: '---'
//   }