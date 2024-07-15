

// function getMultipleUser(pageNumber) {
//     return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
//         .then(function (response) {
//             return response.json()
//         }).then(function (response) {
//             console.log(response.data)
//             return response.data.forEach(function (el) {
//                 document.write(`<h1>______________________________________</h1>`)

//                 document.write(`<h1> ID : ${el.id}<h1>`)

//                 document.write(`<h3> FullName: ${el.first_name}${el.last_name}<h3>`)
//                 document.write(`<h3> Gmail: ${el.email}<h3>`)
//                 document.write(`<img src=${el.avatar}>`)
//             })
//         })

// }
// getMultipleUser(1)



// ---------------------------------------------------
// let button = document.querySelector('button')
// button.addEventListener('click', function () {
//     // getMultipleUser(1)
// })
// ----------------------------------------------------------

// singleUSer

// function getSingleUser(id) {
//     return fetch(`https://reqres.in/api/users/${id}`)
//         .then(function (response) {
//             return response.json()
//         }).then(function (response) {
//             console.log(response.data)
//             return response.data
//         })

// }
// getSingleUser(3)

// //show info

// function showSingleUser(el) {
//     document.write(`<h1> ID : ${el.id}<h1>`)
//     document.write(`<h3> FullName: ${el.first_name}${el.last_name}<h3>`)
//     document.write(`<h3> Gmail: ${el.email}<h3>`)
//     document.write(`<img src=${el.avatar}>`)

// }
// getSingleUser(4)
// .then(function(el){
//     showSingleUser(el)
// })


// // asynch await

// async function singleUserInfo(){
//     let A=await  getSingleUser(7)
//     showSingleUser(A)
// }
// singleUserInfo()
// -----------------------------------------------------------------

// getmultiUser---> getsingleId ----> showInfo


function getMultipleUser(pageNumber) {
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then(function (response) {
            return response.json()
        }).then(function (response) {
            console.log(response.data)

            return response.data
        })


}
// getMultipleUser(1)   // (6) [{…}, {…}, {…}, {…}, {…}, {…}]



// // SingleUser
// function getSingleUser(id) {
//     return fetch(`https://reqres.in/api/users/${id}`)
//         .then(function (res) {
//             return res.json()
//         })
//         .then(function (res) {
//             return (res.data)
//         })
// }
// //getSingleUser()


// //ShowInfo
// function showInfo(el) {
//         document.write(`<h1> ID : ${el.id}<h1>`)
//         document.write(`<h3> FullName: ${el.first_name}${el.last_name}<h3>`)
//         document.write(`<h3> Gmail: ${el.email}<h3>`)
//         document.write(`<img src=${el.avatar}>`)

// }

// getMultipleUser(2)
//     .then(function (response) {
//         console.log(response) // // (6) [{…}, {…}, {…}, {…}, {…}, {…}]

//         getId = response[5].id   // 12
//         return getSingleUser(getId)
//     })
//     .then(function (response) {
//         console.log(response) // {data: {…}, support: {…}, ad: null
//         showInfo(response)
//     })

//asynch await

// async function info(){
//     let dataArray=await getMultipleUser(1)
//     let idUserInfo=await getSingleUser(dataArray[4].id)
//     showInfo(idUserInfo)
// }
// info()
















