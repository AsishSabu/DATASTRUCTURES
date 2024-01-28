function removeOdd(arr, index = 0) {
    if (index >= arr.length) {
        return arr;
    }
    if (arr[index] % 2 !== 0) {
        arr.splice(index, 1);

    } else {
        index++
    }
    return removeOdd(arr,index)
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,]
console.log(removeOdd(arr));