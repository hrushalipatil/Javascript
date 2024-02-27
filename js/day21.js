
// //String

// //1. toUpperCase()
// //2. toLoweCase()
// //3. indexOf()
// //4. includes()
// //5. trim()
// //6. trimStart()
// //7. trimEnd()
// //8. startsWith()
// //9. endsWith()

// //length

// //10. slice()
// //action => break string as per start and end
// //return => new string

// let firstName="Shree Ganesh"

// //-12 -11 -10 -9 -8  -7  -6  -5  -4  -3  -2   -1
// //S   h   r   e   e       G   a   n   e   s   h
// //0   1   2   3   4   5   6   7   8   9  10   11

// //left to right ==> got ans
// //right to left ==> blank string

// //string.slice(startPosition, endPosition)
// //endposition optinal
// //endpostion number always less than 1

// let a1=firstName.slice(6)
// console.log(a1)                           //Ganesh

// let a2=firstName.slice(4,10)
// console.log(a2)                            //e Gane

// console.log(firstName.slice(-3))          //esh

// console.log(firstName.slice(9,4))         //""

// console.log(firstName.slice(-9,-3))      //ee Gan

// console.log(firstName.slice(2,-4))       //ree Ga

// //11. split()

// //-12 -11 -10 -9 -8  -7  -6  -5  -4  -3  -2   -1
// //S   h   r   e   e       G   a   n   e   s   h
// //0   1   2   3   4   5   6   7   8   9  10   11

// //action => break string at given element, char, space
// //return => array

// let firstName="Shree Ganesh"

// let a12=firstName.split(" ")
//                                      //["Shree", "Ganesh"]
// console.log(a12)

// let lastName="katwe m"
// let a13=lastName.split('a')
// console.log(a13)                     //["k" ,'twe m]


let price="900$123"
console.log(price.split('$'))

let alphabates= "abcdef1234igkm"         // store by sting  
console.log(alphabates.split('f'))      // split at f 


 