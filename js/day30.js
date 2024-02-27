 // map

// key - value 
// Map also stores the data in key value or property value  pair
// But key or property can be any data type 

let names={
    red:"rose",
    yellow:"sunflower"
}

// obj -----> key ------> string
// map ------ key  -------> key can be any datatype (boolean , number , array)

let mapA = new Map([
    [1 , "vrushali"],
    [2 , "patil"],
    [3 , "nagpur"]
])
console.log(mapA)   //Map(1) { 1 => 'vrushalii' }
                    //Map(2) { 2 => 'patil' }
                   //Map(3)  { 3 => 'nagpur' }


// //clear
// mapA.clear()
// console.log(mapA)    // Map(0) {}

// delete
// mapA.delete(3)
// console.log(mapA)

// has 
let M= mapA.has(1)
console.log(M)    // you have to store value in M and has give boolen value

// set() 
// addng the element
// set does not allow duplicate values 
mapA.set(4,"vrushali wandhare")
console.log(mapA)    
//Map(4) {
//     1 => 'vrushali',
//     2 => 'patil',
//     3 => 'nagpur',
//     4 => 'vrushali wandhare'
//   }
//                      



// loop
// foreach()
mapA.forEach(function(value,key){
    console.log(value,key)
})    
//vrushali 1
// patil 2
// nagpur 3
// vrushali wandhare 4

for(let value of mapA.values()){
console.log(value)
}
// vrushali
// patil
// nagpur
// vrushali wandhare

for(let key of mapA.keys()){
    console.log(key)
}
// 1
// 2
// 3
// 4

for(let [keys,values] of mapA.entries()){
    console.log(keys,values)
}
// 1 vrushali
// 2 patil
// 3 nagpur
// 4 vrushali wandhare

// size 
let N = mapA.size
console.log(N)         // 4

// get
let O = mapA.get(4)
console.log(O)       // vrushali wandhare

let setA = new Set()
console.log(setA)    // Set(0) {}