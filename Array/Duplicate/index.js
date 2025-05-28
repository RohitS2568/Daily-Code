//1. Remove duplicate and find a sort array
const arr = [9,4,5,2,2,5,7,8,8,1,1];

const uniqeNumber = [...new Set(arr)];

//sort the assending order
uniqeNumber.sort((a,b) => a-b);

//Both constion use 
uniqeNumber.forEach(num => console.log(num));  // Output => 1,2,4,5,7,8,9

console.log(uniqeNumber) // Output => [1,2,4,5,7,8,9]


//2. Get Only Duplicate

const numbers = [1, 2, 2, 3, 3, 4, 5];

const duplicates = numbers.filter((item, index) => 
  numbers.indexOf(item) !== index
);

// Remove duplicates from the duplicates array
const uniqueDuplicates = [...new Set(duplicates)];

console.log(uniqueDuplicates); //output => [2, 3]


