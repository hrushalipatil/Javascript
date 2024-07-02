
// destructor


// destructor : arrey
// names=['aboli','apeksha','vedant','darsh']
// let[n1,n2,n3,n4]=names
// console.log(n1)   // aboli

// // destructor : object
// let info={
//     name:'aboli',
//     age:20,
//     city:'pune'
// }

// let {name:n,age:a,city:c}=info
// console.log(info)   // { name: 'aboli', age: 20, city: 'pune' }

// console.log(n)     // aboli
// console.log(a)     // 20
// console.log(c)     // pune

// ------------------------------------------------------------------------


// spread and rest operator


// spread operator : arrey

// let names = ["aboli","apeksha","vedant","darsh"]

// let n = [...names,"harsh"]

// console.log(n)         // [ 'aboli', 'apeksha', 'vedant', 'darsh', 'harsh' ]
// console.log(names)    // [ 'aboli', 'apeksha', 'vedant', 'darsh' ]


// // spread operator : object

// let info={
//     name:'aboli',
//     age:20,
//     city:'pune'
// }

// let i= {...info , id:'1'}
// console.log(i)         // { name: 'aboli', age: 20, city: 'pune', id: '1' }
// console.log(info)     // { name: 'aboli', age: 20, city: 'pune'}

// // rest operator

// fruits =['apple','banana','papaya','kiwi']

// let [x2, ...x] =fruits
// console.log(x)          // [ 'banana', 'papaya', 'kiwi' ]
// console.log(x2)         // apple


// let info1={
//     name:'aboli',
//     age:20,
//     city:'pune'
// }

// let {name,...x4}=info1
// console.log(name)     // aboli
// console.log(x4)      // { age: 20, city: 'pune' }

//--------------------------------------------------------------------------------------

// let numbers = [11, 22, 33, 44, 55]
// function addThree(a, b, c) {
//     console.log(a + b + c)
// }
// //addThree(numbers[0],numbers[1],numbers[2])
// addThree(...numbers)    // 66

// -------------------------------------------------------------------------------

// rest 
function addAll(...arr) {
    console.log(arr)
    return arr.reduce(function (acc, el) {
        return acc + el
    }, 0)
}
let add = addAll(11, 22, 33, 44, 55, 66, 77, 88, 99)
console.log(add)    // 495

// // Using the function with the spread operator
// let add2= [11, 22, 33, 44, 55, 66, 77, 88, 99];
// add1 = addAll(...add2);
// console.log(add1); // Output: 495

let info3 = {
    name: 'aboli',
    age: 20,
    city: 'pune'

}

//rest
let { city, ...R1 } = info3
console.log(city)            // pune
console.log(R1)             // { name: 'aboli', age: 20 }

//spread
let R2 = { ...info3 ,id:"34"}
console.log(R2)             // { name: 'aboli', age: 20, city: 'pune', id: '34' }


 
// ========================================================
// rest operator
function collectIntoArray(...elements) {
    return elements;
}

const array = collectIntoArray(1, 2, 3, 4, 5);
console.log(array); // Output: [1, 2, 3, 4, 5]

// spread operator
function printElements(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}

const array1 = [1, 2, 3, 4, 5];
printElements(...array1, 6); // Output: 1 2 3 4 5 6
// =======================================================-



//template literals
let firstN  = "vrushali"
let lastN = "patil"
console.log(`My firstName is ${firstN} and lastName is ${lastN}`)

let season = 'summer'

console.log(`my current city is ${season === "winter"?"pune":"nagpur"}`)

console.log((`${9+9}`))  // string
console.log(9+9)       // number



let a = 10 
let b = 5

if(a > b){
    console.log("a is greater")
}
else {
    console.log("b is greater")
}
a > b ? console.log("a is greater"):console.log("b is greater")

// ============================================================================
// function declaration 

function additionA(x,y){
    return x + y
}
additionA(12,3)

// function expression 

let additionB = function(x,y){
    return x + y
}

// arrow funcion
let additionC = (x,y)=>{
    return x + y
}
let additionD = (x,y) => x + y


let numbers = [11,22,33,44,55,66,77]
console.log(numbers.map(el=>el+10))


// this keyword 

// windoww
var firstName = "abolii"
var lastName = "wandhare"

let info = {
    firstName:"vrushalii",
    lastName:"patil",
    displayName:function(){
        // this  ====> info
        console.log(this.firstName + this.lastName)
        let displayName2 = function(){
            // this ==>  window
            console.log(this.firstName + this.lastName)
        }
        displayName2()
    }
}

info.displayName()  // vrushaliipatil    aboliiwandhare




let info1 = {
    firstName:"kabir",
    lastName:"wandhare",
    displayName:function(){
        // this  ====> info
        console.log(this.firstName + this.lastName)  // kabirwandhare
        let displayName2 =function() {
            // this ==>  window
            console.log(this.firstName + this.lastName)  // aboliiwandhare
        }
        displayName2()
    }
}

info1.displayName()    
 
// this ---> window
let info2 = {
    firstName:"sayali",
    lastName:"jogi",
    displayName:()=>{
        // this -----> window
        console.log(this.firstName + this.lastName)
        let displayName2 = ()=>{
            // this -----> window
            console.log(this.firstName + this.lastName)
        }
        displayName2()
    }
}

info2.displayName()   // aboliiwandhare  aboliiwandhare


 