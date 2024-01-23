function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let pivot = arr[arr.length - 1];
    console.log(pivot);
    let left = []
    let right = []
    for (let i = 0; i < arr.length-1; i++) { 
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

const arr = [2, 4, 5, 5, 6, 7, 3, 52, -3, -5, 6, 0];
console.log(quickSort(arr));