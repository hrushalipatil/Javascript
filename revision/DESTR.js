let names=["vrushali","sayali","kabir"]

let A=names[0]
console.log(A)

let B=names[1]
console.log(B)

let C=names[2]
console.log(C)

let [A1,A2,A3] = names
console.log(A1)
console.log(A2)
console.log(A3)

// Program 2

let fruits = ["apple","mango","banana"]

let [A4,A5]=fruits

console.log(A4)    // apple
console.log(A5)    // mango

// program 3
//                     0                    1                2
//                0        1          0         1         0         1
let cities =  [["Nagpur","Wardha"],["bhopal","indore"],["lucknow","agra"]]


let [[A6,A7],[A8,A9],[A10,A11]]=cities

console.log(A10)   // lucknow


// program 4

let info = {
    firstName:"Vrushali",
    lastName:"patil"
}

let {firstName,lastName}=info
console.log(firstName)

console.log(lastName)


// program 5

let vehicle = {
    color:'red',
    type:'sedane'
}

let {color:cl,type:ty}=vehicle

console.log(cl)   //red

console.log(ty)   //sedane


//program 6

let infoA={
     fullName: "vrushali patil",
     Parent:{
        mother: "jyoti patil",
        father:"naresh patil"
     }
}

let {fullName:fn,Parent:{mother:m,father:f}}=infoA
console.log(fn) //vrushali patil
console.log(m) //jyoti patil
console.log(f) //naresh patil


//Program 7

let student=[
    {
        fn:"vrushali",
        ln:"patil"
    },
    {
        fn:"sayali",
        ln:"jogi"
    }

]


let [{fn:f1,ln:l1},{fn:f2,ln:l2}]=student

console.log(f1)//vrushali
console.log(l1)//patil
console.log(f2)//sayali
console.log(l2)//jogi


//Program 8

let info3 = {
    firstName:"kabir",
    lastName:"wandhare",
    skills:["python","javascript"]

}

let {firstName:f3,lastName:l3,skills:[sub1,sub2]}  = info3
console.log(f3)
console.log(l3)
console.log(sub1)
console.log(sub2)