// let firstname = "vrushali"
// let lastname = "patil"

// var is a globle variable
//let variable is blocked scope  and not accessible outside the block
// var firstname ="vrushali"
// var lastname = "patil"
// let info = {
//     firstname: "sanjeet",
//     lastname: "wandhare",
//     display: function () {
//         //this --info
//         console.log(`this is my profile ${this.firstname}${this.lastname}`) // sanjeet wandhare

//         function display1() {
//             // this----window---display1 function ka 
//             // scope sirf display method ke andar hai. 
//             // Is function ke andar this keyword window
//             //  ko refer karta hai, kyunki yeh ek normal 
//             // function hai aur iska apna context hota hai,
//             //  jo yahan par global object window hoga.
//             console.log(`this is my profile ${this.firstname}${this.lastname}`)  // undefined undefined
//             // in browser shows in inspect its shows vrushali patil 
//         }
//         display1()
//     }
// }

// info.display()


// program 2
// //var firstName = "sanjeet"
// let person = {
//     firstName: "vrushali",
//     lastName: "patil",
//     age: 24,
//     //method
//     info: function () {
//         console.log(this == person) //true
//         console.log(this.firstName + this.lastName) //vrushalipatil

//         function greeting() {
//             //this==window
//             console.log(this == person) //false
//             // console.log(this==window)//true
//             console.log(`Welcome ${this.firstName}`) //WelcomeUndefined
//         }

//         greeting()
//     }

// }
// console.log(person.info) //print
// person.info()//call

// program 3

var firstName = "vrushali"
let person1 = {
    firstName: "sayali",
    lastName: "jogi",
    age: 25,
    info: function () {
        //console.log(this == person1)//true
        console.log(this.firstName + this.lastName)//mayurikatwe
        // function expression
        let greeting = function () {
            //this==window
            console.log(this == person1)//false
            //console.log(this == window) //true
            console.log(`Welcome ${this.firstName}`) //welcome undefined
        }

        greeting()
    }

}
console.log(person1.info) //print
person1.info()//call



// let firstName="sayali"
// let person = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 25,
//     info: ()=> {
//         console.log(this == person)//false
//         // console.log(this==window)//true   window is not defined
//         console.log(this.firstName + this.lastName)//undefined+undefined=>NaN

//         let greeting = ()=> {
//             console.log(this == person)//false
//             // console.log(this == window) //true
//             console.log(`Welcome ${this.firstName}`)  //welcome undefined
//         }

//         greeting()
//     }

// }
// console.log(person.info) //print
// person.info()//call
