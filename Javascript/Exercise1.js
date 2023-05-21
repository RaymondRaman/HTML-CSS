function testMarks1 (name, score){
    return name + " scored " + score + " in weekly test.";
}

let testMarks = function(name, score){
    return `${name} scored ${score} in weekly test.`;
}

console.log(testMarks1('Santa', 99));
console.log(testMarks('Santa', 99));

// Exercise 
// Create an event listener that shows a message when you click on the <h1> element in the HTML page below.
// Your code goes here!
var h1 = document.querySelector("h1");
h1.onclick = function() {
    alert("Hello world!")
}

// Exercise 
// Use the concepts we’ve discussed so far to write a function (called rangeSum) that returns the sum of all the numbers from 0 to number. For example,

// rangeSum(5);
// would sum the numbers 0, 1, 2, 3, 4, and 5 for a final value of 15. The function should be able to handle both positive and negative values.

var rangeSum = function(number) {
  var sum = 0;
  while (number != 0) {
    sum += number;
    if(number > 0){
      number--;
    }else{
      number++;
    }
  }
  return sum;
};

// Exercise 
// Given an array of arrays, each of which contains a set of numbers, write a function that returns an array where each item is the sum of all the items in the sub-array.
var arraySum = function(numbers) {
  var sums = Array(numbers.length).fill(0); 
  for (var i = 0; i < numbers.length; i++) {
    for (var j = 0; j < numbers[i].length; j++) {
      sums[i] += numbers[i][j]; 
    }
  }
  return sums;
};

// Exercise 
// Convert the following array of arrays:

// [ ["Mary", 10], ["Barbara", 11], ["David", 12], ["Alex", 11] ];
// into an array of objects, named students. Each object in the array should have a name and age property.
var student1 = {
   name: "Mary",
   age: 10
}

var student2 = {
   name: "Barbara",
   age: 11
}

var student3 = {
   name: "David",
   age: 12
}

var student4 = {
   name: "Alex",
   age: 11
}

var students = [
  //insert your code here
  student1, student2, student3, student4
];

