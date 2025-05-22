// Company Details
  //Company Name: glorius insight
  //Location: Remote
  //Date: 16-05-2025
  //Time: 10:30 - 11:00 AM
  //Result: Not cleared

  // Train travles at 60 miles per hour for first 2 hours and then at 80 miles per hour for next 1.5 hours. What is the average speed of the train

// Distance A = 60 miles
 
// Distance B = 60 miles
 
// Distance A + B = 120 Miles
 
// Time Taken 2 Hours
 
// Next is 
// Distance C = 80 Miles 
 
 
// Distance D = 40 Miles 
 
// Total Distance 240 Miles
 
// Total Time 2+1.5 = 3.5
 
// 240/3.5
 
// 68.57


// Segment 1
const speed1 = 60; // mph
const time1 = 2;   // hours
const distance1 = speed1 * time1;

// Segment 2
const speed2 = 80; // mph
const time2 = 1.5; // hours
const distance2 = speed2 * time2;

// Total distance and time
const totalDistance = distance1 + distance2;
const totalTime = time1 + time2;

// Average speed
const averageSpeed = totalDistance / totalTime;

console.log(`Average speed: ${averageSpeed.toFixed(2)} mph`);
