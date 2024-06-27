//1. Palindrome
function isPalindrome(input) {
   
    const str = String(input);
    const cleanedStr = str.replace(/[\W_]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}
console.log(isPalindrome("5"));
// plaindrome means value are reverse same like 12321 ----- 12321 same
