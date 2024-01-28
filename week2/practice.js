// function insertion(arr) {
//     for (let i = 1; i < arr.length; i++) { 
//         let NTI = arr[i]
//         let j = i - 1
//         while (j >= 0 && arr[j] > NTI) {
//             arr[j + 1] = arr[j]
//             j=j-1
//         }
//         arr[j+1]=NTI
//     }
//     return arr;
// }
function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++){
            if (arr[i]>arr[i+1]) {
                 const temp = arr[i+1];
                 arr[i + 1] = arr[i];
                 arr[i] = temp;
                 swapped = true;
            }
           
        }
    } while (swapped);
    return arr
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
// console.log(insertion([64, 34, 25, 12, 22, 11, 90]));