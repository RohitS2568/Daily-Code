//1. Merge and sort 2 array

function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    return mergedArray.concat(arr1.slice(i)).concat(arr2.slice(j));
}

// Example usage:
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); 
// Output: [1, 2, 3, 4, 5, 6]

console.log(mergeSortedArrays([1, 2, 3], [4, 5, 6])); 
// Output: [1, 2, 3, 4, 5, 6]

console.log(mergeSortedArrays([4, 5, 6], [1, 2, 3])); 
// Output: [1, 2, 3, 4, 5, 6]

console.log(mergeSortedArrays([], [1, 2, 3])); 
// Output: [1, 2, 3]

console.log(mergeSortedArrays([1, 2, 3], [])); 
// Output: [1, 2, 3]

console.log(mergeSortedArrays([], [])); 
// Output: []
