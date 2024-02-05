let arr = [12, 23, 45, 67, 11, 18, 90, 18, 23, 7, 52];
let value = 12;

function search(arr, value) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            return i;
        }
    }
    return false

}
let data = search(arr, value);

if (data === false) {
    console.log("element is not exist");
}
else {
    console.log("the element is present in the array index = " + data);
}
