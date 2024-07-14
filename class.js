
/*
lasses in JavaScript, introduced in ES6, provide a more convenient and structured way to create objects and 
manage inheritance. Although JavaScript is a prototype-based language, classes offer a 
syntactic sugar over the existing prototype-based inheritance, making the code more readable and easier to work with.

*/

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method defined inside the class using template literal
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Creating an instance of the Person class
  const person1 = new Person("John", 30);
  person1.greet(); // Output: Hello, my name is John and I am 30 years old.



  //  Creating an instance of the Person class
  const person2 = new Person("umer", 20);
  person2.greet(); // Output: Hello, my name is umer and I am 20 years old.