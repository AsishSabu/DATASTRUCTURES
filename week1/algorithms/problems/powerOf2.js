// function powerOf2(n) {
//     if (n < 1) {
//         return false;
//     }
//     while (n > 1) {
//         if (n % 2 !== 0) {
//          return false;
//         }
//         n = n / 2;
//     }
//     return true;
// }
// console.log(powerOf2(1));
// console.log(powerOf2(2));
// console.log(powerOf2(3));
// console.log(powerOf2(5));
// console.log(powerOf2(8));

function powerOf2bitwise(n) { 
    if (n < 1) {
        return false;
    }
    return (n & (n - 1)) == 0;

}

console.log(powerOf2bitwise(1));
console.log(powerOf2bitwise(2));
console.log(powerOf2bitwise(3));
console.log(powerOf2bitwise(5));
console.log(powerOf2bitwise(8));

