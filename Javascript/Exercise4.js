// Exercise 
// Use Element.style to change the width of the h1 element to half that of its parent container.
// Write your code here 
var h1 = document.querySelector('h1');
h1.style.width = "50%";

// Exercise 
// Given the following CSS definition:
// .invisible {
//   opacity: 0; 
// }
// Use methods in Element.classList to make the following picture switch between disappearing and reappearing when it is clicked:
// Write your code here 
var img = document.querySelector('img');

img.onclick = function(){
    this.classList.toggle('invisible');
}
