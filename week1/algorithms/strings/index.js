// //   ------------------reverse the string-------------------------------------- 
function reverse(str) {
    return str.split("").reverse().join("");
}

let reversed = reverse(originalString);
console.log("reversed   ", reversed);

//---------------------palindrome of the string--------------------------------
function palindrome(str) { 
    let orginal = str.toLowerCase().replace(/[^a-z0-9]/g,"");
    let reverse = orginal.split("").reverse().join("");
    return orginal==reverse
}
let isPalindrome = palindrome("mal aYal,a!m");
console.log("isPalindrome-", isPalindrome);

// //-----------------change first letter as capitalized--------------------------------
let originalString = "hai,asish";
function upperCase(str) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

let upperCased = upperCase(originalString); 
console.log("upperCased-", upperCased);