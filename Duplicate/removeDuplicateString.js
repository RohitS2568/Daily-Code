//1 Remove Duplicate String
var a = ["mango", "orange", "banana", "apple", "orange", "banana"]

var uniqueArray = [...new Set(a)];
uniqueArray.sort((a,b)=> a-b);
var uniqueString = uniqueArray.join(" ")

console.log(uniqueArray,uniqueString);
//Output: [ 'mango', 'orange', 'banana', 'apple' ] mango orange banana apple

