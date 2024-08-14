


// polymorphism ----

// overloading --- same class ,same methodname ,diffrence  signature(parameter)
class Calculator {

    // addition(x,y){
    //     console.log(x+y) 
    // }
    
    // addition(x,y,z){
    //     console.log(x+y+z)
    // }
    
    // addition(x,y,z,a){
    //     console.log(x+y+z+a)
    // }

    addition(x = undefined,y = undefined,z = undefined,a=undefined){
        if(x != undefined && y != undefined && z != undefined && a != undefined){
            console.log(x+y+z+a)
        }
        else if(x != undefined && y != undefined && z != undefined){
            console.log(x+y+z)
        }
        else if(x != undefined && y != undefined){
            console.log(x+y)
        }
    }
}

let a = new Calculator()
a.addition(12,4)
a.addition(12,4,1)
a.addition(12,4,1,3)

// program 2
// Ducking typing 

// class Human {
//     talk(){
//         console.log("Hello hi")
//     }
// }

// class Duck {
//     talk(){
//         console.log("Quack Quack")
//     }
// }

// function printTalk(obj){
//     obj.talk()
// }

// h = new Human()
// d = new Duck()

// printTalk(h)
// printTalk(d)

// program 3

class Human {
    talk(){
        console.log("Hello hi")
    }
}

class Duck {
    talk(){
        console.log("Quack Quack")
    }
}
class Dog {
    bark(){
        console.log("Bow Bow")
    }
}

function printTalk(obj){
    if (typeof obj.bark === 'function') {
        obj.bark();
    } else if (typeof obj.talk === 'function') {
        obj.talk();
    } else {
        console.log("No talk or bark method found");
    }
}

h = new Human()
d = new Duck()
e = new Dog()

// printTalk(h)
// printTalk(d)
printTalk(e)


// --------------------------------------------------------

// // Polymorphism

// //  overriding => diff class, same method name, same signature(parameter)

class WorldBank{
    loan(){
        console.log('I am loan from world Bank')
    }

    save(){
        console.log('I am save from world bank')
    }
}

class SBI extends WorldBank{
    loan(){
        console.log('I am loan from SBI')
    }
    save(){
        console.log('I am save from SBI')
    }
}

class HDFC extends WorldBank{
    loan(){
        console.log('i am loan from HDFC')
    }

    save(){
        console.log('I am save from HDFC')
    }
}

let hdfc=new HDFC()
hdfc.loan()
hdfc.save()

let sbi=new SBI()
sbi.loan()
sbi.save()


// ====================================================