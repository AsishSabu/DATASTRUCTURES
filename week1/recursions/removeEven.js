function removeEven(arr, index = arr.length - 1) {
    if (index <= 0) {
        return arr
    }
    if (arr[index] % 2 == 0) {
        arr.splice(index,1)
    }
    return removeEven(arr,index-1)

}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(removeEven(arr))