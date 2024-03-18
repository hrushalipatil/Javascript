let butttonA = document.querySelector('button')

let ollist = document.querySelector('ol')

let lilist= document.querySelector('li')
console.log(lilist)
let nodelist = document.querySelectorAll('li')
console.log(nodelist)

butttonA.addEventListener('click',function(){
    ollist.style.color ="pink"
})



for(let i=0;i<nodelist.length;i++){
     console.log(nodelist[i].textContent)

     if(i%2==0){
        nodelist[i].style.color="orange"
        nodelist[i].textContent=nodelist[i].textContent.toUpperCase()
      
    }
     else{
        nodelist[i].style.color = "gray"
        nodelist[i].textContent=nodelist[i].textContent.toUpperCase()


     }

}

// let A=nodelist[i].textContent
// console.log(A)

// let B=nodelist
// print(B)