
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
let names=["vrushali","kabir","shruti","akash"]


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

let birthyear=[1999,1998,1997,1996]
let months=[]

for(let i=0;i<birthyear.length;i++){
   let calulate=2024-birthyear[i]
    // console.log(months)
    months.push(calulate)
    
}

console.log(months)  // [ 25, 26, 27, 28 ]


let number=[11,22,33,44,55,66,77]
let Greater66 =[]

for(let i=0;i<number.length;i++){
    if(number[i]<66){
        // console.log()
       Greater66.push(number[i])
    }
}
console.log(Greater66)

// ------------------------------------------------------
let arr= [11,22,33,44,55,66,77,88,99,100,120]
let above50=[]
// console.log(arr)
for (let i=0;i<arr.length;i++){
    // console.log(arr[i])
    if(arr[i]>55){
       above50.push(arr[i])
    
    }
}
console.log(above50)

// ------------------------------------------------------
let marks = [11,22,33,44,55,66]
// 11+22+33+44+55+66  ==> 231
let total = 0

for(i=0;i<marks.length;i++){
    total=total+marks[i]
}
console.log(total)