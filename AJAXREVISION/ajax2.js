// // sync 
// function additionA(){
//     console.log("A")  
// }

// function additionB(){
//     console.log("B")
// }
// additionA()
// additionB()


// // async
// function addC(){
//     setTimeout(function(){
//         console.log("C")
//     },3000)
// }
// function addD(){ 
//     console.log("D")
// }
// addC()
// addD()

// program 3

// usercreate  ------- getid ---- getinfo

function getInfo() {

    setTimeout(function () {
        console.log("user created")
    }, 3000)

    setTimeout(function () {
        console.log("get id")
    }, 2000)

    setTimeout(function () {
        console.log("user info")
    }, 1000)

}
//getInfo()
// call back hell
// async ---- call ------ synchronoulsy
function getInfo() {
    setTimeout(function () {
        console.log("user created")
        setTimeout(function () {
            console.log("get id")
            setTimeout(function () {
                console.log("user info")
            }, 1000)

        }, 2000)

    }, 3000)
}
getInfo()

// promises 



let pro = new Promise(function(resolve,reject){
    let a = 10
    let b = 15

    if(a == b){
        resolve("hello")
    }
    else {
        reject("bye")
    }
})

pro.then(function(str){
    console.log(str)
},function(str){
  console.log(str)
})