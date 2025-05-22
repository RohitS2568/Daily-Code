// Company Details
  //Company Name: Testing Mavens
  //Location: Pune/Remote
  //Date: 15-05-2025
  //Time: 4:00 - 5:00 PM
  //Result: Not cleared
  
//1.
const settings = {
  theme: {
    color: "blue",
    font: {
      size: "12px",
      weight: "bold"
    }
  },
  notifications: {
    email: true,
    sms: false
  }
};

function flattenObject(obj, parentKey = '', result = {}) {
  for (let key in obj) {
    const fullKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      flattenObject(obj[key], fullKey, result);
    } else {
      result[fullKey] = obj[key];
    }
  }
  return result;
}

const flattenedSettings = flattenObject(settings);
console.log(flattenedSettings);

//Output
// {
//   'theme.color': 'blue',
//   'theme.font.size': '12px',
//   'theme.font.weight': 'bold',
//   'notifications.email': true,
//   'notifications.sms': false
// }

//2.
const arr = [73, 47, 89, 2, 1, 31, 64, 3, 97, 15, 0, 83, 22, 59, 44, 67, 11, 41, 13];

// Step 1: Calculate average
const average = Math.round(arr.reduce((sum, val) => sum + val, 0) / arr.length);

// Step 2: Find the closest element to the average
let closest = arr[0];
let minDiff = Math.abs(arr[0] - average);

for (let i = 1; i < arr.length; i++) {
  const diff = Math.abs(arr[i] - average);
  if (diff < minDiff) {
    minDiff = diff;
    closest = arr[i];
  }
}

console.log(`Average: ${average}, Closest: ${closest}`);

//Output
// Average: 40, Closest: 41


//1 What is prime
//2 What is sort
//3 what is quick sort
//4 what is search
//5 what is binary search
//6 what is annagram