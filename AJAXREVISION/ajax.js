//program A   

// function add1(){
//     console.log("I am add one function")
// }

// function add2(){
//     console.log("I am add two function")
// }


// add1()//I am add one function
// add2()//I am add two function

//program B

//setTimout()

//asynch
// function add3(){
//     setTimeout(function(){
//         console.log("I am add three function")
//     },2000)
// }
// function add4(){
//     console.log("I am add four function")

// }
//  add3()
//  add4()


// //  program 4
// //asynch => synch

// function getUser(){
//     setTimeout(function(){
//         console.log("User Create")
//     },4000)
//     setTimeout(function(){
//         console.log("Get ID")
//     },3000)
//     setTimeout(function(){
//         console.log("User Info")
//     },2000)
// }
// getUser()

// //program 5


// Asynch ==> synch

//1. call Back hell 
//reused
//tightly couple


// function getUser() {
//     setTimeout(function () {
//         console.log("User Create")
//         setTimeout(function () {
//             console.log("Get ID")
//             setTimeout(function () {
//                 console.log("Get Info")
//             }, 2000)
//         }, 3000)

//     }, 4000)
// }
// getUser()
// output:
// User Create
// Get ID
// Get Info


// //2. promises

let ajax=new Promise(function(resolve,reject){
    let A= 10
    let B=10
    if(A==B){
        resolve("hi im from A group")

    }
    else{
        reject("hi im from B group")
    }
})

// // 1.
// ajax.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// //2.
// ajax
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
//output: hi im from A group


// //3.
// ajax
// .then(function(str){
//     console.log(str)
//     return "hello"
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always execute")
// })
// output:
// i im from A group
// hello
// i will always execute



