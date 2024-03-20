{/*
</ol>
<h1 id = "one">HeadOne</h1>
<h2 class = "two">HeadTwo</h2>
<ol>
    <li class = "fruits" name = "nm">Apple</li>
    <li class = "fruits" name = "nm">Mango</li>
    <li class = "fruits" name = "nm">Banana</li>
    <li class = "fruits" name = "nm">Grapes</li>
    <li class = "fruits" name = "nm">Chikoo</li>
</ol> 
*/}


//program1
byId=document.querySelector('#one')
console.log(byId)

byId1=document.getElementById('one')
console.log(byId1)

byTagname=document.querySelector('h1')
console.log(byTagname)

// program 2

let className=document.querySelectorAll('.fruits')
console.log(className)  //nodelist
console.log(className.length)  // className.length = 5 after  delete element in inpect console




let className1=document.getElementsByClassName('fruits')
console.log(className1)  // html collection ---->className1.length = 4



// program 3

let byAttr = document.querySelectorAll('li[name= "nm"]')
console.log(byAttr)
let byAttr2 = document.getElementsByName('nm')
console.log(byAttr2)