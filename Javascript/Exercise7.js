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
