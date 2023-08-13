"use strict";

function printObjectProperties(obj) {
    // Check if the object is empty
    if (Object.keys(obj).length === 0) {
      console.log("Object is empty");
      return;
    }
  
    // Loop through object properties and print them
    for (const property in obj) {
      console.log(`${property}: ${obj[property]}`);
    }
  }
  
  
  const person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer"
  };
  
  const emptyObj = {};
  
  printObjectProperties(person);
  printObjectProperties(emptyObj);
  