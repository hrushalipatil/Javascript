// // object literal
// // let vrushali = {
// //     firstName:"vrushali",
// //     lastName:"patil",
// //     age:34,
// //     rollNo:34

// // }

// // let sanjeet = {
// //     firstName:"sanjeet",
// //     lastName:"wandhare",
// //     age:24,
// //     rollNo:14

// // }


// // ------------------new -create new object
// class Person {

//     firstName
//     lastName
//     age 
//     rollNo

// }
// // let vrushali = new Person()
// // console.log(vrushali)
// // vrushali.firstName = "sashi"
// // vrushali.lastName = "kadu"
// // vrushali.age = 12
// // vrushali.rollNo = 34
// // console.log(vrushali)

// // ------------------------------constructor
// class Animal{
//     constructor(name){ 
//         this.name= name

// }
//      fly(){
//         console.log("m flyng")
//      }

// }
// let a=new Animal("bruno")
// a.fly()
// console.log(a)



// // class Employee {
// //     constructor(firstName,lastName,age,salary){
// //         this.firstName =firstName
// //         this.lastName = lastName
// //         this.age = age 
// //         this.salary  = salary
// //     }
// // }
// // let vrushali = new Employee("vrushali","patil",34,500000)
// // let sanjeet= new Employee("sanjeet","wandhare",31,200000)
// // console.log(vrushali)
// // console.log(sanjeet)

// class Human {
    
//     setFirstName(fn){
//         this.firstName = fn 
//     }
//     setLastName(ln){
//         this.lastName = ln 
//     }
//     setAge(ag){
//         this.age = ag
//     }
//     setRollNo(rn){
//         this.rollNo = rn 
//     }
// }

// let vrushali = new Human()
// console.log(vrushali)           // Human {}
// vrushali.setFirstName("vrushaliB")
// console.log(vrushali)           // Human { firstName: 'vrushaliB' }



class Employee{
    constructor(name){
        this.name =name
    }
}

class manager extends Employee {
    constructor(name,department){
        super(name)
        this.department = department
    }
}
let E= new manager("vrushali","web development")
console.log(E)  // manager { name: 'vrushali', department: 'web development' }




