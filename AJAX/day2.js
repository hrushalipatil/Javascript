//Promises  => asynch => synch

//pending , resolve,reject


/*
1...then

The then method is used to handle the fulfillment (successful completion) of a promise
then method returns a new promise
 
2...catch
The catch method is a shorthand for handling only the rejection (failure) of a promise.*/

let pro = new Promise(function (resolve, reject) {
    let x = 100
    let y = 100

    if (x == y) {
        resolve("passed")
    }
    else {
        reject("failed")
    }
})

//consumed
pro.then(function (str) {
    console.log(str)
}, function (str) {
    console.log(str)
})

// program 2 ====
let pro1 = new Promise(function (resolve, reject) {
    let x = 50
    let y = 100

    if (x == y) {
        resolve([40, -25, 22, 34])
    }
    else {
        reject([-10, 11, -13, 14])
    }
})

//consumed
pro1
    .then(function (arr) {
        console.log(arr[3])

    }, function (arr) {
        console.log(arr[2])
     })

// program 3 ====

let pro2 = new Promise(function (resolve, reject) {
    let p = 100
    let q = 50
    if (p == q) {
        resolve("PASS")
    }
    else {
        reject("FAIL")

    }
})

//consumed

pro2.then(function (str) {
    console.log(str)
}).catch(function (str) {
    console.log(str)
})

// output: FAIL


// program 3:

let pro3 = new Promise(function (resolve, reject) {
    let L = 50
    let M = 50
    if (L == M) {
        resolve("PAAS")
    }
    else {
        reject("FAIL")

    }

})
// consumed

pro3.
    then(function (str) {
        console.log(str)

    }).catch(function (str) {
        console.log(str)

    }).finally(function () {
        console.log("I will excute in any case !")
    })
