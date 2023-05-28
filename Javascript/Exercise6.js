// write your code below
let usersName = prompt("Enter your name: ");
let usersAge = prompt("Enter your age: ");
let usersCity = prompt("Enter your city: ");
let usersCollege = prompt("Enter your college: ");
let usersProfession = prompt("Enter your profession: ");
let usersPetName = prompt("Enter your pet's name: ");

console.log(`
There once was a person named ${usersName} who lived in ${usersCity}.
At the age of ${usersAge}, ${usersName} went to college at ${usersCollege}.
${usersName} graduated and went to work as a ${usersProfession}.
Then, ${usersName} adopted an animal named ${usersPetName}.
They both lived happily ever after!`);

// parseInt() verifying
let a = parseInt(prompt("Enter an integer?")); // 1st integer
let b = parseInt(prompt("Enter another integer?")); // 2nd integer
let result = a + b; // adding up
console.log("When we apply + operator it gives " + result + " which is addition of two numbers!");
let a = parseFloat(prompt("Enter a floating-point value?")); // Taking float variable input in a
console.log("You entered the value " + a);
