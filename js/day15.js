// Array stores the value by index
//           0        1         2        3
// let names=["vrushali","kabir","shruti","akash"]


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


// program 1 - write a program a age of person accoding ["1999","1998","1997","1996","1995"] this birthyear
//  let birthdayYear = [1999,1998,1997,1996,1995,1994,1993]
//  let age =[]
 
// for(let i=0;i<birthdayYear.length;i++){
//     // console.log(birthdayYear[i])
//     // console.log(birthdayYear)
//      let calage = 2023-birthdayYear[i]
//      age.push(calage)
// }
// console.log(age)

//program2:

// let age =[23,24,25,26]
// let year=[]
// for(i=0;i<age.length;i++){
//     // console.log(i)
//     console.log(age[i])
//     let Year=2023-age[i]
//     year.push(Year)
// }
// console.log(year)

// program3:write a program of arrey.in arrey print element is above 50
// let arr= [11,22,33,44,55,66,77,88,99,100,120]
// let above50=[]
// // console.log(arr)
// for (let i=0;i<arr.length;i++){
//     // console.log(arr[i])
//     if(arr[i]>55){
//        above50.push(arr[i])
    
//     }
// }
// console.log(above50)


//program 3: addition of all he element in arrey

let marks = [11,22,33,44,55,66]
// 11+22+33+44+55+66  ==> 231
let total = 0

for(let i = 0 ; i < marks.length ; i++){
    console.log(i)
    console.log(marks[i])

    total = total + marks[i]

    //        0   +   11  ======> 11
    //        11  +    22 ======> 33
    //        33  +    33  ======> 66
    //        66  +    44 =======>110
    //        110 +    55 ======>165
    //        165 +    66 =======>231
}

console.log(total)


