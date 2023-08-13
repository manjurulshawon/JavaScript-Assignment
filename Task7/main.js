"use strict";

class Animal {
    constructor(name, sound) {
      this.name = name;
      this.sound = sound;
    }
  
    makeSound() {
      console.log(`${this.name} makes a sound: ${this.sound}`);
    }
  }
  
  class Dog extends Animal {
    fetch() {
      console.log("Fetching the ball!");
    }
  }
  
  
  const cat = new Animal("Cat", "Meow");
  const dog = new Dog("Dog", "Woof");
  
  cat.makeSound();                 // Output: Cat makes a sound: Meow
  dog.makeSound();                 // Output: Dog makes a sound: Woof
  dog.fetch();                     // Output: Fetching the ball!
  