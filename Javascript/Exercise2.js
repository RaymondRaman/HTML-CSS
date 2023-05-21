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
