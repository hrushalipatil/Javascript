// // Essenatials -- for starting react


// // //destruccting of objects and array 

// //arry
// let name = ["vrushali","kabir", "sayali"]


// let [a,b,c]=name

// console.log(a)
// console.log(b)
// console.log(c)

// //object

// let Info ={
//     firstName :"vrushali",
//     lastName : "patil"

// }

let students = [

    {
        firstname: "chinmay",
        lastName: "deshpande"
    },
    {
        firstname: "poorva",
        lastName: "vyas"
    }
    ,
    {
        firstname: "shivani",
        lastName: "headua"
    }
]

// students.forEach(element => {
//     if(element.firstname == "shivani")
//     console.log(element.firstname="vrushaLI")

// for (i = 0; i < students.length; i++) {
//     students[i].city.push("pune")
//     console.log(students[i])
// }


students.forEach(function(el){
    students.push(el.city="pune")
    console.log(el)

})
// console.log(A)

// { firstname: 'chinmay', lastName: 'deshpande', city: 'pune' }
// { firstname: 'poorva', lastName: 'vyas', city: 'pune' }
// { firstname: 'shivani', lastName: 'headua', city: 'pune' }


