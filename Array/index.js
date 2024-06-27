//1. max Sub Array
function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Example usage:
console.log(maxSubArray([-2, 5, -3, 4, 8, 2, 1, -5, 4])); // Output: 6 (subarray [4, -1, 2, 1])
console.log(maxSubArray([1])); // Output: 1 (subarray [1])
console.log(maxSubArray([5, 4, -1, 7, 8])); // Output: 23 (subarray [5, 4, -1, 7, 8])
console.log(maxSubArray([-1, -2, -3, -4])); 



//2.  Find Intersection of Two Arrays
function arrayIntersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
  
    return [...set1].filter(item => set2.has(item));
  }
  
  var arr1 = "Hello"
  var arr2 = "Roheit"
  
  console.log(arrayIntersection(arr1,arr2)); //output: [ 'e', 'o' ]


//3. Remove Duplicate Number using reduce nethod
let arr = [1, 2, 2, 3, 4, 4, 5, 6, 7, 6, 4];
let uniqueArr = arr.reduce((acc, item) => {
  if (!acc.includes(item)) {
    acc.push(item);
  }
  return acc;
}, []);
console.log(uniqueArr);
//output 1,2,3,4,5,6,7


//4. Find charecter length all

let arr1 = [1, 2, 2, 3, 4, 4, 5, 6, 7, 6, 4,8];

let countMap = new Map();
arr1.forEach(num => {
  if (countMap.has(num)) {
    countMap.set(num, countMap.get(num) + 1);
  } else {
    countMap.set(num, 1);
  }
});


console.log(countMap);
//output Map(8) {1 => 1,2 => 2,3 => 1,4 => 3, 5 => 1,6 => 2, 7 => 1,8 => 1}

