
//               0        1          2         3        4
let names = ["vrushali","darsh","chaitanya","satish","kabir"]

// Array stores the value by index
 console.log(names[0])

for(let i = 0 ; i < 5 ; i++){ // 1 // 2 // 3 // 4 // 5
    // console.log(i) // 0 // 1 // 2 // 3 // 4
    console.log(names[i])
}


// program 2

//           0        1         2        3
let city = ["pune","mumbai","banglore","nagpur"]
console.log(city.length)
let x = city.length
console.log(x)

console.log(city[0])
console.log(city[city.length-1])

// length-1 is always the last index

//                0          1        2        3      4        5
let flowers = ["jasmine","sunflower","lily","rose","lotus","hibicious"]

for (let i=0;i<flowers.length;i++){
    console.log(flowers[i])
}

for(let i = flowers.length -1 ; i >= 0 ; i--){
    //console.log(i)
    console.log(flowers[i])
}


// push()

// action - add the element at last of array
// new lenth of array 

let cities = ["karachi","lahore","delhi","banglore"]
let A = cities.push("wardha")
console.log(cities)
console.log(A)

// // unshift()
// action - add the element at start if array
// return - new length of array
let B= cities.unshift("pune")
console.log(B)
console.log(cities)

// pop()
// action - removes the last element 
// return - same element

let vegetables = ["beans","cabbage","carrot","potato","tomato"]
let C = vegetables.pop()
console.log(C)
console.log(vegetables)

// // shift()
// action - removes the firstName element 
// return - return same element

let D = vegetables.shift()
console.log(D)
console.log(vegetables)

// // includes()
// action - search for element
// it found return true , false 

let cities2= ["goa","banglore","delhi","mumbaii","kolkata","hydrabad"]
let E = cities2.includes('goa')
console.log(E)


