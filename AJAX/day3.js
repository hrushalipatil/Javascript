// let pro = new Promise(function (resolve, reject) {
//     let x = 10
//     let y = 10
//     if (x == y) {
//         resolve("hello")
//     }
//     else {
//         reject("bye")
//     }
// })

// pro.then(function (str) {
//     console.log(str)

// }).catch(function (str) {
//     console.log(str)
// }).finally(function () {
//     console.log("always excuted")

// })
// /* output:hello 
//  always excuted */

// let pro1 = new Promise(function (resolve, reject) {
//     let x = 10
//     let y = 10
//     if (x == y) {
//         resolve("hello")
//     }
//     else {
//         reject("bye")
//     }

// })
// pro
//     .then(function (str) {
//         console.log(str)
//         return "welcome all"
//     })
//     .then(function (str) {
//         console.log(str)
//         return "minskole"
//     })
//     .then(function (str) {
//         console.log(str)
//     })
//     .catch(function (str) {
//         console.log(str)
//     })
//     .finally(function () {
//         console.log("always excuted")
//     })
// /* output :
// hello
// welcome all
// always excuted
// minskole
// always excuted */


// /*Asynch ==> synch
// dependant flow
// userCreate=> getID=> getUserInfo*/


// function person() {
//     setTimeout(function () {
//         console.log("Create User")
//         setTimeout(function () {
//             console.log("get Id")
//             setTimeout(function () {
//                 console.log("get info")
//             }, 1000)
//         }, 2000)
//     }, 3000)

// }
// person()

// //=======================================================
// function CreateUser() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("user create...")

//         }, 3000)
//     })
// }
// function getID() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("get id...")
//         }, 2000)
//     })
// }
// function getUserInfo() {
//     return new Promise(function (resolve) {
//         setTimeout(function () {
//             resolve("get info...")
//         }, 1000)
//     })
// }

// CreateUser()
//     .then(function (str) {
//         console.log(str)
//         return getID()
//     })
//     .then(function (str) {
//         console.log(str)
//         return getUserInfo()
//     })
//     .then(function (str) {
//         console.log(str)
//     })
//     .catch(function () {
//         console.log("reject")
//     })
//     .finally(function () {
//         console.log("always excute")
//     })

// -------------------------------------

function createUser(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("USer Create")
        },3000)
    })
}

function getID(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Get ID")
        },2000)
    })
}

function getInfo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Get Info")
        },1000)
    })
}


async function details(){
    let a1 =await createUser()
    console.log(a1)
    let a2=await getID()
    console.log(a2)
    let a3=await getInfo()
    console.log(a3)
} 

details()
