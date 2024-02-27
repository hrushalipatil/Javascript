let student = [
    {
        firstName: "Mayuri",
        lastName: "Katwe",
        age: 25,
        city: "Nashik",
        skills: ["Javascript", "cypress", "python", "SQL", "DJANGO"],
    },
    {
        firstName: "Vaibhav",
        lastName: "Raut",
        age: 12,
        city: "Jalgoan",
        skills: ["SQL", "Selenium"]
    },
    {
        firstName: "Sweta",
        lastName: "Kulkarni",
        age: 34,
        city: "Sangamner",
        skills: ["Java", "Cypress", "Jmeter", "Manual"]
    },
    {
        firstName: "Sam",
        lastName: "Jain",
        age: 41,
        city: "Pune",
        skills: ["Java", "Python", "React", "node", "salesforce", "selenium"]
    },
    {
        firstName: "kumar",
        lastName: "sahu",
        age: 51,
        city: "Pune",
        skills: ["React", "node"]
    }
]
//firstName ==> sweta 
//sweta:4

//Problem 6
student.forEach(function (el) {
    console.log(el.firstName + " : " + el.skills.length)
})

console.log("===========================")
student.filter(function (el) {
    return el.firstName == "Sweta"
}).forEach(function (el) {
    console.log(el.firstName + " : " + el.skills.length)
})

//Problem 7

//city => pune skills => React ===> find firstName of that student 

let s1 = student.filter(function (el) {
    return el.city == "Pune" && el.skills.includes("React")
})
console.log(s1)

s1.forEach(function (el) {
    console.log(el.firstName)
})

//Program 8
//FirstName:[skills array]  ==> firstname  start "S"
student.forEach(function (el) {
    if (el.firstName.startsWith("S")) {
        console.log(el.firstName + " : " + el.skills)
    }
})

console.log("========================")
student.filter(function (el) {
    return el.firstName.startsWith("S")
}).forEach(function (el) {
    console.log(el.firstName + " : " + el.skills)
})

//Program 9
//country="India"
student.forEach(function (el) {
    el.country = "India"
})
console.log(student)

// let obj={
//     firstName:"Mayuri",
//     lastName:"Katwe"
// }

// //city="Nashik"

// obj.city="Nashik"
// console.log(obj)

// {
//     firstName:"Mayuri",
//     lastName:"Katwe" ,
//     city="Nashik"
// }


let marks=[12,34,67,89]
//100
marks.push(100) //last
marks.unshift(300) //first

marks[3] =400

let obj={
    firstName:"Mayuri",
    lastName:"Katwe"
}
//objName.proprtyName="value"==> add  => CURD
obj.language="hindi" //add
obj.firstName="Vaibhav"//update
console.log(obj.lastName)//retirve
delete obj.firstName //delete

