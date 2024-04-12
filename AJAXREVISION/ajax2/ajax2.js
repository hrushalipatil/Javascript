let user = {
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



// 1 . User k action pr data dikhna chahiye 


function getUser() {
    user.data.forEach(function (element) {

        document.write(`<h3>fullName: ${element.first_name} ${element.last_name}</h3>`)
        document.write(`<p>Email: ${element.id}${element.email}</p>`)
        document.write(`<Img src=${element.avatar}>`)

    })
}

let userButton = document.querySelector('button')
userButton.addEventListener('click', function () {
    getUser()
})
getUser()



// 2.


// function GetUserPage(page){
//     fetch(`https://reqres.in/api/users?page=${page}`)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(response){
//         response.data.forEach(element => {
//         document.write(`<h2>${element.first_name}${element.last_name}</h2>`)
//         document.write(`<p>${element.id} ${element.email}</p>`)
//         document.write(`<Img src=${element.avatar}>`)


//         });
//     })
// }

// // //  GetUserPage(2)
// let userButton = document.querySelector("button")

// userButton.addEventListener("click",function(){
//     GetUserPage(2)
// })




// Id find kareni ho ...

// function GetUserId(userId) {
//     fetch(`https://reqres.in/api/users/${userId}`)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (response) {
//             let user = response.data;

//             if (user) {
//                 document.write(`<h2>${user.first_name} ${user.last_name}</h2>`);
//                 document.write(`<p>ID: ${user.id} ${user.email}</p>`);
//                 document.write(`<img src=${user.avatar} alt="User Avatar">`);
//             }
//             else {
//                 document.write(`<p>User with ID ${userId} not found.</p>`);
//             }
//         })
//         .catch(function (error) {
//             console.error('Error fetching user data:', error);
//             document.write(`<p>Error fetching user data for ID ${userId}.</p>`);
//         });
// }

// let userButton = document.querySelector("button");

// userButton.addEventListener("click", function () {
//     GetUserId(10);

//     GetUserId(8)
// });


