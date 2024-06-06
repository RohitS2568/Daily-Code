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