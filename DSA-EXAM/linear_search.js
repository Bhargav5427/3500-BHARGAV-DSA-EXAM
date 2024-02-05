let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let value = 7;

function li(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}
let data = li(array, value);

if (data === true) {
    console.log("element is exist in array");
}
else {
    console.log("element is not exist in array");
}