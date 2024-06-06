//1.
// function main() {
//     console.log("A");
//     setTimeout(function print() {
//       console.log("B");
//     }, 0);
//     console.log("C");
//   }
//   main();
/// output: A,C,B


//2.
for(let i = 0; i<10; i++){
  setTimeout(()=> {console.log(i)}, 5000)
}
///output: print 0 to 9 Number after 5 sec delay

//3.
// for(var i =0; i<10; i++){
//   setTimeout(() => {console.log(i)}, 5000)
// }
///output: print 10 Number 10 time after 5 sec delay , var condition take last digit 
