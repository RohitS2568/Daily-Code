//1.Find First Non Repted Number
function firstNonRepeatedChar(str) {
    const charCount = {};

    // Count occurrences of each character
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find and return the first non-repeated character
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}

// Example usage:
console.log(firstNonRepeatedChar("swiss"));  // Output: "w"
console.log(firstNonRepeatedChar("racecar"));  // Output: "e"
console.log(firstNonRepeatedChar("aabbcc"));  // Output: null
console.log(firstNonRepeatedChar(""));  // Output: null
console.log(firstNonRepeatedChar("a"));  // Output: "a"
