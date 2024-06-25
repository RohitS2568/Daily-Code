//1 Define the fetchData function
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Simulating success condition
            if (success) {
                resolve("data fetch");
            } else {
                reject("data fetch failed");
            }
        }, 3000);
    });
}

//2. Call the fetchData function and handle the promise
fetchData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });


 //3 Promise function
// Define the fetchData function
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("data fetch");
        }, 3000);
    });
}

// 4. Call the fetchData function and handle the promise
fetchData().then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("data1");
        }, 3000);
    });
}

fetchData().then((data)=>{
    console.log("data2");
}).catch((error)=>{
    console.log("error");
})
