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

Exercise #
Given an array of student objects, structured like so:

var students = [
  { 
    name: "Mary", 
    age: 10, 
    grades: [90, 88, 95]
  }, 
  {
    name: "Joseph", 
    age: 11, 
    grades: [80, 100, 90, 96]
  }
];

// Write a function that returns an array of grade averages. For instance, if the returned array was named averages:

// averages[0] would equal 91
// averages[1] would equal 91.5
// Assume each student object in your array has a grades property.
var getAverages = function(students) {
  var averages = Array(students.length).fill(0);
  
  for (var i = 0; i < students.length; i++) {
    for (var j = 0; j < students[i].grades.length; j++) {
      averages[i] += students[i].grades[j]; 
    }
    averages[i] /= students[i].grades.length; 
  }
  
  return averages;
};

// Exercise 
// Create an additional property (named modulo) in the operations object that computes the remainder of dividing a number by another number.
var operations = {
  sum: function(x, y){ return x + y; }, 
  subtract: function(x, y){ return x - y; }, 
  multiply: function(x, y){ return x * y; }, 
  divide: function(x, y){ return x / y; },
  modulo: function(x, y){ return x % y}
};

