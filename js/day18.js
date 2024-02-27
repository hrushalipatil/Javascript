

//           0        1         2        3
// let names=["vrushali","kabir","shruti","akash"]

// push()             --------add in last element

// let a1=names.push("damini")
// console.log(names)
// console.log(a1)

// pop                 -----remove last element

// let a2=names.pop()
// console.log(a2)
// console.log(names)

//shift()             ------remove first element

// let a3=names.shift()
// console.log(a3)
// console.log(names)

//unshift()          ------add element in first index

// let a4=names.unshift("addy")
// console.log(a4)
// console.log(names)

//includes()        -------- if element is present gives a boolen value

// let a5=names.includes("kabir")
// console.log(a5)
// console.log(names)

//indexof()

// let a6=names.indexOf("kabir")
// console.log(a6)
// console.log(names)

//length 
 
// console.log(names.length)
// let a7 = names.length
// console.log(a7)

// // reverse

// let a8 = names.reverse()
// console.log(a8)
// console.log(names)

// //map()

// let number = [2,4,6,8,10,12,14,16,18,20]
// //add4 ==> [6,8,10,14,16,18,20,22,24]

// let add4=number.map(function (element, index, array) {
//    return  element+4
// })
// console.log(add4)

// //filter()
// 1.

// let number1 = [20,30,40,50,60,70,80,90,100,110,120]
// //>60

// let greter60=number1.filter(function(element,index,array){
//    return element>60
// })
// console.log(greter60)

// 2.

// let arrey = [11,-22,-64,23,-6,7,100,-20]

// let positive = arrey.filter(function(el,index,arr){
//     return el > 0
// })

// console.log(positive)

// let negative = arrey.filter(function(el,index,arr){
//     return el < 0
// })

// console.log(negative)

//reduce()
// 1.
// let marks = [2, 3, 4, 5, 6, 7, 8, 9]

// let sum = marks.reduce(function (acc, element, index, array) {
//    return acc + element
// },0)

// console.log(sum)

// 2.
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


//forEach()


// let student=["vrushali","sanjeet","kabir","shruti"]

// //welcome vrushali
// //welcome sanjeet
// //welcom kabir
// //welcome shruti

// for(let i=0;i<student.length;i++){
//    console.log("welcome " +student[i])
// }

// student.forEach(function(el,index,arr){
//    console.log("welcome "+el)
// })

//some()

// let arrey=[1,11,111,1111,11111]
// //> 100 true

// let A=arrey.some(function(el,index,arr){
//    return el>100
// })
// console.log(A)

//every()

// let arrey=[1,11,111,1111,11111]
//  let B=arrey.every(function(el,index,arr){
//        return el>100
//     })
//     console.log(B)


 //filter

//               0  1  2  3  4  5   6  7  8  9
// let names = [11,22,33,44,55,66,77,88,99,100]
// // [55,77,88,88,99,100]

// let C = names.filter(function(el){
//     return el > 50
// })
// console.log(C)

// find 

            //   0  1  2  3  4  5   6  7  8  9
// let names = [11,22,33,44,55,66,77,88,99,100]
// let D = names.find(function(el){
//     return el > 50
// })
// console.log(D)


// findindex 
//               0  1  2  3  4  5   6  7  8  9
// let names = [11,22,33,44,55,66,77,88,99,100]
// let E = names.findIndex(function(el){
//     return el > 50
// })
// console.log(E)

// slice  

//                 0          1       2        3        4
// let color = ["orange","pineapple","kiwi,"papaya","mango"]
//               -5         -4        -3       -2     -1
// console.log(color[0])

// let A = color.slice(1)
// let B = color.slice(1,4)
// console.log(color.slice(-3))
// console.log(color.slice(-4))
// console.log(color.slice(-5))
// console.log(color.slice(-4,-3))
// console.log(color.slice(-5,-1))
// console.log(color.slice(4))
// console.log(color.slice(5))  //empty arrey
// console.log(color.slice(2)
// console.log(color.slice(0,3))


// flat()

//     //                   0                            1                                2
//     //           0          1       2        0       1           2         0         1           2
// let fruits = [["apple","banana","grape"],["orange","pineapple","kiwi"],["mango","watermelon","papaya"]]
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[1][2])
// console.log(fruits[1][1])
// console.log(fruits[2][0])
// console.log(fruits[0][1])

// console.log(fruits[2][2])
// console.log(fruits[1][2])

// let A = fruits.flat()
// console.log(A)

// // 2. flat()
//                    0                    1                     2
//                0        1          0         1          0          1
// let statesA = [["NAGPUR","WARDHA"],["JAIPUR","UDAIPUR"],["BANGLORE","MYSORE"]]
// let X = statesA.flat()
// console.log(X)



// at()
// let calender= ["jan","feb","march","april","may","june"]

// //console.log(calander[-2])
// let C= calender.at(2)
// console.log(C)

// // // join()
// let details = ["vrushali","patil","8530420563"]
// console.log(details)
// let D = details.join(' *** ')
// console.log(D)                              //------string
// console.log(typeof details)                 //------object

// //concat()

// let numbersA = [11,22,33]
// let numbersB = [44,55,66]
// let E= numbersA.concat(numbersB)
// console.log(E)


// let h = ["pune","chennai","banglore"]
// h.sort()
// console.log(h)

