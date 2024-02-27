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



// print name of user starting with s
// console.log(typeof(students))                       //object

// console.log(students[0].firstName + students[0].lastName)

// for(let i  = 0 ; i < students.length ; i++){
//     //console.log(i)
//     console.log(students[i].firstName + students[i].lastName)
// }

// //print full name of object

students.forEach(function(el){
    console.log(el.fullName)                        //ankit giri    
                                                    //sanjeet wandhare
                                                    // shruti patil
                                                    //   vrushali patil
})


// print fullName:numberofSkills
// eg ===> vrushali : 3

// students.forEach(function(el){
//     console.log(el.fullName, ":", el.skills.length)  
//    // ankit giri : 4
//     //sanjeet wandhare : 5
//     //shruti patil : 4
//     //vrushali patil  : 3
// })


// //print name of user with "selenium"
students.forEach(function(el){
    if(el.skills.includes("selenium"))
    console.log(el.fullName)
    
})

// //print name of user with "js"

students.forEach(function(el){
    if(el.skills.includes("js"))
    console.log(el.fullName)          //vrushali patil
                                      //sanjeet wandhare
                                      //shruti patil
})         
          
// add "salesforce "skill in last  to every user
students.forEach(function(el){
    el.skills.push("saleforce")
})
console.log(students)


// delete "saleforce" skill in last to every user
students.forEach(function(el){
    delete (el.skills.python)
})
console.log(students)

// // add working city property with value banglore

students.forEach(function(el){
    el.workingcity="banglore"
})
console.log(students)

// // average age of all students 

let totol_sum =students.reduce(function(acc,el){
      return el.age + acc
},0)
console.log(totol_sum/students.length)         //28.25

// if pune is exists in object call there fullnames

students.forEach(function(el){
    if( el.city =="pune"){
       console.log( el.fullName)
    }
})

// user with city pune

let P = students.filter(function(el){
    return el.city == "pune"
})
console.log(P)
P.forEach(function(el){
    console.log(el.fullName)
})

// // print name of user starting with s

students.forEach(function(el) {
    let F = el.fullName;
    if (F.startsWith('s')) {
        console.log(F)
    }
})


// Use forEach to print full names ending with 'patil'

students.forEach(function(el) {
    let Z = el.fullName
    if (Z.endsWith('patil')) {
        console.log(Z);
    }
})

//print name of students who stays in pune city 
// 1----------
students.forEach(function(el){
    if(el.city == "pune"){                                   //sanjeet wandhare  shruti patil
        console.log(el.fullName)
    }
})

// 2----------
let P1 = students.filter(function(el){
    return el.city == "pune"
})
console.log(P1)
P1.forEach(function(el){
    console.log(el.fullName)
})

// students.forEach(function (el) {
//     console.log(el.fullName + " : " + el.skills.length)
// })

// console.log("===========================")
let ss=students.filter(function (el) {
    return el.fullName == "ankit"
})
console.assert(ss)
ss.forEach(function (el) {
    console.log(el.fullName + " : " + el.skills.length)
})

