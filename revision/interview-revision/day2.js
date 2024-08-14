// 1. Using Set and sort()
let arr = [11, 22, 11, 22, 33, 44, 55, 66];

// Create a Set from the array to remove duplicates
let unique_elements = new Set(arr);

// Convert the Set back to an array
let unique_array = Array.from(unique_elements);

console.log(unique_array);  // Output: [11, 22, 33, 44, 55, 66]

// 2. Using a loop

// let arr = [11, 22, 11, 22, 33, 44, 55, 66];

// // Duplicates hatane ke liye ek empty list aur loop ka use karo
// let unique_list = [];
// for (let element of arr) {
//     if (!unique_list.includes(element)) {
//         unique_list.push(element);
//     }
// }

// // List ko sort karo
// unique_list.sort((a, b) => a - b);

// console.log(unique_list);  // Output: [11, 22, 33, 44, 55, 66]
// // 3. Using Object.keys() and sort()


// let arr = [11, 22, 11, 22, 33, 44, 55, 66];

// // Duplicates hatane ke liye Object ka use karo
// let unique_obj = {};
// arr.forEach(element => {
//     unique_obj[element] = true;
// });

// // Object.keys() ka use kar ke unique values ki list banao
// let unique_list = Object.keys(unique_obj).map(Number);

// // List ko sort karo
// unique_list.sort((a, b) => a - b);

// console.log(unique_list);  // Output: [11, 22, 33, 44, 55, 66]


