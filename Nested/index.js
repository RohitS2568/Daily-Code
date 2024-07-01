// const myArr = [1, 2, [3, [4, 5, 6], 7], 8];

// exp:1
// const myArr = [1, 2, [3, [4, 5, 6], 7], 8];
// const flattenedArr = myArr.flat(Infinity);
// console.log(flattenedArr);



// exp:2
const myArr = [1, 2, [3, [4, 5, 6], 7], 8];

function flattenArray(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}
const flattenedArr = flattenArray(myArr);
console.log(flattenedArr);


// Creating a nested array representing a matrix
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Function to transpose the matrix
function transposeMatrix(matrix) {
    let transposed = [];
    for (let i = 0; i < matrix[0].length; i++) {
        transposed[i] = [];
        for (let j = 0; j < matrix.length; j++) {
            transposed[i][j] = matrix[j][i];
        }
    }
    return transposed;
}

// Transposing the matrix
let transposedMatrix = transposeMatrix(matrix);

console.log("Original matrix:");
console.log(matrix);

console.log("Transposed matrix:");
console.log(transposedMatrix);

// Function to calculate the sum of all elements in the matrix
function sumOfMatrix(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
        }
    }
    return sum;
}

// Calculating the sum of all elements in the original matrix
let sum = sumOfMatrix(matrix);

console.log("Sum of all elements in the matrix:");
console.log(sum);
