let headOne = document.querySelector("h1")
let ButtonTag = document.querySelector('Button')
let InputText = document.querySelector("input")

// 1.
// headOne.addEventListener("click",function(){
//     headOne.style.color = "purple"
// })

// 2.
// ButtonTag.addEventListener("click",function(){
//     headOne.style.color = "pink"
    
// })

// 3.

// ButtonTag.addEventListener("click",function(){
//     let ColorText =InputText.value
//     headOne.style.color = ColorText
//     InputText.value = " "
// })


// 4.
ButtonTag.addEventListener("click",function(){
    let text = InputText.value 
    let newLi = document.createElement('ol')
    newLi.textContent=text
    olList.appendChild(newLi)
    InputText.value = " "
})


