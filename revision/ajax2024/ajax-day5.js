

// // using fetch

// // GET
// function getUser(id) {
//     fetch(`https://reqres.in/api/users/${id}`)
//         .then(function (resposne) {
//             return resposne.json()
//         })
//         .then(function (response) {
//             console.log(response.data)
//         })
// }
// // getUser(1)


// // POST
// function createUser() {
//     fetch(`https://reqres.in/api/users`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             name: 'John Doe',
//             job: 'Software Developer'
//         })
//     })
//         .then(function (response) {
//             //console.log(response)
//             return response.json()
//         })
//         .then(function (response) {
//             console.log(response)
//         })
//         .catch(function(error){
//             console.error(error)
//         })
// }
// //createUser()


// //PUT

// function updateUser(id) {
//     fetch(`https://reqres.in/api/users/${id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             name: "morpheus",
//             job: "zion resident"
//         })
//     })
//     .then(function(response){
//         return response.json()
      
//     })
//     .then(function(response){
//         console.log(response)
//     })
//     .catch(function(error){
//         console.error(error)
//     })
// }
//updateUser(3)


//delete 

// function deleteUser(id){
//     fetch(`https://reqres.in/api/users/${id}`,{
//         method:"DELETE"
//     })
//     .then(function(response){
//         //console.log(response)
//         if(response.status == 204){
//             console.log("user deleted successfully")
//         }
        
//     })
      
// }
// //deleteUser(2) 

// // ----------------------------------------------------------------------------------

// // program 1
// async function getUser(id){
//     try{
//         let response = await fetch(`https://reqres.in/api/users/${id}`)
//         let res = await response.json()
//         console.log(res.data)
//     }
//     catch(error){
//         console.error(error)
//     }
// }
// getUser(3)


// // program 2

// async function CreateUser(){
//     try{
//         let response = await fetch(`https://reqres.in/api/users`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 name: 'John Doe',
//                 job: 'Software Developer'
//             })
//         })
//         let responseB = await response.json()
//         console.log(responseB)
//     }
//     catch(error){
//         console.error(error)
//     }
// }
// // CreateUser()


// // program 3
// async function UpdateUser(id){
//     try{
//         let response = await fetch(`https://reqres.in/api/users/${id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 name: 'John Doe',
//                 job: 'Software Developer'
//             })
//         })
//         let responseB = await response.json()
//         console.log(responseB)
//     }
//     catch(error){
//         console.error(error)
//     }
// }
// //UpdateUser(7)

// //delete 


// async function DeleteUser(){
//     try{
//         let response = await fetch(`https://reqres.in/api/users/2`,{
//             method: 'DELETE'
//         })
//         if (response.status === 204) {
//             console.log("User deleted successfully");
//         }

//     }
//     catch (error) {
//         console.error("Error deleting user:", error);
//     }


// }

// deleteUser(2)


// -------------------------------------------------

// function getUser(id) {
//     return fetch(`https://reqres.in/api/users/${id}`)
//         .then(function (res) {
//             return res.json()
//         })
//         .then(function (res) {
//             return res.data
//         })
// }
// function getUserInfo() {
//    return  new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             reject("Bye")
//         }, 2000)
//     })
// }

//Promise combinators

//Promise.all()  ==> shortcircut at reject state

// async function getUsers() {
//     try {
//         let a = await Promise.all([
//             getUser(1),
//             getUser(2),
//             getUser(3),
//             getUserInfo()
//         ])
//         console.log(a)
//     }
//     catch {
//         console.log("error")
//     }
// }
// getUsers()

// Promise.allsettle() => executed for both resolve and reject

// async function getAlluser(){
//     let a=await Promise.allSettled([
//         getUser(1),
//         getUserInfo(),
//         getUser(2)
//     ])
//     console.log(a)
// }
// getAlluser()
// : 
// {status: 'fulfilled', value: {…}}
// 1
// : 
// {status: 'rejected', reason: 'Bye'}
// 2
// : 
// {status: 'fulfilled', value: {…}}

//Promise.race() => whoever reched first give resonse
 
// async function getAlluser(){
//     try{
//         let a=await Promise.race([
//             getUser(1),
//             getUserInfo(),
//             getUser(2),
//         ])
//         console.log(a) 
//     }
//   catch{
//     console.log("Error")
//   }

// }
// getAlluser()

//Promise.any()=> short circuit at first resolve state

// async function getAlluser(){
//     let a=await Promise.any([
        
//         getUserInfo(),
//         getUser(2)
//     ])
//     console.log(a)
// }
// getAlluser()

// ------------------------------------------------------------------------------------

// const getUsers = fetch(`https://reqres.in/api/users?page=2`)
//     .then((resposne) => resposne.json())

// const createUser = fetch(`https://reqres.in/api/users`, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: 'John Doe',
//         job: 'Software Developer'
//     })
// })
//     .then(function (response) {
//         //console.log(response)
//         return response.json()
//     })


// function quickResponse() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             reject('I executed first')
//         }, 1)
//     })
// }


// async function anyPromise(){
//     try{
//         let q1 = await Promise.any([getUsers,
//             createUser,
//             quickResponse()]
//         ) 
//         console.log(q1)
//     }
//     catch(error){
//         console.error("All failed:",error)
//     }
// }

// Promise.allSettled([getUsers,
//     createUser,
//     quickResponse()]
// ).then(function(arr){
//     console.log(arr)
// })



// Promise.race()

// Promise.race([
//     getUsers,
//     createUser,
//     quickResponse()

// ]).then(function(response){
//     console.log(response)
// })
// .catch((error) => console.error("All failed:",error))


// Promise.any()

// Promise.any([getUsers,createUser,quickResponse()])
// .then(function(result){
//     console.log(result)
// })
// .catch((error) => console.error("All failed:",error))



// Promise.all([
//     getUsers,
//     createUser,
// ])
//     .then(function (arr) {
//         console.log(arr[0])
//         console.log(arr[1])
//     })
//     .catch((error) => console.error("All failed:",error))

// ---------------------------------------------------------------

