
function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }
    var pivot = array[0];
    var left = [];
    var right = [];

    for (var i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left[left.length] = array[i];
        }
        else {
            right[right.length] = array[i];
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
};

let array = [1, 4, 56, 2, 5, 6, 7, 3, 67, 9];
console.log(quickSort(array));