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

