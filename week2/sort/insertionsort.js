function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++){
        let numberToInsert = arr[i];
        let previousElementIndex = i - 1;
        while (previousElementIndex >= 0 && arr[previousElementIndex ]> numberToInsert) {
            arr[previousElementIndex + 1] = arr[previousElementIndex];
            previousElementIndex=previousElementIndex-1
        }
        arr[previousElementIndex + 1] = numberToInsert;
    } 
    return arr
}
const arr = [2, 4, 5, 5, 6, 7, 3, 52, -3, -5, 6, 0];
console.log(insertionSort(arr));


//Big O=  O(n²)