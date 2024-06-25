//1. Recuersive Sum

function recuersiveSum(arr, index =0){
    if(index === arr.length){
        return 0;
    }
    return arr[index] + recuersiveSum(arr, index + 1)
}

console.log(recuersiveSum([1,2,3,4,5]));
//output 15

//2. Recuersne Sum
function recSum(n){
    if(n === 0){
        return 0;
    }
    return n + recSum(n -1)
}
console.log(recSum(6));
//output: 21