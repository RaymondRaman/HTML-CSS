//Function to create a multiplication table
function showTableOf4() {
     for(let i = 1; i < 21; i++) {
         console.log(`4 x ${i} = ${4*i}`);
     }
 }

showTableOf4();

//Function to find distinct values
function showDistinct(arr) {
  let distinctArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] !== arr[i - 1]) {
      distinctArr.push(arr[i]);
    }
  }

  console.log(`Original array: ${arr.join(",")}`);
  console.log(`Distinct array: ${distinctArr.join(",")}`);
}

let arr = [2, 5, 5, 8, 8, 8, 9, 30, 45];
showDistinct(arr);

// Function to search a string in an array
function searchString(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == target) {
            console.log(`${target} is found at index ${i}`);
            return;
        } 
    }
    console.log(`*** ${target} is NOT FOUND in the array ***`);
}

let arr = ['2','55','888','9','30','45'];
searchString(arr, '50');

// Function to display the Fibonacci sequence
function displayFibonacci(numberOfTerms) {
    let result = [];
    result[0] = 0;
    result[1] = 1;
    for(let i = 2; i < numberOfTerms; i++) {
        result[i] = result[i-1] + result[i-2];
    }
    console.log(`First ${numberOfTerms} terms of Fibonacci sequence are: ${result.join(",")}`);
    console.log("*** End of generating Fibonacci Numbers ***");
}

// Challenge: Anagram Problem
function checkAnagram(str1, str2) {
    let num = 0;
    // Write you code here
    let sortedStr1 = str1.toLowerCase().split('').sort().join('');
    let sortedStr2 = str2.toLowerCase().split('').sort().join('');
    if(sortedStr1 == sortedStr2) {
        num = 1;
        console.log("The strings are anagrams.")
    } else {
        num = -1;
        console.log("The strings are not anagrams.");
    }
    return num;
}

// Circular traversal algorithmn
let array = [2, 8, 3, 15]; // Enter the array for circular traversal  
let currentIndex = 0;
let previousPositiveIndex = 0;
let allNegatives = false;
let foundPositive = false;

// This loop will traverse until all elements in array become negative
while (!allNegatives) { 
    if (array[currentIndex] > 0) { 
        console.log("Processing the index " + currentIndex);
    } else {
        if (currentIndex != previousPositiveIndex) { 
            console.log("Skipping the index " + currentIndex);
        } else {
            console.log("Stopping at the index " + currentIndex);
        }
    }
    console.log(currentIndex + ' [' + array + ']');

    if (array[currentIndex] > 0) { 
        let steps = array[currentIndex];
        array[currentIndex] = -array[currentIndex]; // Convert the value to negative

        console.log("Moving " + steps + " steps");
        let tempIndex = currentIndex;
        for (let k = 0; k < steps; k++) { // Moving 'steps' forward in array in circular manner
            tempIndex = (tempIndex + 1) % array.length;
            console.log(". " + tempIndex + " [" + array + "]");
        }
        currentIndex = tempIndex;
        foundPositive = true;
    } else {
        if (foundPositive) { 
            previousPositiveIndex = currentIndex;
            foundPositive = false;
        } else {
            if (previousPositiveIndex == currentIndex) { 
                allNegatives = true;
            }
        }
        currentIndex = (currentIndex + 1) % array.length;
    }
}
console.log(" *** DONE *** ");

