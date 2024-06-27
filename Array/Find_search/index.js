//1. Find Missing Number
function findMissingNumber(nums) {
    const n = nums.length;
    const expectedSum = ((n + 1) * (n + 2)) / 2; // sum of first n+1 natural numbers (since one number is missing)
    const actualSum = nums.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}

// Convert a comma-separated string to an array of integers
function stringToArrayOfIntegers(str) {
    return str.split(',').map(Number);
}

// Example usage:
const inputString = "1,2,4,5";
const numsArray = stringToArrayOfIntegers(inputString);
console.log(findMissingNumber(numsArray)); // Output: 3




