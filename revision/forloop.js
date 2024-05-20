// // table of 2
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }


// // table of 2 --- in reverse
// for (let i = 20; i >= 2; i--) {   
//     if (i % 2 == 0) {           
//         console.log(i)
//     }
// }

// // table of 3
// for (let i = 3; i <= 30; i++) {
//     if (i % 3 == 0) {
//         console.log(i)
// }
// }
// for(let i=3;i<=30;i=i+3){
//     console.log(i)
// }


// //table in 3 --- reverse

// for(let i=30;i>=3;i=i-3){
//     console.log(i)
// }


// // factorial of 4
// let n = 4;
// let factorial = 1;

// for (let i = 1; i <= n; i++) {
//     factorial = factorial*i;
// }
// console.log(factorial)


// -------------------------------------------------
// while loop

//1,2,3 break

let i=1
while(i<=5){
    console.log(i)
    if(i==3){
        break
    }
    i++
}
console.log("----")
// output:   1,2,3

//  same like above but different 1 2 break
let k=1
while(k<=5){
    if(k==3){
        break
    }
    console.log(k)
    k++
}
// output: 1,2

console.log("----")

// with while table of two

let m=2
while(m<=20){
    console.log(m)
    m=m+2
}

 // output: 2,4,6,8,10,12,14,16,18,20

 console.log("----")

 let n=50
 while(n>=5){
    console.log(n)
    n=n-5
 }

// output : reverse table of 5

