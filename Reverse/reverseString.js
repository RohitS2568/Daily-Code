
// 1. Reverses String
function reverseString(str) {
    let charArray = str.split('');
    let reverseArray = charArray.reverse();
    let reverseString = reverseArray.join('');

    return reverseString;
}

console.log(reverseString('hello rozar'));
//output:  razor olleh


// 2. Reverse String
var str = 'hello rozar how are you';
let charArray = str.split(" ").map(function(word){
    return word.split("").reverse().join("")
})
console.log(charArray.join(" "));

//output:  olleh razor woh era uoy