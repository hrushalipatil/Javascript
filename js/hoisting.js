// program 1

// var x=10
// console.log(x)     // 10

// program 2

console.log(x)      //undefined 
var x = 100      
console.log(x)      //100

// During the hoisting process, the JavaScript interpreter moves the variable declaration (var x;) to the top of the current scope. However, 
// the assignment (x = 100;) remains in place.


// execution steps 
var x 
console.log(x)
x = 100
console.log(x)

console.log(x)
let x = 10 
console.log(x)

// program 3

sayHello()
function sayHello(){
    console.log("hello")
}

sayHello2()
var sayHello2 = function(){
    console.log("hello")
}

// program 4
var myFunction = "bye"
function myFunction(){
    console.log("hello")
}
console.log(typeof myFunction)

// program 5 
console.log(a) //
console.log(b) //

var a = 10;
let b = 2;


// program 6 
function outer(){
    //var inner;
    console.log(inner) // undefined
    if(true){
        var inner = "inner variable"
    }
    console.log(inner) // "inner variable"
} 
outer()


