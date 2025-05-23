//1.------------permutation 

function nextPermutation(arr) {
    let i = arr.length - 2;

    // Step 1: Find the first decreasing element from the end
    while (i >= 0 && arr[i] >= arr[i + 1]) {
        i--;
    }

    if (i >= 0) {
        // Step 2: Find the next bigger element to the right of i
        let j = arr.length - 1;
        while (arr[j] <= arr[i]) {
            j--;
        }
        // Step 3: Swap them
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    // Step 4: Reverse the part after index i
    let left = i + 1, right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr;
}

console.log(nextPermutation([1, 2, 3])); // [1, 3, 2]
console.log(nextPermutation([3, 2, 1])); // [1, 2, 3]
console.log(nextPermutation([1, 1, 5])); // [1, 5, 1]

//2.------------------ Given array nums containing n numbers of distinct values in the range [0, n], return the only value that is missing from the array.
n * (n + 1) / 2


function missingNumber(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((a, b) => a + b, 0);
    return expectedSum - actualSum;
}

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1]));    // 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // 8


//3.----------Input: candidates = [2, 3, 6, 7], target = 7  
// Output: [[2, 2, 3], [7]]

function combinationSum(candidates, target) {
    const result = [];

    function backtrack(current, start, total) {
        if (total === target) {
            result.push([...current]);
            return;
        }
        if (total > target) return;

        for (let i = start; i < candidates.length; i++) {
            current.push(candidates[i]);
            backtrack(current, i, total + candidates[i]); // Reuse same element
            current.pop();
        }
    }

    backtrack([], 0, 0);
    return result;
}
console.log(combinationSum([2, 3, 6, 7], 7)); // [[2,2,3],[7]]


//4.------- The array nums have an integer element at each position. At each position in the array, the element represents the length of the maximum jump you can from the position.

function canJump(nums) {
    let maxReach = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) return false; // Can't reach this point
        maxReach = Math.max(maxReach, i + nums[i]);
    }

    return true;
}
console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false


//5.----Write a program to print the nth Tribonacci number. A Tribonacci number is a number that has the value by adding the previous 3 values.

// T(0) = 0
// T(1) = 1
// T(2) = 1
// T(n) = T(n-1) + T(n-2) + T(n-3) for n >= 3

function tribonacci(n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    let a = 0, b = 1, c = 1;

    for (let i = 3; i <= n; i++) {
        let next = a + b + c;
        a = b;
        b = c;
        c = next;
    }

    return c;
}
console.log(tribonacci(0)); // 0
console.log(tribonacci(1)); // 1
console.log(tribonacci(2)); // 1
console.log(tribonacci(3)); // 2
console.log(tribonacci(4)); // 4
console.log(tribonacci(10)); // 149


//6. Permutations (nPr) nCr = n! / (r! * (n - r)!)
 function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

function nPr(n, r) {
    return factorial(n) / factorial(n - r);
}

console.log("Permutations (5P3):", nPr(5, 3)); // Output: 60

// Function to find GCD of two numbers
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}


//7. Find HCF of N Elements.... Function to find HCF of an array
function findHCF(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result = gcd(result, arr[i]);
    }
    return result;
}

// Example usage
const nums = [24, 36, 60];
console.log("HCF:", findHCF(nums)); // Output: 12


//8. Find Maximum Occurring Character
 function getMaxOccurringChar(str) {
    const freqMap = {};
    let maxChar = '';
    let maxCount = 0;

    for (let char of str) {
        if (char === ' ') continue; // Ignore spaces
        freqMap[char] = (freqMap[char] || 0) + 1;

        if (freqMap[char] > maxCount) {
            maxCount = freqMap[char];
            maxChar = char;
        }
    }

    return { character: maxChar, count: maxCount };
}

// Example usage
const input = "javascript is awesome";
const result = getMaxOccurringChar(input);
console.log(`Max occurring character: '${result.character}' with count: ${result.count}`);

//9.Find the nᵗʰ Prime Number

// Helper function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Main function to find the nth prime number
function nthPrime(n) {
    let count = 0;
    let num = 1;

    while (count < n) {
        num++;
        if (isPrime(num)) {
            count++;
        }
    }

    return num;
}

// Example usage
console.log(nthPrime(1));  // 2
console.log(nthPrime(5));  // 11
console.log(nthPrime(10)); // 29

//10.-----Write a Javascript program to find the maximum sum subarray //currentMax = max(arr[i], currentMax + arr[i])
function maxSubarraySum(arr) {
    if (arr.length === 0) return 0;

    let maxSoFar = arr[0];
    let currentMax = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentMax = Math.max(arr[i], currentMax + arr[i]);
        maxSoFar = Math.max(maxSoFar, currentMax);
    }

    return maxSoFar;
}

// Example usage
const nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("Maximum Sum Subarray:", maxSubarraySum(nums1)); // Output: 6

//11.-----First Non-Repeated Character
function firstNonRepeatedChar(str) {
    const charCount = {};

    // Count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first character with count 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // If no non-repeated character found
}

// Example usage
const input1 = "swiss";
const result1 = firstNonRepeatedChar(input1);
console.log(result1);  // Output: "w"



