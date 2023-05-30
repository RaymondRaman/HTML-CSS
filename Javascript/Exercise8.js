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
