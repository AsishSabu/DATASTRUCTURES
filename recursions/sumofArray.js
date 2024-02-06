function sumOfArray(arr, index=0) {
    if (index === arr.length) {
        return 0;
    } else {
        return arr[index]+sumOfArray(arr, index+1);
    }
}   
console.log(sumOfArray([1, 2, 3, 4, 5, 6, 7]));