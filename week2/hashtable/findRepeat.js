function repeated(input) {
  let hashTable = {};

  for (let i = 0; i < input.length-1; i++) {
      const subString = input.substring(i, i + 2);
       if (subString[0] === subString[1]){
         if (hashTable[subString]) {
           hashTable[subString]++;
         } else {
           hashTable[subString] = 1;
          }
        }
  }
  const repeatedString = Object.fromEntries(
    Object.entries(hashTable).filter(([subString, count]) => count >= 1)
  );
  return repeatedString;
}
const string = "aaobaakjaakkkaakkbb"
console.log(repeated(string));