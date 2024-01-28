function removeDuplicates(arr, index = arr.length - 1) {
    if (index <= 0) {
        return arr;
    }
    if (arr.indexOf(arr[index]) < index) {
        arr.splice(index,1)
    }
  return removeDuplicates(arr,index-1)
}



const arr = [1, 2, 3, 4, 5, 5, 6, 67, 7, 7, 4, 3, 5, 3, 2, 6, 4];
console.log(removeDuplicates(arr));
