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


//4. Reverse Array Print

// let array = [1,2,3,4,5];

// for(let i = array.length; i >= 0; i--){
//     setTimeout(() => {
//         console.log(array[i]);
//     },3000);
// }


//5. Rverse Number 10 to 0
// for (let i = 0; i <= 10; i++){
//   setTimeout(()=>{
//     console.log(10 - i);
//   }, 3000)
// }

function assendingNum(startNum){
  console.log(startNum);
  let nextNum = startNum +1;
  if(nextNum <= 10){
    assendingNum(nextNum);
  }
}

assendingNum(0);