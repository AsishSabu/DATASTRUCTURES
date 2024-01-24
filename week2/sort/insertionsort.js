function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) { 
        let NTI = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > NTI) {
            arr[j + 1] = arr[j];
            j=j-1
        }
        arr[j+1]=NTI
    }
}
const arr = [2, 4, 5, 5, 6, 7, 3, 52, -3, -5, 6, 0];
insertionSort(arr)
console.log(arr)


//Big O=  O(n²)