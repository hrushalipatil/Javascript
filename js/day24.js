// // unpack or destructure----------------------------object
let names =["komal","daisy","danis","vrushali"]
console.log(typeof(names))

//  1.
// let a=names[0]
// let b=names[1]
// let c=names[2]

// console.log(a)
// console.log(b)
// console.log(c)

// 2.
// let [a1,a2,a3,a4]=names
// console.log(a1)
// console.log(a2)
// console.log(a3)
// console.log(a4)

// 3.
let number = [[11,12,13],[14,15,16],[17,18,19]]
// let [[s1,s2,s3],[s4,s5,s6],[s7,s8,s9]] = number
// console.log(s1)
// console.log(s7)
// console.log(s6)
// console.log(s3)

//4.
let info={
    name:"vrushali",
    age:21,
    subject:"hindi"
}

// -----------------dot
// console.log(info.name)
// console.log(info.age)
// console.log(info.subject)
// let A1=info.name
// console.log(A1)
// let A2=info.age
// console.log(A2)
// let A3=info.subject
// console.log(A3)

// ----------------bracket
// console.log(info["name"])
// console.log(info["age"])
// console.log(info["subject"])

// let B1=info["name"]
// console.log(B1)
// let B2=info["age"]
// console.log(B2)
// let B3=info["subject"]
// console.log(B3)

// ------------------------distructor
// let{name,age,subject}=info
// console.log(name)
// console.log(age)
// console.log(subject)

// 5.
// let vehical={
//     color:"yellow",
//     vehicalno :2321,
// }
// let{color:C,vehicalno:VN}=vehical
// console.log(C)
// console.log(VN)

// 6.
let fruits={
    apple:"red",
    fav:{
        banana:"yellow",
        papaya:"pitch",
        grape:"green"

    }
}
console.log(typeof(fruits))
let{apple:A,fav:{banana:B,papaya:P,grape:G}}=fruits
console.log(A)
console.log(P)
console.log(G)


// 7.
let students = [

    {
        firstName:"vrushali",
        lastName:"patil"
    },

    {
        firstName:"sanjeet",
        lastName:"wandhare"
    }
]

let [{firstName:f11,lastName:l11},{firstName:f22,lastName:l22}] = students
console.log(l11)
console.log(f22)
console.log(typeof(students))        //object


