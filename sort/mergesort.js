function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}

function merge(leftArray, rightArray) {
    const sortedArray = []
    while (leftArray.length && rightArray.length) {
        if (leftArray[0] <=rightArray[0]) {
            sortedArray.push(leftArray.shift())
        } else {
            sortedArray.push(rightArray.shift())
        }
    }
    return [...sortedArray,...leftArray,...rightArray]
}
const arr = [2, 4, 5, 5, 6, 7, 3, 52, -3, -5, 6, 0];
console.log(mergeSort(arr));