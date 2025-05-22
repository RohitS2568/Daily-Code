// Question 1
// const arr = [1,2,3,4,5];
// arr.push(6)
// console.log(arr)
// Can we insert new value in this array?
// Reason of that



// Question 2
async function A() {
  console.log("Function A");
  throw new Error("Error from A")
}
async function B() {
  console.log("Function B")
}
async function C() {
  console.log("Function C")
}
async function D() {
  await A();
  await B()
  await C();
}
D();
// what would be output
// Function A
// ERROR!
// /tmp/POeRA35goH/main.js:14
//   throw new Error("Error from A")


// Question 3
//SQL find uniqe data
//SELECT DISTINCT * FROM your_table;



// Question 4
//  What is Aggregation in MongoDB?

// Aggregation in MongoDB is a powerful way to process and transform data from a collection — similar to GROUP BY, JOIN, and WHERE operations in SQL.
// It allows you to:
// Filter documents ($match)
// Group data ($group)
// Sort results ($sort)
// Project specific fields ($project)
// Join collections ($lookup)
// Calculate summaries (count, sum, avg, etc.)

