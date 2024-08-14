// // program 1

class Student {
    firstName = "Vrushali"
    lastName = "patil"
    adharNo = 8855303457290

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

class Teacher {
    firstName = "vrushali"
    lastName = "patil"
    adharNo = 885303457290
    salary = 10000

    displayName(){
        console.log(this.firstName + this.lastName)
    }
    displaySalary(){
        console.log(this.salary)
    }
}


let A = new Teacher()
console.log(A.firstName)
console.log(A.lastName)
console.log(A.salary)
console.log(A.adharNo)

A.displayName()        //
A.displaySalary()      //10000


let B = new Student()
console.log(B.firstName)   //Vrushali
console.log(B.lastName)    // patil
console.log(B.adharNo)    //8855303457290

B.displayName()      //Vrushalipatil


// // program 2

//INHERITENCE

class DPS_Student {
    firstName = "Vrushali"
    lastName = "wandhare"
    adharNo = 12356677

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

class DPS_Teacher extends DPS_Student {
    salary = 10000
    displaySalary(){
        console.log(this.salary)
    }
}

let C = new DPS_Teacher()
console.log(C.firstName)    //Vrushali
console.log(C.lastName)     // wandhare
console.log(C.adharNo)      // 12356677
console.log(C.salary)     //10000
C.displayName()           // Vrushaliwandhare
C.displaySalary()          // 10000

// program 3
// instance variable with constructor

class Clints {
    constructor(fn,ln,adharNo){
        this.firstName = fn 
        this.lastName = ln 
        this.adharNo = adharNo
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }

}

class Person extends Clints {
    
    salary = 1000
    displaySalary(){
        console.log(this.salary)
    }
}

let D = new Person("Sanjeet  ","Wandhare",123213)
console.log(D.firstName)
console.log(D.lastName)
console.log(D.adharNo)
console.log(D.salary)
D.displayName()
D.displaySalary()


 