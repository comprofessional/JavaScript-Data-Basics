/*
Template literals are a feature in JavaScript that provide a more powerful and flexible way to work with strings. 
They were introduced in ES6 (ECMAScript 2015) and allow for easier string interpolation, 
multi-line strings, and the embedding of expressions. 
Here's a detailed explanation of template literals and their features:


*/
// old way 

const n="umer";
const agen=29;

console.log("my name is "+n, " and age is "+agen);


// new way

const name1 = "Bilal";
const age = 30;

const greeting = `Hello, my name is ${name1} and I am ${age} years old.`;
console.log(greeting); 