/* AJAX stands for asynchronus javascript and XML


AJAX==> Asynchronous javascript 

Synchronous js ==> line to line*/

// function add1(){
//     console.log("I am add one function")
// }

// function add2(){
//     console.log("I am add two function")
// }


// add1()//I am add two function
// add2()//I am add one function

//---------------------------------------------------------
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
// add3()  
// add4() 
//output:
//I am add four function
//after 2 sec 
//I am add three function

//------------------------------------------------------

//User create==> get ID==> user info

//asynch => synch

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

// output:
// 2sec
// User Info
//3 sec
// Get ID
//4 sec
// User Create

//------------------------------------------------

//Asynch ==> synch

//1. call Back hell ---  //reused
                         //tightly couple
                         
//2. promises

function getUser(){
    setTimeout(function(){
        console.log("User Create")
        setTimeout(function(){
            console.log("Get ID")
            setTimeout(function(){
                console.log("Get Info")
            },2000)
        },3000)

    },4000)
}
getUser()
// output:
// User Create
// Get ID
// Get Info
