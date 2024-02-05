// add element

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let position = 2;
let element = 25;

for (let j = arr.length; j >= position; j--) {
    arr[j] = arr[j - 1];
}
arr[position - 1] = element;

console.log(arr);

// delete the element

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let index = 6;

// for (let i = index; i < array.length - 1; i++) {
//     array[i] = array[i + 1];
// }
// array.length = array.length - 1;
// console.log(array);