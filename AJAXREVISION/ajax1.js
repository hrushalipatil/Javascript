function userCreated() {
    let ajax = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("User Created")
        }, 3000)
    })
    return ajax
}

function UserId() {
    let ajax = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("User ID")
        }, 2000)
    })
    return ajax
}

function GetInfo() {
    let ajax = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Get Info")
        }, 1000)
    })
    return ajax
}
userCreated()
    .then(function (str) {
        console.log(str)
        return UserId()
    })
    .then(function (str) {
        console.log(str)
        return GetInfo()
    })
    .then(function (str) {
        console.log(str)
    })
    .catch(function () {
        console.log("error occured")
    })
    .finally(function () {
        console.log("I will always execute")
    })


    // // async await 


async function GetAllUserInformation(){
    let ajax1 =await userCreated()
    console.log(ajax1)
    let ajax2 = await UserId()
    console.log(ajax2)
    let ajax3 =await GetInfo()
    console.log(ajax3)
} 
GetAllUserInformation()   