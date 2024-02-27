//arrey

let x=['komal','diksha','aditi','shruti','saniya']
// console.log(x)
//retrive:
console.log(x[0])
console.log(x[1])
console.log(x[2])
console.log(x[3])

// update
x[0]="vrushali"
console.log(x)

// add:
x.push('maya')
console.log(x)            //end add

x.unshift("daisy")
console.log(x)           //first add

// delete
x.pop()
console.log(x)

x.shift()
console.log(x)

// loop
for (let i=0;i<x.length;i++){
    console.log(i)
    console.log(x[i])

 }


//dict
 let info={
    "name":"vrushali",
    "middlename":"naresh",
    "lastname":"patil",
    "age":23,
    "color":"fair"
 } 


//  dot notation ------

// retrive
console.log(info.name)
console.log(info.middlename)
console.log(info.age)

//add
info.city="nagpur"
console.log(info)

// update
info.name="shruti"
console.log(info)

// delete
 delete info.color
 console.log(info)

 // bracket notation -------

//  retrive
console.log(info["name"])
console.log(info["age"])
console.log(info["city"])

// add
info["fruit"]="apple"
console.log(info)

// update
info["name"]="shruti"
console.log(info)

// delete
delete info["age"]
console.log(info)

//loop
for(let a in info){
    // console.log(a)
    console.log(a,':',info[a])
}