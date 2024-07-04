
function additionA(){
    console.log("a")

}
function additionB(){
    console.log("b")
}
//additionA()
//additionB()
//--------------------------------------------------------------

function addtionC(){
    setTimeout(function(){
        console.log("c")
    }, 2000)
}
function addtionD(){
    console.log("d")
}
addtionC()  //after 2 sec --> c
addtionD()  //d

//---------------------------------------------------------------

function UserInfo(){
    setTimeout(function(){
        console.log("get id")
    },3000)
    setTimeout(function(){
        console.log("get user")
    },2000)
    setTimeout(function(){
        console.log("getinfo")
    },1000)

}
//UserInfo() 
//----------------------------------------------------------------

function UserInfo(){
    setTimeout(function(){
        console.log("get id")
        setTimeout(function(){
            console.log("get user")
            setTimeout(function(){
                console.log("get info")
            },1000)
        },2000)
    },3000)
}
UserInfo()   // get id -- get user--- get info

//----------------------------------------------------------------



let A=new Promise(function(resolve,reject){
    let x=10
    if(x==10){
        resolve("equal")
    }
    else{
        reject("not equal")
    }
})
A.then(function(str){
    console.log(str)
    return "sayali"
}).then(function(str){
    console.log(str)   
}).catch(function(str){
    console.log(str)
}).finally(function(){
    console.log("finally --always excuted")
})


