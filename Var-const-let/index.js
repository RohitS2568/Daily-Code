// 1.
// console.log(a);
// var a = 10;
/// output: undefined

// 2.
// var a = 10;
// console.log(a)
/// output: 10

// 3.
// console.log(a);
// let a = 10;
/// output: ReferenceError: Cannot access 'a' before initialization

// 4.
// let a = 10;
// console.log(a)
/// output: 10;

// 5.
// const obj = {num:5};
// obj.num = 15;
// console.log(obj);
/// output: {num: 15}

//6.
// const arr = ["name"];
// const obj = {};
// obj.name = "Node";
// obj[arr] = "React";
// console.log(obj.name);
///output: React

//7.
// const arr = [{}, '2', 'hello'];
// delete arr[0];

// console.log(arr.length);
// console.log(arr);

//8. const use case

// const user = "rohit";
// user = "xyz"
// console.log(user);

//output
// user = "xyz"
// TypeError: Assignment to constant variable.

//9. var use case

// var user = "rohit";

// user = "xyz";
// console.log(user)

//output
//xyz

// 10.let use case

// let user = "rohit";

// user = "xyz";
// console.log(user)

//output
//xyz