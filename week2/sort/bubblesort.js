function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for(let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        
    } while (swapped)
    return arr
}
const arr=[2,4,5,5,6,7,3,52,-3,-5,6,0]
console.log(bubbleSort(arr))