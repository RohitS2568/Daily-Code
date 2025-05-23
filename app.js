//--------------------------------------------------------------------------
// function Message(name) {
//     console.log("Hello " +name);
// }
// Message("world");

//---------------------------------------------------------------------------
// function isObject(arr){
//     return typeof arr === 'object'
// }

// console.log(isObject({}));
// console.log(isObject([]));


//-------------------------------------------------------------------------------

function letScoping() {
    var x = 1;
  
    if (true) {
      var x = 2;
      x = 3;
      console.log(x); // will print 3
    }
  
    console.log(x); // will print 3, because var is function-scoped
  }
  
  letScoping();
  
  