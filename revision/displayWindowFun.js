let info={
    FirstName:"vrushali",
    LastName:"patil",
    DisplayName:function(){
        console.log(this.FirstName+this.LastName)//vrushalipatil 
        let DisplayName2=function(){
            console.log(this.FirstName+this.LastName)
        }   
        DisplayName2()

    }
}
info.DisplayName()


var firsName = "vrushali"
var lastName = "patil"
console.log(window.firstName)
console.log(window.lastName)

let info1 = {
    firsName:"aboli",
    lastName:"wandhare",
    displayName:function(){
        // this --- aboliii
        console.log(this.firsName + this.lastName) // aboliwandhare
        let displayName2 = function(){
            // this ---> window
            console.log(this.firsName + this.lastName) // vrushalipatil
        }
        displayName2()
    }
}
amol.displayName()


// program 2
// let amol = {
//     firsName:"amol",
//     lastName:"rao",
//     displayName:function(){
//         // this --- amol
//         console.log(this.firsName + this.lastName) // amolrao
//         let displayName2 = () =>{
//             // this - amol
//             console.log(this.firsName + this.lastName) // amolrao
//         }
//         displayName2()
//     }
// }
// amol.displayName()



// let  amol = {
//     firsName:"amol",
//     lastName:"rao",
//     displayName:()=>{
//         // this --- window
//         console.log(this.firsName + this.lastName) // 
//         let displayName2 = () =>{
//             // this - window
//             console.log(this.firsName + this.lastName) // 
//         }
//         displayName2()
//     }
// }
// amol.displayName()