//1.-----------------------------------------------------------------
function main() {
    console.log("A");
    setTimeout(function print() {
      console.log("B");
    }, 0);
    console.log("C");
  }
  main();
/// output: 


//2.--------------------------------------------------------------------
for(let i = 0; i<10; i++){
  setTimeout(()=> {console.log(i)}, 5000)
}
///output:


//3.--------------------------------------------------------------------
for(var i =0; i<10; i++){
  setTimeout(() => {console.log(i)}, 5000)
}
//output:


//4.--------------------------------------------------------------------
let array = [1,2,3,4,5];
for(let i = array.length; i >= 0; i--){
    setTimeout(() => {
        console.log(array[i]);
    },3000);
}
//output: 


//5.---------------------------------------------------------------------
for (let i = 0; i <= 10; i++){
  setTimeout(()=>{
    console.log(10 - i);
  }, 3000)
}
//output


//6.---------------------------------------------------------------------
let count = 10;
(function innerFunc() {
    if(count === 10) {
        let count = 11;
        console.log(count);
    }
    console.log(count);
})();
// output:


//7.---------------------------------------------------------------------
function x(){
    var i = 1;
    setTimeout(function () {
        console.log(i);
    }, 1000);
    console.log("learn");
}
x();
// output:


//8.----------------------------------------------------------------------
function x(){
    for (var i = 1; i <= 10; i++){
      setTimeout(function (){
      console.log(i);
      }, i * 1000);
    }
    console.log("Learn")
  }
  x();
// output:


//9.------------------------------------------------------------------------
  function x(){
    for (let i = 1; i <= 10; i++){
      setTimeout(function (){
      console.log(i);
      }, i * 1000);
    }
    console.log("Learn")
  }
  x();
// output:


//10.---------------------------------------------------------------------------
  function x(){
    for (let i = 1; i <= 10; i++){ // var or let work 
      function close(i){
        setTimeout(function (){
        console.log(i);
        }, i * 1000);
      }
      close(i);  
    }
    console.log("Learn")
  }
  x();
// output:


//11.------------------------------------------------------------------------------
  function x(){
    var a = 10;
    function y(){
      console.log(a,"hello");
    }
    y();
  }
  x();
// output:


//12.-------------------------------------------------------------------------------
  function x(){
    var a = 10;
    function y(){
      console.log(a);
    }
    return y;
  }
  var z = x();
  console.log(z);
//output:


//13.---------------------------------------------------------------------------------
 function x(){
    var a = 10;
    function y(){
      console.log(a);
    }
    return y;
  }
  var z = x();
  console.log(z);
  z();  // call function here
  // output:


//14.------------------------------------------------------------------------------------
  function z(){
    var b = 20;
    function x(){
      var a = 10;
      function y(){
        console.log(a,b);
      }
      y(); // call function here
    }
    x(); // call function here
  }
  z(); // call outer function here
// output:


//15.---------------------------------------------------------------------------------------
for (var i = 0; i < 3; i++) {
    setTimeout(function() { console.log(i); }, 5000 + 1 );
  }
// output:


//16.----------------------------------------------------------------------------------------
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      (function(i, j) {
        setTimeout(function() { 
          console.log(`i: ${i}, j: ${j}`); 
        }, 2000 + i);
      })(i, j);
    }
  }
// output:


//17.------------------------------------------------------------------------------------------
for (var i = 0; i < 3; i++) {
	(function(i){
		setTimeout(function(){console.log(i);}, 5000 + i);
	})(i)
}
//output:


//18.-----------------------------------------------------------------------------------------
for(let i = 0; i<10; i++){
    setTimeout(() => {
        console.log(i);
    }, i * 3000);
}
//output:


//19.------------------------------------------------------------------------------------------
for(let i = 0; i >= 10; i--){
    setTimeout(() => {
        console.log(10 - i);
    }, 3000);
}
//output: