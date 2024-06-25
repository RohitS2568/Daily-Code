
// Dessending Order
function dessendingNum(startNum){
    console.log(startNum);
    let nextNum = startNum -1;
    if(nextNum > 0){
        dessendingNum(nextNum);
    }
  }
  
  dessendingNum(10);


// Assend order
function assendingNum(startNum){
    console.log(startNum);
    let nextNum = startNum +1;
    if(nextNum <= 10){
      assendingNum(nextNum);
    }
  }
  
  assendingNum(0);