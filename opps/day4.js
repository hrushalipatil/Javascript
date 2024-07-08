// Inheritance

//program 1
// class Renter{
//     firstName="vrushali"
//     lastname="patil"
//     aadharnumber=885544
   
//     displayName(){
//        console.log(`Hey, my name is ${this.firstName} and my surname is ${this.lastname}`)
//     }
// }

// class Owner extends Renter{
//     payment =100000
//     displayPayment(){
//         console.log(`my payment mode is online and i paid ${this.payment} rs per month`)
//     }
// }

// let A= new Owner()
// console.log(A.firstName)     // vrushali
// console.log(A.lastname)     // patil
// console.log(A.aadharnumber) // 886644
// console.log(A.payment)      // 100000
// A.displayPayment()        // my payment mode is online and i paid 100000 rs per month
// A.displayName()           // Hey, my name is vrushali and my surname is patil



// program 2
// single inhertance
class Renter{
    constructor(firstName,lastname,aadharnumber) {
         this.firstName=firstName
         this.lastname=lastname
         this.aadharnumber=aadharnumber
   }
    displayName(){
       console.log(`Hey, my name is ${this.firstName} and my surname is ${this.lastname}`)
    }
} 


class Owner extends Renter{
    constructor(firstName,lastname,aadharnumber,payment){
        super(firstName,lastname,aadharnumber) 
        this.payment= payment
}
    displayPayment(){
        console.log(`my payment mode is online and i paid ${this.payment} rs per month`)
    }
}

let B = new Owner("vrrushali","wandhare",223344,20000)
console.log(B)
console.log(B.firstName)    //vrrushali
console.log(B.lastname)     // wandhare
console.log(B.aadharnumber) //223344
console.log(B.payment)      // 20000
B.displayPayment()         //my payment mode is online and i paid 20000 rs per month   
B.displayName()            //Hey, my name is vrrushali and my surname is wandhare



// program 3
// multiple inheritance

class Principal{
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }
    displayPrincipal(){
        console.log(`i am principal(${this.firstName} ${this.lastName})of Priyadarshani collage `)
    }
}
class Vice_principal extends Principal  {
    constructor(fn,ln,VPn){
        super(fn,ln)
        this.Vp_name = VPn
    }
    displayVice_Principal() {
        console.log(`i am Viceprincipal(${this.Vp_name})of Priyadarshani collage`)

    }
}

class Teacher extends Vice_principal {
    constructor(fn,ln,VPn,T){
        super(fn,ln,VPn)
        this.TeacherName = T
    }
    displayTeacher(){
        console.log(`i am Teacher(${this.TeacherName})of Priyadarshani collage`)
    }
}

let Vrushali = new Teacher("shekhar","raddy","gautami","tejas")

console.log(Vrushali.firstName)   //shekhar
console.log(Vrushali.lastName)    //raddy
console.log(Vrushali.Vp_name)     //gautami
console.log(Vrushali.TeacherName)  //tejas

Vrushali.displayPrincipal()      //i am principal(shekhar raddy)of Priyadarshani collage
Vrushali.displayVice_Principal() //i am Viceprincipal(gautami)of Priyadarshani collage
Vrushali.displayTeacher()        //i am Teacher(tejas)of Priyadarshani collage


