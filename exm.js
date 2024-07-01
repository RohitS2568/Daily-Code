const axios = require('axios');

// Function to call the first API
async function callFirstAPI() {
  try {
    const response = await axios.get('https://api1.example.com/data');
    return response.data;
  } catch (error) {
    console.error('Error calling the first API:', error.message);
    // Handle specific error codes or fallback logic here
    throw error; // Rethrow the error to handle it in the main function
  }
}

// Function to call the second API
async function callSecondAPI() {
  try {
    const response = await axios.get('https://api2.example.com/data');
    return response.data;
  } catch (error) {
    console.error('Error calling the second API:', error.message);
    // Handle specific error codes or fallback logic here
    throw error; // Rethrow the error to handle it in the main function
  }
}

// Main function to orchestrate the API calls
async function main() {
  try {
    const [firstApiData, secondApiData] = await Promise.all([callFirstAPI(), callSecondAPI()]);
    console.log('First API Data:', firstApiData);
    console.log('Second API Data:', secondApiData);
  } catch (error) {
    console.error('Error occurred during API calls:', error.message);
    // Handle the overall failure or fallback logic here
  }
}

main();
