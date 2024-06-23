let bufTemp = Buffer.from('Hey!');
console.log(bufTemp.toString()); // Output: Hey!

let bufAlloc = Buffer.alloc(5, 'a');
console.log(bufAlloc.toString()); // Output: aaaaa

bufAlloc.write('Hello');
console.log(bufAlloc.toString()); // Output: Hello

let bufSlice = bufAlloc.slice(0, 3);  // Slice the buffer
console.log(bufSlice.toString());  // Output: Hel