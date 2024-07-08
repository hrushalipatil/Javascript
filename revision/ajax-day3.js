//backend data
//api call => data => frontend


let Userinfo = {
    "page": 2,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
         }
    ],
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
}

// ===================================================================================================
// console.log(Userinfo.data[4])  --arrey 
// console.log(Userinfo.data[4].first_name)   // George


// Userinfo.data.forEach(function(el){
//     document.write(`<h1>id : ${el.id}</h1>`)
//      document.write(`<img src= ${el.avatar}>`)
//     document.write(`<h3>email : ${el.email}</h3>`)
//     document.write(`fullName : ${el.first_name}  ${el.last_name}`)
   
// })

// ===================================================================================================



let button = document.querySelector('button')

function GetUserInfo(pageNumber){
    // let userId = document.getElementById("userId").value
    fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(response){
        return response.json()
    }).then(function(){
        response.data.forEach(function (el) {
            document.write(`<h1>${el.id}<h1>`)
            document.write(`<h2>${el.first_name}${el.last_name}<h2>`)
            document.write(`<h2>${el.email}<h2>`)
            document.write(`<img src=${el.avatar}>`)
        })
    })

}
GetUserInfo()
