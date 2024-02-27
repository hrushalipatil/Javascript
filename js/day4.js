
//4.function with para and with return type
// function greeting(greet) {
//     return greet
// }
// let s1=greeting("Hello All")
// console.log(s1)
// let a1=greeting(12-11)
// console.log(a1)

//without para without return type
// function greet2() {
//     console.log("bye")
// }
// greet2()

//with para without returntype
// function greet3(para){
//     console.log(para)
// }
// greet3('welcome')

//Datatype

// let a=10

//type of variable

// //person
//introvert  ==> clam, less social, let outting
//extrovert  ==> loud, more social , outing


// //Hdfc, icici, SBI  ==> Bank

// //mayuri, pooja, sandip, vaibhav ==> person

// //mercedes, nano, thar, creta==> vehical


// //1. Number

// let p1 = 0.123
// console.log(p1) //10
// console.log(typeof p1)

// //0, 10, -67, 2.90  ==>number


//2. string
//char,text, sentence

// let firstName = "Mayuri"
// let fn = 'vru'
// let fn1 = `vru`

// let n1 = "100"
// console.log(typeof firstName)
// console.log(typeof fn)
// console.log(typeof fn1)
// console.log(typeof n1)

// //"", " ", "A", 'javascript', 'I love javascript','100', '@3452662'  ==>string

//3. boolean  ==> true /false
// let y1 = true
// console.log(y1)
// console.log(typeof y1)

// let y2=false
// console.log(typeof y2)

// let y3="true"
// console.log(typeof y3)


//arithmatic operator ==> +, -, *, /, %

//comparision operator  ==> <, >, <=, >=,==, !=, ===, !==
//entity compare entity ==> boolean  => true / false


// console.log(typeof 5) //number
// console.log(typeof '5') //string

//== , !=   =>    value              5 , "5"  => dynamic comparision operator
//===, !==  => value and datatype  => strict comparison operator

// console.log(10 > 2)  //true 
// console.log(20 < 100)//true
// console.log(30 >= 50)//false
// console.log(30 >= 30) //true
// console.log(6 <= 6) //true
// console.log(66 <= 23) //false
// console.log(20 == 20)//true
// console.log(20 == '20')//true
// console.log(8 != '8')//false
// console.log(33 ==='33')//false
// console.log(45 !== '60')//true
// console.log(7 !== '7')//true


//logical

//AND
//OR
//NOT

//comparision operator==> boolean  ==> true/false

// console.log(12==='12')  //false

// console.log(45!='45') //false

// console.log(12=='12')//true

// console.log(11===11)//true


//Logical operator

//1. AND(&&)  => multiplication
//true && true ==> true
//true && false ==> false
//false && true  ==> false
//false && falase ==> false


// console.log(7==7  && 8!=='8') //  ==> true && true ==> true

// console.log(45==='45' && 34<=100)  //===> false && true ==> false

// console.log(12=='12' && 34!='34')  //===>  true && false ==> false

// console.log(-3>0 && 12>=35)  //===> false && false ==> false



//2. OR(||)  ==> addition
//True || True ==> True
//True || False ==> True
//False || True ==> True
//False || False ==> False

// console.log(7==7 || 8!=='8') //==> true || true  ==> True

// console.log(37==37 || 45!='45')  //true || false ==> True

// console.log(56==='56' || 34=='34') //false || true ==> True

// console.log(12==='12' || 10!='10') //false || false ==> false

//2. NOT(!)

// true ==> !true  => false
// false ==> !false ==> true

// console.log(!(12>100))  // !false  => true

// console.log(!(0>-12 || 23!=='34'))  //==>   true || true  ==> !true  => false

// console.log(!(34!=='34' && 45<='45') )//  true  && True ==> !true   => false

console.log(45 <= '45') //true