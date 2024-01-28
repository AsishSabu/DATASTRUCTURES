const jaggedArray = [
  [1, 2, 3], // Inner array 1 with 3 elements
  [4, 5], // Inner array 2 with 2 elements
  [6, 7, 8, 9], // Inner array 3 with 4 elements
];

// Accessing elements in the jagged array
console.log(jaggedArray[0][1]); // Output: 2
console.log(jaggedArray[1][0]); // Output: 4
console.log(jaggedArray[2][2]); // Output: 8
console.log(jaggedArray[0]); // Output:[1, 2, 3];


/* jagged array is the array of arrays which has different length
it more memory efficient than rectangular arrays */