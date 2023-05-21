// Exercise 
// Store the <p> element below in a variable, then change the contents of the <p> element programmatically.
var p = document.querySelector('p');
p.innerHTML = "Modified HTML using Javascript!";

// Exercise 
// Given the following HTML, find all the elements with the class red, and change their color to blue.

// Hint: An element’s color can be changed using the Element.style.color property. Set the property value as a string.
var red = document.querySelectorAll('.red');

for (var i = 0; i < red.length; i++) {
  red[i].style.color = "blue";
}

// Exercise 
// Create an unordered list with at least three list items using only Javascript. The unordered list should show up in the HTML document and output correctly.
var ul = document.createElement('ul');
var li1 = document.createElement('li');
li1.innerHTML = "Hello"
var li2 = document.createElement('li');
li2.innerHTML = "World!"
var li3 = document.createElement('li');
li3.innerHTML = "!"

var content = document.querySelector('body');
content.appendChild(ul);
var content1 = document.querySelector('ul');
content1.appendChild(li1);
content1.appendChild(li2);
content1.appendChild(li3);

// Exercise
// Modify the following ordered list programmatically to use big Roman numerals for the list items.
var input = document.querySelector('ol');
input.setAttribute('type', 'i')

// Exercise #
// Modify the onclick event listener to add a <p> element that says Clicked! every time the <button> is clicked.
var button = document.querySelector('button');

button.onclick = function() {
  var par = document.createElement('p');
  par.innerHTML = "Clicked!"
  
  var content = document.querySelector('body');
  content.appendChild(par);
}

// Exercise 
// You can access a DOM element’s font color using Element.style.color. Use an event listener (and the random color generator) to change the button’s font color every time it is clicked.
// random color generator 
var randomColor = function(){
  var rvalue = function() {
  	return Math.round(Math.random()*255); 
  }
 	return 'rgb(' + rvalue() + "," + rvalue() + "," + rvalue() + ")";
}

// get button element from DOM
var button = document.querySelector('button');

// create event listener to change color on button click
button.onclick = function(){
	this.style.color = randomColor();
}



