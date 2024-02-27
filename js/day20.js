
let first_name = "chinmay"
let last_name = "deshpande"
let middle_name = `shirish`


console.log(typeof first_name)
console.log(typeof last_name)
console.log(typeof middle_name)

// program 2
// string  stores the value by index

let city = "pune"
// 0   1   2    3
// p   u   n    e
console.log(city[0])
console.log(city[1])
console.log(city[2])
console.log(city[3])

let city2  = "chandrapur"
// 0   1   2   3  4   5  6  7  8  9
// c   h   a   n  d   r  a  p  u  r 

for(let i = 0  ; i < 10 ; i++){
    //console.log(i)
    console.log(city2[i])
}

for(let i = city2.length - 1 ; i >= 0 ; i--){
    console.log(city2[i])
}

// string + string =====> string 
// number + string =====> string 
// string + number =====> string 
// number + number =====> number 

let a = 10 
let b = 5
let c = "hello"

console.log(a+b)
console.log(a+b+c)
console.log(c+a+b)
console.log(c+b+a)

// string + number + number
//"hello"+ "10"  ==> "hello10" + 5 ====> "hello105"

// number + number + string 
//  10    +   5  ====> 15 + "hello" ====> "15hello"
 

// string concatination 

first_name = "chinmay"
last_name = "deshpande"

// My firstName is  chinmay and lastName is deshpande

console.log("My firstName is "+first_name+" and my lastName is "+last_name)
console.log(`My firstName is ${first_name} and  my lastName is ${last_name}`)


// object ---> 
// string object ----- properties and method 


let firstName = "vrushali"

//0  1  2  3  4  5  6   7
//v  r  u  s h  a   l   i
let q1 = firstName.length
console.log(q1)


// toUpperCase()

let first_name2 = "poorva"
let a1 = first_name2.toUpperCase()
console.log(a1)

// toLowerCase()
let last_name2 = "Vyas"
let a2 = last_name2.toLowerCase()
console.log(a2)

// includes()

let fruits = "apple grapes"
let a3 = fruits.includes("l")
let a4 = fruits.includes("z")
console.log(a3)
console.log(a4)

// indexOf()
// 1.arrey:

let months = ["january","february","march","april","may","june","july"]
let a5=months.indexOf("may")
console.log(a5)

// 2.string:

let text = "welcome to the universe."
let A5 = text.indexOf("welcome")
console.log(A5)