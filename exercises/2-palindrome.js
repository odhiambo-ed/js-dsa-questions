// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. 

// --- Examples:
//   palindrome("kayak") === true
//   palindrome("madam") === true
//   palindrome("codingmoney") === false

function palindrome(str) {
    let reversed = str.split('').reverse().join('');

    if (reversed === str) {
        return true;
    }
}

console.log(palindrome('kayak'));
