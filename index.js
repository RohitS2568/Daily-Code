//2.
let count = 10;
(function innerFunc() {
    if(count === 10) {
        let count = 11;
        console.log(count);
    }
    console.log(count);
})();
/// output: 11, 10


(true+"")[3]
//output: "e"
