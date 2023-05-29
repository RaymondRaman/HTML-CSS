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
