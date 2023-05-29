// Palindrome
let usersInput = prompt("Enter a string: ");

let leftMost = 0;
let rightMost = usersInput.length - 1;

while (leftMost <= rightMost) {
    if (usersInput[leftMost] != usersInput[rightMost]) {
        console.log("Not a Palindrome");
        break;
    }
    leftMost++;
    rightMost--;
    if (leftMost > rightMost) {
        console.log("Palindrome");
    }
}

let usersInput = [];
let result = "";
for(let i = 0; i < 5; i++) {
    usersInput[i] = prompt("Enter a string: ");
    result = result + usersInput[i] + ",";
    if(i == 4) {
        result = result.slice(0, -1);
    }
}

let leftMost = 0;
let rightMost = usersInput.length - 1;
while(leftMost <= rightMost) {
    if(usersInput[leftMost] != usersInput[rightMost]) {
        console.log(`${result} is NOT a palindrome`);
        break;
    }
    leftMost++;
    rightMost--;
    if(leftMost > rightMost) {
        console.log(`${result} is a palindrome`);
    }
}

// reversed string
// Write your code here.
let usersInput = ['a','e','i','o','u','w','h','y'];
let originalArray = "";
let reversedArray = "";

for(let i = 0; i < usersInput.length; i++) {
    originalArray = originalArray + usersInput[i] + ",";
    if(i == usersInput.length - 1) {
        originalArray = originalArray.slice(0, -1);
    }
}

let reversedUsersInput = usersInput.reverse();
for(let i = 0; i < usersInput.length; i++) {
    reversedArray = reversedArray + reversedUsersInput[i] + ",";
     if(i == usersInput.length - 1) {
        reversedArray = reversedArray.slice(0, -1);
    }
}

console.log(
`Original array: ${originalArray}
 Reversed array: ${reversedArray}`
)

// Write your program here
let u = [1,2,3,4,5,6,7,8,9,10,11,12,21,11,10,9,8,7,6,5,4,3,2,1];
let result =  `[`;
for(let i = 0; i < u.length; i++) {
    result = result + u[i] + ", ";
    if(i == u.length - 1) {
        result = result.slice(0, -2);
        result += `]`;
    }
}

let leftMost = 0;
let rightMost = u.length - 1;
while(leftMost <= rightMost) {
    if(u[leftMost] != u[rightMost]) {
        console.log(`${result} is NOT a palindrome!`);
        break;
    }
    leftMost++;
    rightMost--;
    if(leftMost > rightMost) {
        console.log(`${result} is a PALINDROME!`);
    }
}

// Fibonacci sequence#
// Write your program here
let usersInput = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]
let count = 2;
while(count < usersInput.length) {
    if(usersInput[count] != (usersInput[count-1] + usersInput[count - 2])) {
        console.log(`It's not a Fibonacci sequence due to the value ${usersInput[count]} at index ${count}.`)
        break;
    }
    count++;
    if(count == usersInput.length - 1) {
        console.log(`Hurrah ... we've got a Fibonacci sequence.`);
    }
}

//the sum of each row in a matrix#
let usersInput = [[1,2,3],[4,5,6]];
let sum = 0;
for(let row = 0; row < usersInput.length; row++) {
    for(let col = 0; col < usersInput[row].length; col++) {
        sum += usersInput[row][col];
    }
    console.log(`Sum of Row${row+1}: ${sum}`);
    sum = 0;
}

// Calculate the sum of each column in a matrix#
let usersInput = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
  [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
  [40, 41, 42, 43, 44, 45, 46, 47, 48, 49]
];

console.log("Displaying in the matrix form:");
for (let row = 0; row < usersInput.length; row++) {
  let result = "";
  for (let col = 0; col < usersInput[row].length; col++) {
    result += usersInput[row][col] + ",";
    if (col === usersInput[row].length - 1) {
      result = result.slice(0, -1);
    }
  }
  console.log(`\tRow no.${row}   ==> ${result}`);
}

let columnSums = [];
for (let col = 0; col < usersInput[0].length; col++) {
  let columnSum = 0;
  for (let row = 0; row < usersInput.length; row++) {
    columnSum += usersInput[row][col];
  }
  columnSums.push(columnSum);
}
console.log(`Column Sums are: ${columnSums.join(",")}`);

        

