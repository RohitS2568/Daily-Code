// A shallow copy creates a new object with the same memory references as the original,
// while a deep copy creates a new object with its own independent memory locations for
// all data, including nested objects

const data = {
  user: {
    name: "Addy",
    address: {
      city: "Gurgaon",
      zip: "12345"
    }
  },
  meta: {
    lastUpdated: "2024-12-06"
  }
};
const reference = data.user;  
reference.name = "Aditya";       
reference.address.city = "Delhi";
const deepCopy = JSON.parse(JSON.stringify(data)); 
deepCopy.user.name = "Addy1";
console.log(data.user.name);          
console.log(data.user.address.city); 
console.log(deepCopy.user.name);      
console.log(deepCopy.meta.lastUpdated);

//output
// Aditya
// Delhi
// Addy1
// 2024-12-06