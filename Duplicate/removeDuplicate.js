//1 Remove Duplicate
var a = ["mango", "orange", "banana", "apple", "orange", "banana"]

var uniqueArray = [...new Set(a)];
uniqueArray.sort((a,b)=> a-b);
var uniqueString = uniqueArray.join(" ")

console.log(uniqueArray,uniqueString);
//Output: [ 'mango', 'orange', 'banana', 'apple' ] mango orange banana apple

//2 

const duplicate = [];
for(let i =0; i < a.length; i++){
    if(a.indexOf(a[i], i+1) !== -1 && duplicate.indexOf((a[i]) === 1)){
duplicate.push(a[i]);
    }
}
console.log(duplicate);

//3.
var a =  [1,2,3,4,5,6,7,8,9,7,6,5,4,3,2,1,2,3,4 ];
const uniqe = [...new Set(a)];
uniqe.sort((a,b)=> a-b)
const uniqueString = uniqe.join(" ");

console.log(uniqueString, uniqe);
//output 1 2 3 4 5 6 7 8 9 
// [
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ]


//4.
var a =  [1,2,3,4,5,6,7,8,9,7,6,5,4,3,2,1,2,3,4 ];
const uniqe1 = [...new Set(a)];
uniqe1.sort((a,b)=> a-b)
const uniqueString2 = uniqe1.join(" ");

console.log(uniqueString2, uniqe1);
//output 1 2 3 4 5 6 7 8 9 
// [
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ]



//5. find Duplicate
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

