
//condition statement

//need ==> single input ==> multiple outcome

//1 condition:
//10>2  => true ( 1 outcome )  ==> false ( 1 outcome)

//if 
//if else
//if else if else
//switch case

//syntax
// if(condtion){
      //statments
// }

// condtion ==> true

// if (1 == '1') {
//     console.log("Hi")
// }

// if (10 < 2) {
//     console.log("10 is greater number")
// }
// else {
//     console.log("false condition")
// }


//tickets
//1 - 5 ==> 10 % discount
//6 -10 ==> 20 % discount
//>10 ==> 30 % discount

//1

// let ticketCount = 10
// if (ticketCount > 0 && ticketCount <= 5) {
//     console.log("You got 10 % discount")
// }
// if (ticketCount > 5 && ticketCount <= 10) {
//     console.log("You got 20 % discount")
// }
// if (ticketCount > 10) {
//     console.log("You got 30 % discount")
// }

//10 sec ==> 30 sec

// let ticketCount = 30
// if (ticketCount > 0 && ticketCount <= 5) {
//     console.log("You got 10 % discount")
// }
// else if (ticketCount > 5 && ticketCount <= 10) {
//     console.log("You got 20 % discount")
// }
// else if (ticketCount > 10) {
//     console.log("You got 30 % discount")
// }
// else {
//     console.log("invalid input")
// }

//20 sec

//if we take only if block to check multiple condition then it will check all if block so 
// time of program execution get increased

//Program 2

// let score = 100
// if (score > 90) {
//     console.log("Best Player")
// }
// if (score > 70) {
//     console.log("Better player")
// }
// if (score > 50) {
//     console.log("Good player")
// }

//Program 3

// let score = -10
// if (score > 90) {
//     console.log("Best Player")
// }
// else if (score > 70) {
//     console.log("Better player")
// }
// else if (score > 50) {
//     console.log("Good player")
// }
// else{
//     console.log("please select correct score")
// }


//program 4

// let a=10
// let b=20
// if(a>b){
//     console.log("A is greater number")
// }
// else{
//     console.log("B is greater number")
// }


// let a = 10
// let b = 10
// if (a > b) {
//     console.log("A is greater number")
// }
// else if (b > a) {
//     console.log("B is greater number")
// }
// else {
//     console.log("both numbers are equal")
// }

// let a=1000
// let b=20
// let c=150

// if(a>b && a>c){
//     console.log("A is greater")
// }
// else if(b>a && b>c){
//     console.log("B is greater number")
// }
// else{
//     console.log("C is greater number")
// }



let student = 30
// if (student > 5) {
//     console.log("Class started")
// }
// else {
//     console.log("Please wait for 2 more min")
// }

//single condition  ==> ternary operator

//condition ? true : false

student > 5 ? console.log("Class started") : console.log("Please wait for 2 more min")

let printOutput = student > 5 ? "Class started" : "Please wait for 2 more min"
console.log(printOutput)