
// 1

var arr = [1,18,7,18,9,21,33,576,145]
// first step we need to initalize the 1st element 

var greater=arr[0]
// then for loop :
for (var i = 1; i < arr.length; i++) {
    if (arr[i] > greater) {
        greater = arr[i] 
    }
}
 

console.log(greater)


var arr = [1,18,7,18,9,21,33,576,145,12333]
var maxNumber = Math.max(...arr)
console.log(maxNumber)

// Output: 576
// Is tareeke mein, Math.max()
//  function ka istemal kiya jaata hai jo sabse bada number deta hai jo diye gaye numbers mein se hai. Hum ...arr ka istemal karte hain, jo spread operator hai, jo array ke har element ko
//  alag-alag arguments ke roop mein pass karta hai.

