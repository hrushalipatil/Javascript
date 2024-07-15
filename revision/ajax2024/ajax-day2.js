function createUser(){
    return new Promise(function(resolve ,reject){
        setTimeout(function(){
            resolve({name:"John", age:30})
        },3000)
    })
}
function Userid(){
    return new Promise(function(resolve ,reject){
        setTimeout(function(){
            resolve({name:"Vaa", age:11})
        },2000)
    })
}
function Userinfo(){
    return new Promise(function(resolve ,reject){
        setTimeout(function(){
            resolve({name:"saaya", age:22})
        },1000)
    })
}
// createUser()
// .then(function(str){
//     console.log(str)
//     return Userid()
// }).then(function(str){
//     console.log(str)
//     return Userinfo()
// }).then(function(str){
//     console.log(str)
// }).catch(function(){
//     console.log("error")
//     return 
// }).finally(function(str){
//     console.log("fnallyy.....")
// })
//------------------------------------------------------------
function createUser(){
    return new Promise(function(resolve ,reject){
        setTimeout(function(){
            resolve({name:"John", age:30})
        },3000)
    })
}
function Userid(){
    return new Promise(function(resolve ,reject){
        setTimeout(function(){
            resolve({name:"Vaa", age:11})
        },2000)
    })
}
function Userinfo(){
    return new Promise(function(resolve ,reject){
        setTimeout(function(){
            resolve({name:"saaya", age:22})
        },1000)
    })
}
async function GetInfo(){
   
    let a =  await createUser()
    console.log(a)
    let b =  await Userid()
    console.log(b)
    let c =  await Userinfo()
    console.log(c)
}
// GetInfo()
//------------------------------------------------------------

//Promise.all()  ==> shortcircut at reject state

async function promiseall(){
    
    let a= await  Promise.all([
         Promise.resolve('S1'),
         Promise.resolve('S2'),
        //  Promise.reject('S3'),
        //  Promise.reject('S4'),
    ])
    console.log(a)
}
// promiseall()  // [ 'S1', 'S2' ]
// -------------------------------------------------------------------


//Promise.race() => whoever reached first give response

function createUser(){
    return new Promise(function(resolve ,reject){
        setTimeout(function(){
            resolve({name:"John", age:30})
        },3000)
    })
}
function Userid(){
    return new Promise(function(resolve ,reject){
        setTimeout(function(){
            resolve({name:"Vaa", age:11})
        },2000)
    })
}
async function promiseRace(){
    let b=await Promise.race([
       createUser(),
        Userid()
    ])
    console.log(b)
}
promiseRace() // { name: 'Vaa', age: 11 }

// =========================================

// Promise.allSettled() => all the promises are settled

async function PromiseAllSettled(){
    let c=  await Promise.allSettled([
         Promise.resolve("Settle1"),
         Promise.reject("settle2"),
         Promise.resolve("settle3"),
     ])
 
     console.log(c)
 }
 PromiseAllSettled() 
 //[
// { status: 'fulfilled', value: 'Settle1' },
// { status: 'rejected', reason: 'settle2' },
// { status: 'fulfilled', value: 'settle3' }
//]

// -------------------------------------------------------


// Promise.any()   -- //Promise.any()=> short circuit at first resolve state
 async function getPromiseAny(){
    let d=  await Promise.any([
         Promise.reject("bye"),
         Promise.reject("bye2"),
         createUser()


     ])
     console.log(d)
  }
getPromiseAny()  // { name: 'John', age: 30 }