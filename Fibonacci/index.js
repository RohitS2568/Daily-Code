//1. Print Fibonaci series
function generateFibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib.slice(0, n);
  }
  console.log(generateFibonacci(9));

  //output [ 0, 1,  1, 2, 3, 5, 8, 13, 21]
