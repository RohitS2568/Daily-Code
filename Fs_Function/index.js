//1. S Function
const fs = require('fs');

// Perform non-blocking file read operation
fs.readFile('path/to/file', (err, data) => {
    if (err) throw err;
    console.log(data);
});

 //Other non-blocking operations continue without waiting for file read
console.log('This message is displayed immediately.');
