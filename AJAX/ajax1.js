 
//return arrey---data
// get alll data 
// function getUserId(pageNumber){
//     return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
//     .then(function(response){
//         return response.json()

//     }).then(function(response){
//         console.log(response.data)
//         return response.data
//     })
// }
// getUserId()

// // get single user

// function getSingleUser(id){
//     return fetch(`https://reqres.in/api/users/${id}`)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(response){
//         console.log(response.data)
//         return response.data
//     })
// }

// //getSingleUser(7)
// function renderHtml(el){
//     document.write(`<h1>${el.id}<h1>`)
//     document.write(`<h2>${el.first_name}${el.last_name}<h2>`)
//     document.write(`<h2>${el.email}<h2>`)
//     document.write(`<img src=${el.avatar}>`)
// }
// getUserId(2)
// .then(function(arr){
//     console.log(arr[2].id)
//     return getSingleUser(arr[3].id)
// })
// .then(function(response){
//     console.log(response)
//     renderHtml(response)
// })


function getUserId(pageNumber) {
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then(function (response) {
            return response.json()
        }).then(function (response) {
            console.log(response.data)
            return response.data
        })
}
getUserId()

function getSingleUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)

        .then(function (response) {
            return response.json()

        }).then(function (response) {
            console.log(response.data)
            return response.data
        })
}
getSingleUser(7)

function renderHtml(el) {
    document.write(`<h1>${el.id}<h1>`)
    document.write(`<h2>${el.first_name}${el.last_name}<h2>`)
    document.write(`<h2>${el.email}<h2>`)
    document.write(`<img src=${el.avatar}>`)
}

getUserId(2)

    .then(function (arr) {
        console.log(arr[1].id)
        return getSingleUser(arr[1].id)
    })
    .then(function (response) {
        console.log(response)
        renderHtml(response)
    })


// ------------------------------------------------------

// 31.11.23


function fetchUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (response) {
            console.log(response)
            if (response.ok) {
                return response.json()

            }
            return new Error('request was not sucessful')
        })
        .catch(function (error) {
            console.log
        })
}

// Promise combination
function fatchUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (response) {
            console.log(response)
            return response.json()

        })

}
// fetchUser(3)

function getUser2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let a = 10
            let b = 5
            if (a == b) {
                resolve('hello')

            }
            else {
                reject('bye')
            }
        }, 1000)
    })
}

// Prmoise.all=========
//takes an array of promises and returns a single promise that 
//resolves with an array of the results when all the input promises have resolved.

Promise.all([
    fetchUser(1),
    fetchUser(2),
    fetchUser(3),
    getUsers2() // error
])
    .then(function (response) {
        console.log(response)
    })

// // Promise.allSettled
// Promise.allSettled waits for all promises to be 
// settled (either resolved or rejected) and then returns an array of objects representing the outcome of each promise.

Promise.allSettled([
    fetchUser(3),
    fetchUser(1),
    getUsers2()
])
    .then(function (response) {
        console.log(response)
    })



// Promise.race()


Promise.race([
    fetchUser(3),
    getUsers2()
])
    .then(function (response) {
        console.log(response)
    })


// Promise.any()

Promise.any([
    getUsers2(),
    getUsers2(),
    fetchUser(2),
    fetchUser(1)
])
    .then(function (response) {
        console.log(response)
    })









