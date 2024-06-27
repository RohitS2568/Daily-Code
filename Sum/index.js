//1. Sum 2 array
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

// Example usage:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));      // Output: [1, 2]
console.log(twoSum([3, 3], 6));         // Output: [0, 1]
console.log(twoSum([1, 2, 3, 4, 5], 10)); // Output: []




//2. Combination of Sum
function combinationSum(candidates, target) {
    const result = [];
    
    function backtrack(start, current, sum) {
        if (sum === target) {
            result.push([...current]);
            return;
        }
        
        if (sum > target) {
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {
            current.push(candidates[i]);
            backtrack(i, current, sum + candidates[i]);
            current.pop();
        }
    }
    
    backtrack(0, [], 0);
    return result;
}

// Example usage
console.log(combinationSum([2, 3, 6, 7], 7)); // Output: [[2, 2, 3], [7]]
console.log(combinationSum([2, 3, 5], 8));    // Output: [[2, 2, 2, 2], [2, 3, 3], [3, 5]]
console.log(combinationSum([2], 1));          // Output: []
console.log(combinationSum([1], 1));          // Output: [[1]]
console.log(combinationSum([1], 2));          // Output: [[1, 1]]


//3. Merge and Sum 2 array
function mergeAndSumArrays(arr1, arr2) {
    const maxLength = Math.max(arr1.length, arr2.length);
    const result = new Array(maxLength).fill(0);

    for (let i = 0; i < maxLength; i++) {
        if (i < arr1.length) {
            result[i] += arr1[i];
        }
        if (i < arr2.length) {
            result[i] += arr2[i];
        }
    }

    return result;
}

// Example usage
console.log(mergeAndSumArrays([1, 2, 3], [4, 5, 6])); // Output: [5, 7, 9]
console.log(mergeAndSumArrays([1, 2], [4, 5, 6]));    // Output: [5, 7, 6]
console.log(mergeAndSumArrays([1, 2, 3], [4, 5]));    // Output: [5, 7, 3]
console.log(mergeAndSumArrays([], [1, 2, 3]));        // Output: [1, 2, 3]
console.log(mergeAndSumArrays([1, 2, 3], []));        // Output: [1, 2, 3]
