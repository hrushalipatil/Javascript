
// names =['vrushali','kabir','sayali','ashu']


// for(let i=0;i<names.length;i++){
//     console.log(names[i])
// }

// console.log('---------------')

// let i=0
// while(i<names.length){

//     console.log(names[i])
//     i++
// }

// console.log('---------------')


// // in reverse

// for(let i=names.length-1;i>=0;i--){
//     console.log(names[i])
// }
// console.log('---------------')

// let k= names.length-1; 
// while(k>=0){
//     console.log(names[k])
//     k--
// }


// ------------------------------------------------

// Array stores the value by index
//           0        1         2        3
let names = ["vrushali", "kabir", "shruti", "akash"]


//push -------add element at last
//return -----add new element
// let a1=names.push("damini")
// console.log(names)
// console.log(a1)

//pop ---- removes element at last
//return -----same element
// let a2=names.pop()
// console.log(a2)
// console.log(names)

//shift-------removes a first element
// return------same element
// let a3=names.shift()
// console.log(a3)
// console.log(names)

//unshift-------add frst element at first
// return-----new element

// let a4=names.unshift("addy")
// console.log(a4)
// console.log(names)

//includes-------find a element
//return -----true fals+e and if you do console.log(names) through error 

// let a5=names.includes("addy")
// console.log(a5)

//indexof ----gives a index number for particular element
//return---same element

// let a6=names.indexOf("kabir")
// console.log(a6)
// console.log(names)

//length ---- gives a index number of all elements in arrey

// console.log(names.length)
// let a7 = names.length
// console.log(a7)

// reverse--------gives a index in reverse order
// let a8 = names.reverse()
// console.log(a8)
// console.log(names)


// let a9 = names.sort()
// console.log(a9)        // [ 'akash', 'kabir', 'shruti', 'vrushali' ]

// console.log(names)

// -----------------------------------------------------------------------------------------

// let birthyear = [1999, 1998, 1997, 1996]
// let months = []

// for (let i = 0; i < birthyear.length; i++) {
//     let calulate = 2024 - birthyear[i]
//     // console.log(months)
//     months.push(calulate)

// }

// console.log(months)  // [ 25, 26, 27, 28 ]


// let number = [11, 22, 33, 44, 55, 66, 77]
// let Greater66 = []

// for (let i = 0; i < number.length; i++) {
//     if (number[i] < 66) {
//         // console.log()
//         Greater66.push(number[i])
//     }
// }
// console.log(Greater66)

// // ------------------------------------------------------
// let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100, 120]
// let above50 = []
// // console.log(arr)
// for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i])
//     if (arr[i] > 55) {
//         above50.push(arr[i])

//     }
// }
// console.log(above50)

// // ------------------------------------------------------
// let marks = [11, 22, 33, 44, 55, 66]
// // 11+22+33+44+55+66  ==> 231
// let total = 0

// for (i = 0; i < marks.length; i++) {
//     total = total + marks[i]
// }
// console.log(total)



// let alphanum = [1, "a", 2, "b", 3, "c", 4, "d"]
// let num = []
// let alphabates = []
// for (let i = 0; i < alphanum.length; i++) {
//     if (typeof alphanum[i] === 'number' && alphanum[i] >= 0) {
//         num.push(alphanum[i])
//     }
//     else {
//         alphabates.push(alphanum[i])
//     }
// }
// console.log(num)            // [ 1, 2, 3, 4 ]
// console.log(alphabates)   // [ 'a', 'b', 'c', 'd' ]



// // =================================================================================================
// let info = {
//     firstName:"Vrushali",
//     lastName:"Patil",
//     age:34,
//     rollNo:44
// }
// //dot notation and bracket notation

// // retrive
// console.log(info['firstName'])
// console.log(info.firstName)

// // update
// info.firstName = "kabir"
// info['lastName']="wandhare"

