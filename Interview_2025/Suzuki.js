// Company Details
  //Company Name: Suzuki Digital
  //Location: Gurugram/hybrid(2day)
  //Date: 12-05-2025
  //Time: 1:00 - 2:00 AM
  //Result: Not cleared


  //1.Print Fizz Buzz

// JavaScript program for Fizz Buzz Problem 
// by checking every integer individually

function fizzBuzz(n) {
    let res = [];

    for (let i = 1; i <= n; ++i) {
    
        // Check if i is divisible by both 3 and 5
        if (i % 3 === 0 && i % 5 === 0) { res.push("FizzBuzz");} 
        else if (i % 3 === 0) {res.push("Fizz");} 
        else if (i % 5 === 0) { res.push("Buzz"); } 
        else { res.push(i.toString()); }
    }
    return res;
}

// Driver code
let n = 20;
let res = fizzBuzz(n);
console.log(res.join(' '));

//output: 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz 



//2. Revers String word
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

// Output: olleh

//2. Revers String latter
function reverseString(str) {
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}

console.log(reverseString("hy rohit"));
//output: yh tihor