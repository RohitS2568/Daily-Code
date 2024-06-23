//1./--------------------//object

// var user = {
//              name: "qwerty",
//              age:25
// };

// console.log(user);

//2.------------------simaple program using express

// const express = require("express");
// app = express();
// port = 3000;

// app.get("/",(req,res)=>{
//     res.send("Hello");
// });

// app.listen(port,()=>{
//     console.log("server started")
// })

//3.--------------------Promises function 

// function fetchData() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("data");
//         },3000)
//     })
// }

// fetchData().then((data)=>{
//     console.log(data);
// }).catch((error)=>{console.log(error)
// })



//4.---------------------Reverse String

// function reverseString(str){
//     let charArray = str.split('');
//     let reversedArray = charArray.reverse();
//     let reverseString = reversedArray.join(' ');
//     return reverseString;
// }

// console.log(reverseString("hello"))


//5.--------------------Recursive Sum
// function recusriveSum(arr, index = 0){
//     if(index === arr.length) {
//         return 0;
//     }
//     return arr[index]+ recusriveSum(arr, index+1);
// }
// let array = [1,2,3,4,5];
// let sum = recusriveSum(array);
// console.log(sum);


//6.-------------------------Event-Emitter 

// const eventEmitter = require('events');
// const emitter = new eventEmitter();

// emitter.on('event-name', (eventArgs) =>{
//     console.log(`event argument ${eventArgs}`)
// })

// emitter.emit('event-name', 'some-payload');

//6.2 ------------------------Event-Emitter


// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//   console.log('an event occurred!');
// });
// myEmitter.emit('event');

//7.-------------------------FS Function
// const fs = require('fs');

//  Perform non-blocking file read operation
// fs.readFile('path/to/file', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

//  Other non-blocking operations continue without waiting for file read
// console.log('This message is displayed immediately.');

//8.----------------------Server Setup HTTP

// Import the http module
// const http = require('http');

// /Define the callback function
// const requestListener = (req, res) => {
//   res.writeHead(200);
//   res.end('Hello, World!');
// };

/// Server initialization

// const server = http.createServer(requestListener);

/// Listen on port 8080
// server.listen(8080);



// let array = [1,2,3,4]

// function assendingNum(startNum){
//     console.log(startNum);
//     let nextNum = startNum -1;
//     if(nextNum > 0){
//       assendingNum(nextNum);
//     }
//   }
  
//   assendingNum(10);

// -----------Write a code try catch block and async await function 

// async function fetchData(url) {
//     try {
//         // Await the fetch call to get a response
//         let response = await fetch(url);
        
//         // Check if the response is not ok (e.g., status is not 200-299)
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         // Await the response to be converted to JSON
//         let data = await response.json();
//         console.log("Fetched data:", data);
//         return data;
//     } catch (error) {
//         // Handle any errors that occur during the fetch or JSON parsing
//         console.error("Error fetching data:", error.message);
//         return null;
//     }
// }

// // Example usage:
// const validURL = "https://jsonplaceholder.typicode.com/posts/1";
// const invalidURL = "https://invalidurl.example.com";

// // Fetching from a valid URL
// fetchData(validURL); // Should log the fetched data

// // Fetching from an invalid URL
// fetchData(invalidURL); // Should log an error message


// function Message(name) {
//     console.log("Hello " +name);
// }

// Message("world");

// let array = [1,2,3,4,5];

// for(let i = 0; i >= 10; i--){
//     setTimeout(() => {
//         console.log(10 - i);
//     }, 3000);
// }

//exp [hello rozar how are you]
//1. olleh razor woh era uoy
//2. uoy era woh razor olleh


//function reverseStr(str)  //str == [hello rozar how are you]

var str = 'hello rozar how are you';
let charArray = str.split(" ").map(function(word){
    return word.split("").reverse().join("")
})
console.log(charArray.join(" "));























// var str = "Hello rozar How are you";
// var savedStr = str.split(" ").map(function(word){
//    return word.split("").reverse().join("")

// })

// console.log(savedStr.join(" "));
