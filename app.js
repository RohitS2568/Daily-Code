//1.//object

// var user = {
//              name: "qwerty",
//              age:25
// };

// console.log(user);

//2. simaple program using express

// const express = require("express");
// app = express();
// port = 3000;

// app.get("/",(req,res)=>{
//     res.send("Hello");
// });

// app.listen(port,()=>{
//     console.log("server started")
// })

//3. Promises function 

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




// function reverseString(str){
//     let charArray = str.split('');
//     let reversedArray = charArray.reverse();
//     let reverseString = reversedArray.join(' ');
//     return reverseString;
// }

// console.log(reverseString("hello"))


// function recusriveSum(arr, index = 0){
//     if(index === arr.length) {
//         return 0;

//     }
//     return arr[index]+ recusriveSum(arr, index+1);
// }

// let array = [1,2,3,4,5];
// let sum = recusriveSum(array);
// console.log(sum);
// function recursiveSum(arr, index = 0){
//     if(index === arr.length){
//         return 0;
//     }
//     return arr[index]+ recursiveSum(arr,index+1);
// }

// let array = [1,2];
// let sum = recursiveSum(array)
// console.log(sum);
