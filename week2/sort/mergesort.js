function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const middleIndex = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0,middleIndex);
    const rightArr =arr.slice(middleIndex);
    return merge(mergeSort(leftArr),mergeSort( rightArr));
}

function merge(leftArr, rightArr) { 
    let sortedArr = []
    while (leftArr.length && rightArr.length) { 
        if (leftArr[0] < rightArr[0]) {
            sortedArr.push(leftArr.shift());
        } else {
            sortedArr.push(rightArr.shift());
        }
    }

    return [...sortedArr,...leftArr,...rightArr]
}

const arr = [2, 4, 5, 5, 6, 7, 3, 52, -3, -5, 6, 0];
console.log(mergeSort(arr));