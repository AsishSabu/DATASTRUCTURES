const selectionSort=arr=>{
    for (let i = 0; i < arr.length; i++){
        let small = i;
        for (let j = i + 1; j < arr.length; j++){
            if(arr[j]<arr[small])small=j
        }
        if (small !== i) {
            let temp = arr[small]
            arr[small] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}


const arr = [2, 4, 5, 5, 6, 7, 3, 52, -3, -5, 6, 0];
console.log(selectionSort(arr));
