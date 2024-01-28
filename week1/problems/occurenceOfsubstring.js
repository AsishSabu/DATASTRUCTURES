function occurenceOfSubstr(str, substr) {
    let count = 0;
    let position = str.indexOf(substr);
    while (position !== -1) { 

        count++;
        position = str.indexOf(substr, position + 1);
      
    }
    return count;
}

const inputString = "aaahiaabbaalaaaaoahbaajoaahkkaa";
const substringToFind = "aa";
const occurence = occurenceOfSubstr(inputString, substringToFind)
console.log(occurence);