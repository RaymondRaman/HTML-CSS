// Gathering user information
let usersName = prompt("Enter your name: ");
let usersAge = prompt("Enter your age: ");
let usersCity = prompt("Enter your city: ");
let usersCollege = prompt("Enter your college: ");
let usersProfession = prompt("Enter your profession: ");
let usersPetName = prompt("Enter your pet's name: ");

// Outputting the story using the gathered information
console.log(`
There once was a person named ${usersName} who lived in ${usersCity}.
At the age of ${usersAge}, ${usersName} went to college at ${usersCollege}.
${usersName} graduated and went to work as a ${usersProfession}.
Then, ${usersName} adopted an animal named ${usersPetName}.
They both lived happily ever after!`);

// Verifying parseInt() function
let a = parseInt(prompt("Enter an integer?")); // 1st integer
let b = parseInt(prompt("Enter another integer?")); // 2nd integer
let result = a + b; // adding up
console.log("When we apply + operator it gives " + result + " which is addition of two numbers!");

let a = parseFloat(prompt("Enter a floating-point value?")); // Taking float variable input in a
console.log("You entered the value " + a);

// Calculating pay based on working hours and rate
let regularPay = 0;
let overtimePay = 0;
let totalPay = 0;
let workingHour = parseInt(prompt("Enter your working hours: "));
let hourRate = parseInt(prompt("Enter the hour rate: "));
if (workingHour >= 40) {
    regularPay = hourRate * 40;
    overtimePay = hourRate * 1.5 * (workingHour - 40);
    totalPay = regularPay + overtimePay;

    console.log(`Regular pay: ${regularPay}`);
    console.log(`Overtime pay: ${overtimePay}`);
    console.log(`Total pay: ${totalPay}`);
} else {
    regularPay = workingHour * hourRate;
    console.log(`Regular pay: ${regularPay}`);
}

// Determining the quadrant based on coordinates
let x = parseFloat(prompt("Enter the x-coordinate: "));
let y = parseFloat(prompt("Enter the y-coordinate: "));
if (x > 0 && y > 0) {
    console.log("The point lies in the 1st Quadrant.");
} else if (x < 0 && y > 0) {
    console.log("The point lies in the 2nd Quadrant.");
} else if (x < 0 && y < 0) {
    console.log("The point lies in the 3rd Quadrant.");
} else if (x > 0 && y < 0) {
    console.log("The point lies in the 4th Quadrant.");
} else {
    console.log("The point lies in the center.");
}

// for of loop
for (let a of [0, 1, 2, 3, 4]) // Accessing each value 
    console.log(a);
// Write your code here
for(let i of [1, 2, 3, 4, 5]) {
    console.log(0 + (i-1) * 5)
}
// Write your code here
for(let i of [1, 2, 3, 4, 5]) {
    console.log(1 * 3 ** (i - 1));
}

// odd number 
for (let i = 1; i < 200; i += 2) {
    console.log(i);
}
// Arithmetic sequence
for (let i = 1; i < 100; i += 5) {
    console.log(i);
}
// Write your code here
let a = parseInt(prompt("Enter a number: "));
for( i = 1; i < 21; i++) {
    console.log(`${a} x ${i} = ${a*i}`);
}
// Write your code here
let usersInput = parseInt(prompt("Enter a number: "));
let i = 1;
while( i <= usersInput) {
    if(usersInput % i == 0) {
        console.log(i);
    }
    i++;
}
// prime number 
// Write your code here
let numberOfTime = 0;
let usersInput = parseInt(prompt("Enter a number: "));
for(let i = 1; i <= usersInput; i++) {
    if(usersInput % i == 0) {
        numberOfTime++;
    }
}

if(numberOfTime == 2) {
    console.log(`${usersInput} is a prime number`);
} else {
    console.log(`${usersInput} is not a prime number`);
}

// Greatest common divisor
// Write your code here
let numberOne = parseInt(prompt("Enter the first number: "));
let numberTwo = parseInt(prompt("Enter the second number: "));
let greatestCommonDivisor = 1;
let result = 1;
while(greatestCommonDivisor <= numberOne && greatestCommonDivisor <= numberTwo) {
    if(numberOne % greatestCommonDivisor == 0 && numberTwo % greatestCommonDivisor == 0 ) {
        result = greatestCommonDivisor;
    }
    greatestCommonDivisor++;
}

console.log(`The greatest common divisor is: ${result}`);

// square star
let usersInput = parseInt(prompt("Enter a number: "));

for (let row = 0; row < usersInput; row++) {
    let rowOutput = "";
    for (let col = 0; col < usersInput; col++) {
        rowOutput += `*`;
    }
    console.log(rowOutput);
}

// rectangle star
// Write your code here
let numberOfRow = parseInt(prompt("Eneter the number of row: "));
let numberOfCol = parseInt(prompt("Enter the number of of column: "));
for(let row = 0; row < numberOfRow; row++){
    let result = "";
    for(let col = 0; col < numberOfCol; col++){
        result += "*";
    }
    console.log(result);
}

// triangle star
// Write your code here
let numberOfCol = parseInt(prompt("Enter the number of column: "));
for(let row = 0; row < numberOfCol; row++) {
    let result = "";
    for(let col = 0; col <= row; col++) {
        result += "*"
    }
    console.log(result);
}

// finds the power of 2 nearest to that number. 

pwr = 1;
while (pwr * 2 <= num) {
    pwr = pwr * 2;
}

let diff1 = num - pwr;
let diff2 = pwr * 2 - num;

if (diff2 < diff1) {
    pwr = pwr * 2;
}

console.log(`The ${pwr} is the power of 2 nearest to ${num}`);
