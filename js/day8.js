
//variable
//operator
// arithmatic
//logical
//comparison
//function
//conditional statement
// if if else if if else switch case ternary operator

//loop ==> repetative operator based on condition

//for loop

// for(initialization;condition check;incre/decre){
//     statements
// }

//welcome ==> 5 time

// for (let i = 0; i < 5; i++) {
//     console.log("welcome")
// }


//forward loop
//1-5 number

// for (let i = 1; i <= 5; i++) {       //2  3 4  5 6
//     console.log(i)                  //1  2  3  4  5
// }

//i=1

//1<=5 ==> True
//2<=5 ==> true
//3<=5 ==> true
//4<=5 ==> true
//5<=5==> true
//6<=5 ==> false

// //===========================================================
//reverse loop


//5-0

// for (let i = 5; i >= 0; i--) { //4 3 2 1 0 -1
//     console.log(i) //5 4 3 2 1 0
// }

//i=5

//5>=0 ==> true
//4>=0 ==> true
//3>=0 ==> true
//2>=0 ==> true
//1>=0 ==> true
//0>=0 ==> true
//-1>=0 ==> false



//5 table 
// 5 10 15 20------50

//5+5 ==> 10
//10+5 ==> 15

// i++ ==> i=i+1
//i=i+5

// console.log("=============================")
// for (let i = 5; i <= 50; i = i + 5) {
//     console.log(i)
// }

//2. 
// for(let i=1;i<=10;i++){
//     console.log(i*5)
// }

// for (let i = 50; i >= 5; i = i - 5) {
//     console.log(i)
// }


//1-5 number addition
//1
//1+2 => 3
//3+3 ==> 6

//1  => sum
//sum=sum+2==> 3
//sum=sum+3 ==> 6
//sum=sum+4 ==> 10
//sum=sum+5 ==> 15
//sum==> print


// let sum = 0 //1  3  6  10 15
// for (let i = 1; i <= 10; i++) {
//     //console.log(i) //1 2 3 4 5
//     sum = sum + i
// }
// console.log(sum)


//0+1  => 1
//1+2 => 3
//3+3=>  6
//6+4==> 10
//10+5 ==> 15



// let x1=10
// x1=20
// x1=x1+5



//1-5 addition
// let x1 = 0 //1  3  6  10  15
// for (let i = 1; i <= 5; i++) { //2  3  4  5  6
//     console.log(i) //1  2  3  4  5
//      x1 = x1 + i  //0+1   1+2   3+3  6+4  10+5
// }

// console.log(x1)



//x1=0

//i=1

//i<=5
//2<=5
//3<=5 
//4<=5
//5<=5
//6<=5


// for(let i = 1 ; i <= 5 ; i++){ // 2 // 3 // 4 // 5 // 6
//    if(i == 2){
//         continue
//    }
//    console.log(i) // 1 // 3 // 4 // 5
// }


// for(intialization ; conditionCheck ; increment/decrement){
//     // statement
// }

// intilialization
// while(condition){
//     // statement
//     // increment / decrement
// }

// program 1

// let i1 = 1
// while(i1 <= 3){
//     console.log("hello") // "hello" , "hello" , "hello"
//     i1++ ; // 2 // 3 // 4
//     // cntrl + c
// }
// // program 2 print 1 to 5
// let i2 = 1
// while(i2 <= 5){
//     console.log(i2)
//     i2 ++
// }

// // program 3 print 5 to 1
// let i3 = 5
// while(i3 >= 1){
//     console.log(i3)
//     i3 --
// }

// // program 4 table of 2
// let i4 = 2
// while(i4 <= 20){
//     console.log(i4)
//     i4 = i4 + 2
// }

// let i5 = 1
// while(i5<= 10){
//     console.log(i5 * 2)
//     i5 ++
// }

// // program 5 table of 5 in reverse
// let i6 = 50
// while(i6 >= 5){
//     console.log(i6)
//     i6 = i6 - 5
// }


// // break statement with while loop
// let i7 = 1 
// while(i7 <= 5){
//     if(i7 == 3){
//         break
//     }
//     console.log(i7) // 1 // 2
//     i7 ++ //2 // 3
// }


// let i8 = 5
// while(i8 >= 1){
//     if(i8 == 2){
//         break
//     }
//     console.log(i8)
//     i8 --
// }

// let i9 = 1
// while(i9 <= 5){
//     if(i9 == 3){
//         i9 ++ // 4
//         continue
//     }
//     console.log(i9) //1 // 2 // 4 // 5
//     i9 ++ // 2 // 3 // 5 // 6
// }