// function reverse(str) {
//     if (str.length <= 0) {
//         return str
//     }
//     return reverse(str.substring(1)+str[0])
// }

// function sum(arr,index=0) {
//     if (index === arr.length) {
//         return 0
//     }

//     return arr[index]+sum(arr,index+1)
// }


// console.log(sum([1, 2, 3, 4, 5, 6]));


// secondLargest(){
//     let current = this.head.next;
//     let second=this.head
//     while (current) {
//         second=second.next;
//         current=current.next;
//     }
//   return second
// }

// function count(str, value) {
//     let count=0
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == value) {
//             count++;
//         }
//     }
//     return count
// }


// console.log(count(aahhidgaaahjiaaaabbybboo,a));
// function search(arr,value){
// let leftindex = 0;
// let rightIndex = arr.length - 1
// if (leftindex <= rightIndex) {
//     let middleIndex = Math.floor((leftindex + rightIndex) / 2);
//     if (arr[middleIndex == value]) {
//         return middleIndex
//     }
//     if (value < arr[middleIndex]) {
//         rightIndex=middleIndex-1
//     } else {
//         leftindex=middleIndex+1
//     }
//     }
//     return -1
// }

// function linear(arr, value) {
//     for (let i = 0; i < arr.length; i++) {
//         if(ar)
//     }
// }


// middle(){
//     let current = this.head
//     let checker = this.head;
//     while (checker.next) {
//         current = current.next
//         checker=checker.next.next
//     }
//     return current
// }

// [1,2,3,4,5,6,7,8,9,10]