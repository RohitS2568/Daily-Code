function chunkArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}

// Example usage:
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); 
// Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

console.log(chunkArray([1, 2, 3, 4, 5], 2)); 
// Output: [[1, 2], [3, 4], [5]]

console.log(chunkArray([1, 2, 3, 4, 5], 4)); 
// Output: [[1, 2, 3, 4], [5]]

console.log(chunkArray([1, 2, 3, 4, 5], 1)); 
// Output: [[1], [2], [3], [4], [5]]

