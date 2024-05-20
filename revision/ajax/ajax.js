

function add() {
    setTimeout(() => {
        console.log('add 1 function')
    }, 2000);

}
function add2(){
    setTimeout(() => {
        console.log('add 2 function')
    }, 1000);
}

add()
add2()
//output:
// add 2 function
// add 1 function

//asynch => synch

function getUser(){
    setTimeout(function(){
        console.log("User Create")
    },4000)
    setTimeout(function(){
        console.log("Get ID")
    },3000)
    setTimeout(function(){
        console.log("User Info")
    },2000)
}
getUser()

// output :
// User Info
// Get ID
// User Create


// promise

let ajax= new Promise(function(resolve,reject){
    let A=10
    let B=101
    if(A==B){
        resolve("true")
    }
    else{
        reject("false")
    }
})
ajax.then(function (str) {
    console.log(str)
}, function (str) {
    console.log(str)
})
