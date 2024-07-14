/*The Program will demonstrate the use of arrays and most importantly the operation on array 

*/

//Declare array 

var days=["Sunday", "Monday", "Tuesday"," wednsday", " Thrusday", "Friday"];

//we have declared an array of 7 days of week

// Array can be accessed with indexs.The indexs start from Zero

//Here we have acceesed the first element of array using its index and set the value in varilable t and cnsoled it. 

var t=days[0];
days.push("Sataday");
console.log(t);

// here we are using the in built method of array to determinie the number of elements in the array

var l=days.length;


console.log(" The number of elements in the arrary are: " +l);

console.log(days[6]);

// pop method to delete the last element of array 

days.pop();

console.log(days.length);

