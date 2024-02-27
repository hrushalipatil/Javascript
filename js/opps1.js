

//object literals

let vrushali = {
    firstName: "vrushali",
    lastName: "patil",
    rollNo: 23,
    skills: ["java", "js"],
    displayName: function () {
        console.log(this.firstName + this.lastName)
    }
}

console.log(vrushali.displayName)//function
vrushali.displayName()

let kabir = {
    firstName: "kabir",
    lastName: "wandhare",
    rollNo: 24,
    skills: ["py", "js"],
    displayName: function () {
        console.log(this.firstName + this.lastName)
    }
}

//100 ==> 100 object

//template

//ES6 

//without constructor
//with constructor
//with function
//set and get keyword


////1. without constructor

class Person {
    firstName
    lastName
    rollNo
    skill
    displayName() {
        console.log(this.firstName + this.lastName)
    }

}

let vrushali1 = new Person()
console.log(vrushali1)
vrushali1.firstName = "vrushali1"
vrushali1.lastName = "patil1"
vrushali1.rollNo = 56
vrushali1.skill = "selenium"
console.log(vrushali1)
vrushali1.displayName()

//2. with constructor

class PersonA {
    //           parameters pass kiye
    constructor(firstName, lastName, rollNo, skill) {
        // property and paramters set liye
        this.firstName = firstName
        this.lastName = lastName
        this.rollNo = rollNo
        this.skill = skill
    }
    // method
    displayName() {
        console.log(this.firstName, this.lastName)
    }
}

let sanjeet = new PersonA("sanjeet", "wandhare", 121, "Java")
console.log(sanjeet)
sanjeet.displayName()


// //3. by using function

class PersonB {
    setFirstName(fn) {
        this.firstName = fn
    }
    setLastName(ln) {
        this.lastName = ln
    }
    setRollNo(rn) {
        this.rollNo = rn
    }
    setSkill(sk) {
        this.skill = sk
    }
    displayName() {
        console.log(this.firstName + this.lastName)
    }
}

let denis = new PersonB()
console.log(denis)
console.log(denis.firstName)
denis.setFirstName("denis")
denis.setLastName("dudani")
denis.setRollNo(1234)
denis.setSkill("Math")
console.log(denis)
denis.displayName()
console.log(denis.firstName)

// denis.setFirstName("litesh")
// console.log(denis.firstName)

//4. by using keywords 

class PersonC {
    set firstName(fn) {
        this.first_Name = fn
    }

    get firstName() {
        return this.first_Name
    }

    set lastName(ln) {
        this.last_Name = ln
    }

    get lastName() {
        return this.last_Name
    }

    set rollNo(rn) {
        this.roll_No = rn
    }

    get rollNo() {
        return this.roll_No
    }

    set skills(sk) {
        this.skill = sk
    }

    get skills() {
        return this.skill
    }

    displayName() {
        console.log(this.first_Name + this.last_Name)
    }
}

let litesh = new PersonC()
console.log(litesh)
litesh.firstName = "litesh"
litesh.lastName = "agrawal"
litesh.rollNo = 78
litesh.skills = "python"
console.log(litesh)

console.log(litesh.firstName)
console.log(litesh.skills)
litesh.displayName()










