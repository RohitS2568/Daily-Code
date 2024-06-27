//1. Print Prime Number
function sumPrimes(num) {
    let sum = 0;

    function isPrime(n) {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }

    return sum;
}

// Example usage:
console.log(sumPrimes(10)); // Output: 17 (2 + 3 + 5 + 7)
console.log(sumPrimes(20)); // Output: 77 (2 + 3 + 5 + 7 + 11 + 13 + 17 + 19)
console.log(sumPrimes(0));  // Output: 0
console.log(sumPrimes(1));  // Output: 0
console.log(sumPrimes(2));  // Output: 2
