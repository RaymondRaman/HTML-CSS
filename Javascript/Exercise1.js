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


