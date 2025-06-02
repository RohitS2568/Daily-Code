//1. Write a code repeat duplicate array/integer without any loop
//1.1 
var a = [1,2,3,4,5]
console.log(a.concat(a));

//1.2 

function duplicate(arr){
    return arr.concat(arr)
}
console.log(duplicate([1,2,3,4]));


//2. find Duplicate
function findDuplicates(nums) {
    const result = [];
    
    for (const num of nums) {
        const index = Math.abs(num) - 1;
        if (nums[index] < 0) {
            result.push(Math.abs(num));
        } else {
            nums[index] = -nums[index];
        }
    }
    
    return result;
}

// Example usage
console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // Output: [2, 3]
console.log(findDuplicates([1, 1, 2]));                // Output: [1]
console.log(findDuplicates([1]));                      // Output: []