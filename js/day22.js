//
let details = ['vrushali','patil','nagpur',23,8530420563]

// retrive
console.log(details[0])


// // add
// push --add in last
details.push("apple")            // [ 'vrushali', 'patil', 'nagpur', 23, 8530420563, 'apple' ]
console.log(details)

// // unshift--- add at first
details.unshift("june")
console.log(details)            // ['june','vrushali','patil', 'nagpur',23,8530420563,'apple']


// update
details[0]="shruti"
console.log(details)           // ['shruti', 'vrushali','patil','nagpur',23,8530420563,'apple']


// delete
// pop ----defult last value remove
details.pop()
console.log(details)          // [ 'shruti', 'vrushali', 'patil', 'nagpur', 23, 8530420563 ]

// shift ----remove first element
details.shift()
console.log(details)          // [ 'vrushali', 'patil', 'nagpur', 23, 8530420563 ]

//splice
details.splice(2,1)
console.log(details)         // [ 'vrushali', 'patil', 23, 8530420563 ]

// details.splice(2)
// console.log(details)          // [ 'vrushali', 'patil' ]

// details.splice(1,1) 
// console.log(details)           // [ 'vrushali', 'nagpur', 23, 8530420563 ]     

// ------------------------------------------------------------------------

// object lateral

// let details ={
//     // key:"value"
//     // property:"value"
//     "firstName": "vrushali",
//     "lastName" : "patil",
//     "age"      : 23,
//     "phoneno"  : 8530234563
// }


// object stores the by by index?? NO

// console.log(details[0])   // error

// object allow duplicate keys ?? NO 

// let animals={
//     "Dog" : "woof",
//     "cat" : "meow",
//     "cow" : "hee-haw",
//     "cow" : "Moo"
// }

// console.log(animals)       //{ Dog: 'woof', cat: 'meow', cow: 'Moo' }


let details1 ={
  "firstname": "kabir",
  "surname"   : "wandhare",
   "age"      : 26,
   "color"    : "fair"
}
// console.log(details1)            //{ 'firstname ': 'kabir', surname: 'wandhare', age: 26, color: 'fair' }

 // dot notation and bracket notation

// dot notation : 
// 1. retrive:
console.log(details1.firstname)        //kabir
console.log(details1.age)              // 26

//2.update:
details1.age=27
console.log(details1)                 //{ firstname: 'kabir', surname: 'wandhare', age: 27, color: 'fair' }

details1.color="dark"
console.log(details1)                 // { firstname: 'kabir', surname: 'wandhare', age: 27, color: 'dark' }

// add :
details1.city="nagpur"
console.log(details1)              

details1.phoneno=8530549200222
console.log(details1)

// delete :
delete details1.phoneno
console.log(details1)

// bracket notation:
let details2 ={
    "firstname": "kabir",
    "surname"   : "wandhare",
     "age"      : 26,
     "color"    : "fair"
  }
// retrive
console.log(details2["age"])
console.log(details2["firstname"])
console.log(details2["surname"])
console.log(details2["color"])
// update
details2["firstname"]= "sanjeet"
console.log(details2)
//add
details2["city"]="nagpur"
console.log(details2)
// delete
delete details2["color"]
console.log(details2)

// ----------------------------------------------
let animals=["dog","cat","tiger","elephate"]
for(let i=0;i<=animals.length;i++){
    console.log(i)
    console.log(animals[i])
}



// looping over object (dot notation will not work)
// bracket notation
let biodata={
    "name":"vrushali",
    "middlename":"naresh",
    "surname":"patil",
    "birthdate":21
}

for(x in biodata){
    // console.log(x)
    console.log(x,biodata[x])
}























// // Arrey--------------------------------------------------------------
// let x =["pink","yellow","purple","white","black"]
// // //retrive
// console.log(x[0])           
// console.log(x[1])
// console.log(x[2])
// console.log(x[3])
// // // update
// x[0]="gray"
// console.log(x)
// // //add
// x.push("orange")
// console.log(x)
// x.unshift("red")
// console.log(x)
// // // delete
// x.pop()
// console.log(x)
// x.shift()
// console.log(x)
// // -------------------------------------------------


// //dict-------------------------------------------
// let item={
//     "A":"akash",
//     "B":"bilal",
//     "C":"chaitanya",
//     "D":"denis",
// }

// // dot
// // retrive
// console.log(item.A)
// console.log(item.B)
// console.log(item.C)
// console.log(item.D)
// //add
// item.F="falguni"
// console.log(item)
// // update
// item.A="adarsh"
// console.log(item)
// // delete
// delete item.F
// console.log(item)

// // bracket
// // retrive
// console.log(item['A'])  // note:" " you have to use bofore you retrive
// console.log(item["B"])
// console.log(item["C"])
// console.log(item["D"])
// // update
// item["C"]="chaitanya"
// console.log(item)
// // add
// item["F"]="falguni"
// console.log(item)
// // delete
// delete item["F"]
// console.log(item)