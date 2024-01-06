function binarySearch(arr, num) {
 return search(arr, num,0,arr.length - 1);
}
function search(arr, num, leftIndex, rightIndex) { 
    if (leftIndex >rightIndex) return -1;
    let middleIndex =Math.floor((leftIndex + rightIndex) / 2);
    if (arr[middleIndex] === num) return middleIndex;
    if (num <arr[middleIndex]) { return search(arr, num, leftIndex, middleIndex -1) }
    else { return search(arr, num, middleIndex +1, rightIndex) }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 10));