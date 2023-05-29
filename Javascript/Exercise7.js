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
