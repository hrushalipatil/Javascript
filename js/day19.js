
// //string

// let city = "pune"

// // p  u  n  e
// // 0  1  2  3

// //javascript

// //string ==> object
// //property and methods

// length

color = "pink"
// console.log(color.length)                     //4

// console.log(color[color.length-1])           // k

// console.log(color[color.length-2])           //n
 
// // loop
let fruits=['mango','banana','kiwi','pineapple','grapes']


// for (let i=0; i<=fruits.length;i++) {
//     console.log(i)                      // 0,1,2,3,4,5
//     console.log(fruits[i])
// }

// for (let i=fruits.length-1;i>=0;i--){
//     console.log(i)
//     console.log(fruits[i])
// }

// // methods :


let city = "pune"

// // p  u  n  e
// // 0  1  2  3

// // let y1=city.toUpperCase()
// // console.log(typeof y1)

// // let y2=city.toLowerCase()
// // console.log(y2)

// let y3=city.indexOf('p')
// console.log(y3)

// let y4=city.indexOf('u')
// console.log(y4)                       // 1

// let y5=city.indexOf('z')
// console.log(y5)                    // -1

// let y6=city.includes('P')
// console.log(y6)                  // false

// let y7=city.includes('u')
// console.log(y7)                  //true


//5. trim()
//action ==> remove space from start and end
//return ==> new string

// let fruit=" Apple "
// console.log(fruit.length)                              //7

// let p1=fruit.trim()
// console.log(p1)                                       //"Apple"
// console.log(p1.length)                              //5

//6. trimStart()
//action => remove space from start
//return => new string

// let fruit=" Apple "
// console.log(fruit.length)                         //7
// let p2=fruit.trimStart()
// console.log(p2)                                //"Apple "
// console.log(p2.length)                            //6

//7.trimEnd()
//action => remove space from end
//return => new string

// let fruit=" Apple "
// console.log(fruit.length)                        //7
// let p6=fruit.trimEnd()
// console.log(p6)                                 //" Apple"
// console.log(p6.length)                          //6


//9. startsWith()


//action => check whether string start with given char , substring
//return => true/false

//char, subString  ==> min, asm

let flower="sunflower"


// let x1=flower.startsWith('J')
// console.log(x1)                                           //false

// let x2=flower.startsWith('unf')
// console.log(x2)                                             //false

// let x3=flower.startsWith('sunf')
// console.log(x3)                                             // true

// let x4=flower.startsWith('s')
// console.log(x4)


// let flower1="jasmin"

// flower1.startsWith('jasm')                              //true
// flower1.startsWith('asmin')                           //false
// flower1.startsWith('min')                             //false
// flower1.startsWith('jmin')                            //false
// flower1.startsWith('J')                             //false
// flower1.startsWith('j')                            //true
// flower1.startsWith('ja')                             //true

//10.endsWith()

//actiom => check whether string end with given char , substring
//return => true/false

// let flower1="jasmin"
// let w1=flower1.endsWith('min')
// console.log(w1)//true

// let w2=flower1.endsWith('Smin')
// console.log(w2)//false

// let w3=flower1.endsWith('n')
// console.log(w3)//true


