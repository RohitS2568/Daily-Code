// Find Factrorial number----------------------------------------------------------
function factrorial(n){

    let result = 1;

    for(let i = 1; i <= n; i++){
        result *= i;
    }
    return result;
}

let n = 4;
console.log(factrorial(n))