// Company Details
  //Company Name: Celebal
  //Location: Jaipur
  //Date: 12-05-2025
  //Time: 11:00 - 12:00 AM
  //Result: Not cleared

  // What is promises
  // What is Clouser
  // What is arrow function
  // what is hoisting
  //High order function
  // v8 -engine
  //Interface
  //Java-script


  //1.
  new Promise((resolve,reject) => {
    resolve("data")
    .then(data => console.log(data))
    .catch(error => console.error(error));
  })

  //2.
  var a = 1;
  var a = 2;
  if(true){
    var a = 3
  }
  console.log(a)
  //op: 3

  //3.
  let a = 1;
  let a = 2;
  if(true){
    let a = 3
  }
  console.log(a);
  //op: SyntaxError: Identifier 'a' has already been declared

