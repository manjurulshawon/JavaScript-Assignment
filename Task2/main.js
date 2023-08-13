"use strict";

function findMaxNumber(numbers) {
    // Check if the array is empty
    if (numbers.length === 0) {
      return null;
    }
  
    let maxNumber = numbers[0]; 
  
    // Loop through the array to find the maximum number
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
      }
    }
  
    return maxNumber;
  }
  
  // Test cases
  const numbers1 = [3, 8, 2, 10, 5];
  const numbers2 = [5,15,7];
  const emptyArray = [];
  
  console.log(findMaxNumber(numbers1)); // Output: 10
  console.log(findMaxNumber(numbers2)); // Output: 15
  console.log(findMaxNumber(emptyArray)); // Output: null
  