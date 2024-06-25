//1. Write a code repeat duplicate array/integer without any loop
//1.1 
var a = [1,2,3,4,5]
console.log(a.concat(a));

//1.2 

function duplicate(arr){
    return arr.concat(arr)
}
console.log(duplicate([1,2,3,4]));


