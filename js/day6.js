//conditional statemenet

//if
//if else
//if else if
//ternary operator==> single line code
//switch case ==> multiple condition


//1-7 days 
//1 ==> monday
//2 tuesday

// //1. switch case without break

// let days = 2
// switch (days) {
//     case 1:
//         console.log("Monday")
//     case 2:
//         console.log("tuesday")
//     case 3:
//         console.log("Wednesday")
//     case 4:
//         console.log("Thrusday")
//     case 5:
//         console.log("Friday")
//     case 6:
//         console.log("Saturday")
//     case 7:
//         console.log("Sunday")
// }



// //2. switch case with break

// let days = 12
// switch (days) {
//     case 1:
//         console.log("Monday")
//         break
//     case 2:
//         console.log("tuesday")
//         break
//     case 3:
//         console.log("Wednesday")
//         break
//     case 4:
//         console.log("Thrusday")
//         break
//     case 5:
//         console.log("Friday")
//         break
//     case 6:
//         console.log("Saturday")
//         break
//     case 7:
//         console.log("Sunday")
//         break
// }


//2. switch case with break and default

// let days = 12
// switch (days) {
//     case 1:
//         console.log("Monday")
//         break
//     case 2:
//         console.log("tuesday")
//         break
//     case 3:
//         console.log("Wednesday")
//         break
//     case 4:
//         console.log("Thrusday")
//         break
//     case 5:
//         console.log("Friday")
//         break
//     case 6:
//         console.log("Saturday")
//         break
//     case 7:
//         console.log("Sunday")
//         break
//     default:
//         console.log("Please enter correct days number")
// }

//Progarm 1
//city
//Pune => MH
//Ujjain=> MP
//Jaipur => RJ


// let city = "Nashik"
// switch (city) {
//     case "Pune":
//         console.log("MH")
//         break
//     case "Ujjain":
//         console.log("MP")
//         break
//     case "Jaipur":
//         console.log("RJ")
//         break
//     default:
//         console.log("Invalid City")
// }


//Progarm 2
//city
//Pune/nashik => MH
//Ujjain/indor=> MP
//Jaipur => RJ

let city = "Jaipur"
switch (city) {
    case "Pune":
    case "Nashik":
    case "Nagpur":
        console.log("MH")
        break
    case "Ujjain":
    case "Indore":
        console.log("MP")
        break
    case "Jaipur":
    default:
        console.log("Invalid City")
}


//Program 3
let country ="Spain"
switch (country) {
    case "France":
    case "Spain":
    case "Netherland":
        console.log("This country is in Europe")
        break
    case "UK":
    default:
        console.log("This country is not in Europe")
}

//months
//3-4-5-6  ==> summer
//7-8-9-10 ==> rainy
//11-12-1-2 ==> winter
