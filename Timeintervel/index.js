//1.-----------------------------------------------------------------
function main() {
    console.log("A");
    setTimeout(function print() {
      console.log("B");
    }, 0);
    console.log("C");
  }
  main();
/// output: A C B


//2.--------------------------------------------------------------------
for(let i = 0; i<10; i++){
  setTimeout(()=> {console.log(i)}, 5000)
}
///output:print 0 to 9 digit after 5sec


//3.--------------------------------------------------------------------
for(var i =0; i<10; i++){
  setTimeout(() => {console.log(i)}, 5000)
}
//output: print 10 , 10 time after 5 sec


//4.--------------------------------------------------------------------
let array = [1,2,3,4,5];
for(let i = array.length; i >= 0; i--){
    setTimeout(() => {
        console.log(array[i]);
    },3000);
}
//output: undifined  + print 5 to 1 digit after 3 sec


//5.---------------------------------------------------------------------
for (let i = 0; i <= 10; i++){
  setTimeout(()=>{
    console.log(10 - i);
  }, 3000)
}
//output print 0 to 11 after 3 sec 


//6.---------------------------------------------------------------------
let count = 10;
(function innerFunc() {
    if(count === 10) {
        let count = 11;
        console.log(count);
    }
    console.log(count);
})();
// output: 11 10


//7.---------------------------------------------------------------------
function x(){
    var i = 1;
    setTimeout(function () {
        console.log(i);
    }, 1000);
    console.log("learn");
}
x();
// output:first print learn and after 1 sec print 1


//8.----------------------------------------------------------------------
function x(){
    for (var i = 1; i <= 10; i++){
      setTimeout(function (){
      console.log(i);
      }, i * 2000);
    }
    console.log("Learn")
  }
  x();
// output: first print Learn after print 11 , 10 time every 2 sec delay


//9.------------------------------------------------------------------------
  function x(){
    for (let i = 1; i <= 10; i++){
      setTimeout(function (){
      console.log(i);
      }, i * 2000);
    }
    console.log("Learn")
  }
  x();
// output: first print Learn after 2 sec dealy print 1 to 10 digit


//10.---------------------------------------------------------------------------
  function x(){
    for (let i = 1; i <= 10; i++){ // var or let work 
      function close(i){
        setTimeout(function (){
        console.log(i);
        }, i * 2000);
      }
      close(i);  
    }
    console.log("Learn")
  }
  x();
// output: first print learn after 1 to 10 print every 2 sec delay


//11.------------------------------------------------------------------------------
  function x(){
    var a = 10;
    function y(){
      console.log(a,"hello");
    }
    y();
  }
  x();
// output: print 10 , hello


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
//output: print y


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
  // output: [Function: y]  , 10


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
// output: print 10 and 20


//15.---------------------------------------------------------------------------------------
for (var i = 0; i < 3; i++) {
    setTimeout(function() { console.log(i); }, 5000 + 1 );
  }
// output: print 3 , 3 time after 5 sec dealy


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
// output:print i =0 j = 0......................


//17.------------------------------------------------------------------------------------------
for (var i = 0; i < 3; i++) {
	(function(i){
		setTimeout(function(){console.log(i);}, 5000 + i);
	})(i)
}
//output: print 0 to 2 digit  time after 5 sec dealy // use another function outside


//18.-----------------------------------------------------------------------------------------
for(let i = 0; i <= 10; i++){
  setTimeout(() => {
      console.log(10 - i);
  }, 3000);
}
//output: print 10 to 0 after 3 sec
//output: print 0 to 9 digit every 3 sec delay


//19.------------------------------------------------------------------------------------------
for(let i = 0; i >= 10; i--){
    setTimeout(() => {
        console.log(10 - i);
    }, 3000);
}
//output: print 10 to 0 after 3 sec