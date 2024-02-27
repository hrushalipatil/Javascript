
// number as parameter and number as return type 

// A
// function add(A,B){
//     return A+B
// }
// let C = add(12,12)
// console.log(C)                // 24
// console.log(typeof C)         // number

// B
// function sub(a,b){
//     return a-b
// }
// let c = sub(12,1)
// console.log(c)        // 11

// // string as parameter and string as return type

// //A
// function string(Entersomething){
//     return "hello " + Entersomething
// }
// let D = string("world")
// console.log(D)                 // hello world


// //B
// function string(enter){
//     return "hi" +"  " + enter
// }
// let d=console.log(string ("guys !!!"))
// console.log(d)

// // boolean as parameter and boolean as return type 

// A

// function can_drive(age,vehicleavalible){
//     if(age>=18 && vehicleavalible){
//         return true
//     }
//     else {
//         return false
//     }
// }
// let E = can_drive(18,true)
// console.log(E)     //true

// let e = can_drive(7,true)
// console.log(e)     //false

// let Ee = can_drive(18,false)
// console.log(E)     //true

// Example usage: A-some

// let myArray = [1, 3, 5, 7, 2, 9]
// function EvenNumbers(arrey) {
//     return arrey.some(num => num % 2 === 0)
//   }
// let even = EvenNumbers(myArray);
// console.log(even) // Output will be true


// Example usage: B-filter
// let array = [1, 3, 5, 7, 2, 9]
// function even_number(arr){
//     let evenNumbers = arr.filter(num=>num%2 ===0)
//     return even_number.length>0
// }
// let x = even_number(array)
// console.log(x)  //  // Output will be true

// Example usage: C-every
// let listt =[1, 3, 5, 7, 2, 9]
// function myarr(arr){
//     return arr.every(num=>num % 2 !==1)
// }
// let y= myarr(listt)
// console.log(y)


// function containsEvenNumbers(arr) {
//     return arr.every(num => num % 2 !== 1)
//   }
  
//   // Example usage:
//   const myArray = [1, 3, 5, 7, 2, 9];
//   const hasEvenNumbers = containsEvenNumbers(myArray)
//   console.log(hasEvenNumbers); // Output will be true




// // arrey as parameter and array as return type

// let fruits= ["banana","mango","apple","kiwi"]

// function add_fruits(list,element){
//     list.push(element)
//     return list
// }

// let F = add_fruits(fruits,"pineapple")
// console.log(F)    //[ 'banana', 'mango', 'apple', 'kiwi', 'pineapple']


// // object as parameter and object as return type

// let Names ={
//     firstName : "vrushali",
//     lastName : "patil"
// }

// // dot notation and bracket notation:
// function addLanguage(object,language){
//     object.language = language
//     return object
// }
// let G = addLanguage(Names,"manathi")
// console.log(G)


// // map as parameter and map as return type 
// //map function is commonly used to transform elements in an array
// let num = [1, 2, 3, 4, 5]

// function doubleNumber(num) {
//   return num * 2
// }

// let A = num.map(doubleNumber)

// console.log(A)// Output: [2, 4, 6, 8, 10]

// // // set as parameter and set as return type 
// // function union(set1, set2) {
// //     return new Set([set1, set2])
// //   }
  
// //   let setA = new Set([1, 2, 3])
// //   let setB = new Set([2, 3, 4])
  
// //   let unionSet = union(setA, setB)
  
// //   console.log(unionSet) // Output: Set { 1, 2, 3, 4 }




// // Returning a function that adds two numbers:

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // Filtering function to get even numbers
// function isEven(number) {
//   return number % 2 === 0
// }

// // Use the filter method to filter even numbers
// let evenNumbers = numbers.filter(isEven)

// console.log(evenNumbers)    // [ 2, 4, 6, 8, 10 ]

// array as parameter and array as return type 
// names = ["kabir","sanjeet","shruti","akash"]

// function addname(list,element){
//     list.push(element)
//     return list
// }
// let P= addname(names,"vrushali")
// console.log(P)

//------------arrow function---------------
// array as parameter and array as return type 

names = ["kabir","sanjeet","shruti","akash"]

// arrow function
 let addnames = (list,Element) =>{
    list.push(Element)
    return list
 }

 let P = addnames(names, "vrushali")
 console.log(P)



// object as parameter as a return type:
let info ={
    firstname : "vrushali",
    lastname :"patil",

}
// dot notation and bracket notation 
// function addLanguage(object,language){
//     object.language = language
//     return object
// }

// let Q = addLanguage(info,"marathi")
// console.log(Q)   //{ firstname: 'vrushali', lastname: 'patil', language: 'marathi' } 


// bracket notation :
function addLanguage(object,language){
    object["language"] = language // Using bracket notation
    return object
}

let Q = addLanguage(info,"english")
console.log(Q) 


// arrow function----and dot noation

let list = {
    flower : "sunflower",
    color: "pink",
    city :"nagpur"

}
let addnewlist = (object,name) => {
    object["name"]= name
    return object
}
let R = addnewlist(list , "Vrushali")
console.log(R)  
                /*{ flower: 'sunflower',
                    color: 'pink',
                    city: 'nagpur',
                    name: 'Vrushali'} */
                                  
                    
// set as parameter and set as return type 
let originalSet = new Set(["apple", "banana", "cherry"])
let addValueToSet = (set, value) => {
         set.add(value)
         return set
};

let updatedSet = addValueToSet(originalSet, "date")
console.log(updatedSet)



// map as parameter and map as return type : 
















  

































