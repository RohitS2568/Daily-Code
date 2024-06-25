//--------------------------------------------------------------------------
// function Message(name) {
//     console.log("Hello " +name);
// }
// Message("world");

//--------------------------------------------------------------------------
// function checkArray(arr){
//     return typrOf
// }

//---------------------------------------------------------------------------
// function isObject(arr){
//     return typeof arr === 'object'
// }

// console.log(isObject({}));
// console.log(isObject([]));

//----------------------------------------------------------------------------

// function allString(str){
//     str = str.trim();
//     const word = str.split(" ");
//     const checkWord = [];

//     for (let i =0; i < word.length; i++){
//         checkWord.push(word[i].length)
//     }
//     return checkWord;
// }

// const sentance = "Hy rozar";
// const result = allString(sentance)
// console.log(result);
//-------------------------------------------------------------------------------
// function firstWord(str){
//     str = str.trim();
//    const word = str.split(" ");
//    const checkWord = word[0]
//     const wordLength = checkWord.length;
//     return wordLength
// }

//  const sentance = "hy rozar";
//  const result = firstWord(sentance);
//  console.log(result);
//-------------------------------------------------------------------------------
// function revString(str){
// var str = "hello rozar"
//    let reverseArray = str.split(" ").map(function(word){
//    return word.split("").reverse().join("")
//    })
// console.log(reverseArray.join(" "));
//-----------------------------------------------------------------------------

// const myArr = [1, 2, [3, [4, 5, 6], 7], 8];

// function flattenArray(arr) {
//     return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
// }
// const flattenedArr = flattenArray(myArr);
// console.log(flattenedArr);


//-------------------------------------------------------------------------------


var a = [ "apple", "mango", "orange", "apple", "mango"];

var uniqueArray = [...new Set(a)];
uniqueArray.sort((a,b)=> a-b);
var uniqueString = uniqueArray.join(' ');
console.log(uniqueString);

//----------------------------------------------------------------------------------




// 1. Find Duplicate number
function findDulicate(arr){
  let element ={};
  let duplicate = [];

  for (let i = 0; i<arr.length; i++){
      if(element[arr[i]]){
element[arr[i]] += 1;
      }else {
          element[arr[i]] = 1;
      }
  }
  for(let key in element){
      if(element[key]>1){
          duplicate.push(parseInt(key));
      }
  }
  return duplicate 
}

let arr = [1,2,2,3,4,4,5,6,7,6,4];
let duplicates = findDulicate(arr);
console.log(duplicates);
//output : Double repated number [2,4,6]

//-------------------------------------------------------------------------------

//2. find Dulicate array/string

var a = [ 'mango','kiwi', 'apple', 'banana', 'kiwi' ,'mango']

const duplicate = [];
for(let i =0; i<a.length; i++){
  if(a.indexOf(a[i], i+1) !== -1 && duplicate.indexOf((a[i]) === 1))
      {
      duplicate.push(a[i]);
  }
}

console.log(duplicate);
//output  [ 'mango', 'kiwi' ]
//------------------------------------------------------------------------------------
//3. find Dulicate array/string
const uniqeArray = [...new Set(a)];
uniqeArray.length[a];
const uniqueString = uniqeArray.join(" ")
console.log(uniqeArray,uniqueString);

//output  [ 'mango', 'kiwi', 'apple', 'banana' ] mango kiwi apple banana