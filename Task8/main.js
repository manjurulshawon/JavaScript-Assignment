"use strict";

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  class Student extends Person {
    constructor(name, age, major) {
      super(name, age); 
      this.major = major;
    }
  
    introduce() {
      super.introduce(); 
      console.log(`I am majoring in ${this.major}.`);
    }
  }
  
  // Test examples
  const person1 = new Person("Manjurul", 30);
  person1.introduce();             // Output: "Hello, my name is Majurul and I am 30 years old."
  
  const student1 = new Student("Shawon", 20, "Computer Science");
  student1.introduce();             // Output: "Hello, my name is Shawon and I am 20 years old. I am majoring in Computer Science."
  