// object literal

// let vrushali = {
//     firstname : "vrushali",
//     lastname: "patil",
//     age: 23,
//     rollnumber: 12,
//     display:function(){
//         console.log(this.firstname + this.lastname)
//     }
// }

// vrushali.display()


// program 2

function Info(fn,ln,ag,rn){
    this.firstname = fn
    this.lastname = ln
    this.age = ag
    this.rn = rn
    this.display=function(){
        console.log(this.firstname+this.lastname)
    }
}

let Vrushali= new Info("vrushali","patil",32,23)

let Kabir = new Info("kabir","wandhare",26,10)

console.log(Vrushali)
console.log(Kabir)

// Info.display()  // Info.display is not a function


Info.prototype.display = function(){
    console.log(this.firstname+this.lastname)
}

console.log(Vrushali instanceof Info) // true 

console.log(Kabir instanceof Info)   // true


// Vrushali.display()   // vrushalipatil

// ===============================================

// Every object has one _proto_ === Parent.protype

console.log(Vrushali.__proto__ === Info.prototype) // true


// program 3
let names = ["vrushali","kabir","sayali","samir"]
console.log(names)

names.push("sanjeeet") // after push we still show the [ 'vrushali', 'kabir', 'sayali', 'samir' ]


console.log(names.__proto__ === Array.prototype)  // true

Array.prototype.hello = function(){
    console.log("hi vrushali hello")
}

names.hello()

console.log(names instanceof Array)  // true 

// // program 3

function Vehicle(cl, ty){
    this.color = cl
    this.type = ty
   // this.country = "India"
    this.displayColor = function(){
        console.log(this.color)
    }
}

let maruti = new Vehicle("red","sedane")
let audi = new Vehicle("blue","SUV")

console.log(maruti)
console.log(audi)

Vehicle.prototype.country = "India"
console.log(maruti.country)
console.log(audi.country)
console.log(audi.hasOwnProperty('color'))
console.log(audi.hasOwnProperty('country'))

// // Es6 class

class Info1 {
    constructor(fn, ln, rn, age) {
        this.firstName = fn
        this.lastName = ln
        this.rollNo = rn
        this.age = age

    }
    display() {
        console.log(this.firstName + this.lastName)
    }
}
let vrushali1 = new Info1("vrushali", "patil", 23, 45)
let kabir1 = new Info1("kabir", "wandhare", 23, 45)

console.log(vrushali1)
console.log(kabir1)

vrushali1.display()
kabir1.display()

// // Object.create()

let obj = {
    init:function(fn,ln,ag,roll){
        this.firstName = fn
        this.lastName = ln 
        this.age = ag 
        this.roll = roll
    },
    display:function(){
        console.log(`Hey, my name is ${this.firstName} and my surname is ${this.lastName}`)
    }
}

let vrushali2 = Object.create(obj)
console.log(vrushali2)
vrushali2.init("vrushali2","patil2",35,66)
console.log(vrushali2)
vrushali2.display()


