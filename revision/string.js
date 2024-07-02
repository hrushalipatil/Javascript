let Flower = "lily"
let A=Flower.toUpperCase()
console.log(A)    // LILY

let FlowerB = "lily"
let B=Flower.toLowerCase() 
console.log(B)   // lily


//Method chaining

let city = 'ChAnDrapur'
let C = city.toUpperCase().substr(0,6).toLowerCase()
console.log(C)   // chandr

// Include 
let fruits = "apple mango banana chikoo grapes"

let D = fruits.includes("oo")
console.log(D)     // true

let E = fruits.includes("A")
console.log(E)     // false


// charAt
let city2 = "mumbai"
// 0   1    2   3   4    5  
// m   u    m   b   a    i
let F = city2.charAt(4)
console.log(F)     // a

// indexOf
let G = city2.indexOf("b")
console.log(G)    // 3


// splice
let city3 = "chandrapur"
// 0     1      2     3      4     5     6     7    8     9
// c     h      a     n      d     r     a     p    u     r   
//-10   -9     -8    -7    -6     -5    -4     -3   -2   -1
//city3.slice(startIndex,EndIndex(not included))

console.log(city3.slice(0))   // chandrapur

console.log(city3.slice(3))   // ndrapur

console.log(city3.slice(0,10))  // chandrapur

console.log(city3.slice(1,-2))   // handrap

console.log(city3.slice(-8,-3))   //andra

console.log(city3.slice(-9,8))  // handrap

console.log(city3.slice(-1,-10))  // blank aiaga

// 10-06-24
let sentance = "I am learning js and python ......" 
let sentanceA = sentance.replace("js","django")
console.log(sentanceA)    // I am learning django and python ......


// concat
let Info = "I am learning javascript"
let InfoB = Info.concat(" and python")
console.log(InfoB)      // I am learning javascript and python
console.log(Info)       // I am learning javascript

// reverse
revlist=["vrusha","ali","samir",'jeh']
let K= revlist.reverse()
console.log(K)          // [ 'jeh', 'samir', 'ali', 'vrusha' ]
console.log(revlist)    // [ 'jeh', 'samir', 'ali', 'vrusha' ]

let L = revlist.sort()
console.log(L)          // [ 'ali', 'jeh', 'samir', 'vrusha' ]
console.log(K)          // [ 'ali', 'jeh', 'samir', 'vrusha' ]



// startwith
let M = "ninad";
let N = M.startsWith("n")
let O = M.startsWith("nin")
let P = M.startsWith("Nin")

console.log(N)
console.log(O)
console.log(P)

let Q = M.endsWith("i")
let R = M.endsWith('Ni')

console.log(Q)
console.log(R)

console.log(typeof R)   // boolean


// program 4

let n = " goa "
console.log(n.length) //5
n = n.trimStart()
console.log(n.length)

n = n.trimEnd()
console.log(n.length)
let m = " goa "
m = m.trim()
console.log(m.length)


// ASCII
let color="green"
let chaacii = color.charCodeAt(4)
console.log(chaacii)   // 110

 












