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