// //add
// info.city="pune"
// info["city"]="nashik"

// // delete
// delete info.age 

// // ==============================================================

// let min = ["Vrushali", "sayli", "kabir", "Denis"]

// for (let i = 0; i < min.length; i++) {
//     console.log(min[i])
// }
// // output :
// // Vrushali
// // sayli
// // kabir
// // Denis

// let min1 = {
//     0: "Vrushali",
//     1: "sayli",
//     2: "kabir",
//     3: "Denis"

// }
// // dot notation does not work inside loop

// for (let key in min1) {
//     // console.log(key)          // 1,2,3,4
//     console.log(key, ":" ,min1[key])

// }
// // ========================================================================================

// let vehicle = {
//     color:"red",
//     type:"sedane"
// }

// for(let key in vehicle){
//     console.log(key,":",vehicle[key])
// }

// =================================================================================
let std = [
    {
        firstName:"Vrushali",
        lastName:"patil"
    },
    {
        firstName:"Sayali",
        lastName:"jogi"
    },
    {
        firstName:"komal",
        lastName:'deshmukh'
    }
]
// console.log(std[0].firstName)

// for ==============================
// for(let i=0;i<std.length;i++){
//     console.log(std[i].firstName + std[i].lastName)
// }

// foreach=============================
// std.forEach(element => {
//     element.firstName + element.lastName
    
// });
// console.log(std)

// map=================================
// std.map(element=>{
//     return(element.firstName+element.lastName)
// })
// console.log(std)

// ========================================================================


// for(let i=0;i<std.length;i++){
//     std[i].language ="hindi"
// }
// console.log(std)


// let std1 = {
//     firstName:"vrushali",
//     lastName:"patil",
//     parent:{
//         mother:"jyoti patil",
//         father:"naresh patil"
//     }
// }
// std1.parent.father = 'shekhar patil'
// console.log(std1)

// std1.parent.sister = 'shruti patil'
// console.log(std1)

// std1.city ="nagpur"
// console.log(std1)

// output: 
// {
//   firstName: 'vrushali',
//   lastName: 'patil',
//   parent: {
//     mother: 'jyoti patil',
//     father: 'shekhar patil',
//     sister: 'shruti patil'
//   }
//    city: 'nagpur'
// }



// map()
// filter()
// reduce()
// foreach()
// every()
// some() 
// find()
// findIndex()
// includes()
// indexOf()
// lastIndexOf()



// arr = [
//     { id: 1, Name: "rahul", rollnumber: 23 },
//     { id: 2, Name: "rohit", rollnumber: 24 },
//     { id: 3, Name: "raj", rollnumber: 25 },
//     { id: 4, Name: "ravi", rollnumber: 26 },

// ]

// for (i = 0; i < arr.length; i++) {
//     // console.log(arr[i]) // all objects
//     console.log(arr[i].Name)
// }

// let a = arr.map(function (el) {
//     return el.Name
// })
// console.log(a)   //[ 'rahul', 'rohit', 'raj', 'ravi' ]

// arr.forEach(function (el) {
//     // el.push({city:"pune"})  // this is wrong
//     el.city = "pune";   // // Add a new property to each object
// })
// console.log(arr)




// ================================================================================

let students = [
    {
        fullName:"ankit giri",
        city:"ujjain",
        skills:["angular","python","react js","django"],
        age:26
    },
    {
        fullName:"sanjeet wandhare",
        city:"pune",
        skills:["cypress","python","react js","js","selenium"],
        age:20

    },
    {
        fullName:"shruti patil" ,
        city:"pune",
        skills:["sql","python","js","MSBI"],
        age:33
    },
    {
        fullName:"vrushali patil",
        city:"nagpur",
        skills:["testing","python","selenium"],
        age:34
    }
]

students.map(function(el){
    el.skills = el.skills.join(", ");      //   skills: 'cypress, python, react js, js, selenium',
})
console.log(students)