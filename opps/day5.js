class Calculator {
    addition(x, y) {
        console.log(x + y)
    }
    addition(x, y, z) {
        console.log(x + y + z)
    }

    addition(x, y, z, a) {
        console.log(x + y + z + a)
    }

    addition(x, y, z, a) {
        if (x != undefined && y != undefined && z != undefined && a != undefined) {
            console.log(x + y + z + a)
        }
        else if (x != undefined && y != undefined && z != undefined) {
            console.log(x + y + z)
        }
        else if (x != undefined && y != undefined) {
            console.log(x + y)
        }
    }

}

let a = new Calculator()
a.addition(12, 4)    //16
a.addition(12, 4, 3)  //19
a.addition(12, 4, 3, 5) //24


// encapsulation - overloading and overiding
// class WorlBank {
//     save(){
//         console.log("I am save from worldbank")
//     }
//     loan(){
//         console.log("I am loan from worldbank")
//     }
// }

// class SBI extends WorlBank{

//     displayBranch(){
//         console.log("pune branch")
//     }

//     save(){
//         console.log("I am save from SBI")
//     }
//     loan(){
//         console.log("I am loan from SBI")
//     }
// }

// class PNB extends WorlBank{

//     displayBranch(){
//         console.log("nagpur branch")
//     }

//     save(){
//         console.log("I am save from PNB")
//     }
//     loan(){
//         console.log("I am loan from PNB")
//     }
// }


// let sbi = new SBI()
// sbi.loan()             // I am loan from SBI
// sbi.save()             // I am save from SBI
// sbi.displayBranch()    //pune branch

// let pnb = new PNB()
// pnb.loan()            //I am loan from PNB
// pnb.save()            // I am save from PNB
// pnb.displayBranch()   //nagpur branch


