
//array
//1. push:
//  action--------last element add 
//  return --------new length
//2. unshift: 
// action------first element add 
// return --------new length
//3. shift: 
// action-----first element remove
// return -------- removed element
//4. pop:
// action------last element remove
// return --------removed element
//5. includes:
// action------ check given element present or not
// return------- boolean
//6. indexOf:
// action------give the index of given element
// return------index/-1 ==number
//7. falt
// action------two diamentional array single array 
// return------array


// let number = [2,4,6,8,10,12,14,16,18,20]
// //add4 ==> [6,8,10,14,16,18,20,22,24]

// //map()
// //action ==> perform action woth each and every element
// //return ==>  new array

 
// let add4=number.map(function (element, index, array) {
//    return  element + 4
// })
// console.log(add4)


// let number1 = [20,30,40,50,60,70,80,90,100,110,120]
// //>60

// //filter()
// //action ==> compare element based on given condition and filterout the element
// //return => new array
// //1. seprate a greater then 60 

// let greter60=number1.filter(function(element,index,array){
//    return element>60
// })
// console.log(greter60)
     
// // 2. seprate a numbers and alphabates of string 

let string =["a" ,1,"a",2,"s",3,"m" ,4,"l",5]

let A= string.filter(function(element,index,array){
         return element>=0      
    })
console.log(A)

let B= string.filter(function(element,index,array){
    return element<="string"   
})
console.log(B)

// [ 1, 2, 3, 4, 5 ]
// [ 'a', 'a', 's', 'm', 'l' ]

            
// //reduce()

// let marks = [2, 3, 4, 5, 6, 7, 8, 9]

// let sum = marks.reduce(function (acc, element, index, array) {
//    return acc + element
// },0)            

// console.log(sum)


//forEach()
//action ==> perform action with each ele
//return ==> nothing

// let student=["vrushali","sanjeet","kabir","shruti"]

//welcome vrushali
//welcome sanjeet
//welcom kabir 
//welcome shruti

// for(let i=0;i<student.length;i++){
//    console.log("welcome " +student[i])
// }

// student.forEach(function(el,index,arr){
//    console.log("welcome "+el)
// })


//some()
//at the one element get in arrey it will gives a true
// let arrey=[1,11,111,1111,11111]
// //> 100 true

// let A=arrey.some(function(el,index,arr){
//    return el>100
// })
// console.log(A)

//every()
// all the elemet in arrey will be match otherwise it give false

//  let B=arrey.every(function(el,index,arr){
//        return el>100
//     })
//     console.log(B)

// //reduce()
// let arr =[1, 2, 3, 6, 5, 4]

// let product_of_arr = arr.reduce(function(a,b){
//     return (a*b)                            //1*1=1
//                                             //1*2=2
//                                             //2*3=6
//                                             //6*6=36
//                                             //36*5=180
//                                             //180*4=720 
// },1) 
// console.log(product_of_arr)



//           0  1  2  3  4  5   6  7  8  9
let names = [11,22,33,44,55,66,77,88,99,100]
// [55,77,88,88,99,100]
 
//filter

let C = names.filter(function(el){
    return el > 50
})
console.log(C)

// find ------gives only one element who matches the condition

let D = names.find(function(el){
    return el > 50
})
console.log(D)

// findindex----gives an index 
let E = names.findIndex(function(el){
    return el > 50
})
console.log(E)

//every-------all the element of an index get match then it gives true otherwise false
let nums = [55,60,77,33,45,66,77]
let F= nums.every(function(el,index,arr){
    return el > 32
})

console.log(F)

//some--------at least one element of an index get match it gives true otherwise false
let G = nums.some(function(el,index,arr){
    return el < 10
})

console.log(G)


 