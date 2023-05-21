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

// Exercise 
// Implement a function named incrementIndex that updates the index position, and goes back to the beginning of the array if the index reaches the end of the array, as shown in the diagram below.
var images = [
  "/udata/DErqVR5q0Pv/longexposurewaterfall1.jpg",
  "/udata/MLE2D8Lzv6X/route66.jpg",
  "/udata/nPaBd6Mq1Ly/archesdrive.jpg",
  "/udata/1krmXeav6GB/army2.jpg",
  "/udata/1klaZD0vxjz/redwoodupwards2.jpg",
  "/udata/4WQvGrR56Qq/solduc2.jpg",
  "/udata/1koZJB2vq8k/truck4scale.jpg"
];

var currentIndex = 0; 

var incrementIndex = function(){
    currentIndex++;
    if (currentIndex > images.length - 1) {currentIndex = 0}
    return currentIndex;
}

// Exercise 
// Now that you’ve implemented a way to increment/cycle the array index, create an event listener for the next button that calls incrementIndex() and updates the <img> element’s src attribute.
var images = [
  "/udata/DErqVR5q0Pv/longexposurewaterfall1.jpg",
  "/udata/MLE2D8Lzv6X/route66.jpg",
  "/udata/nPaBd6Mq1Ly/archesdrive.jpg",
  "/udata/1krmXeav6GB/army2.jpg",
  "/udata/1klaZD0vxjz/redwoodupwards2.jpg",
  "/udata/4WQvGrR56Qq/solduc2.jpg",
  "/udata/1koZJB2vq8k/truck4scale.jpg"
];

var currentIndex = 0; 

var img = document.querySelector('img');
var next = document.getElementById('next-button');

var incrementIndex = function(){
    currentIndex++;
    if (currentIndex > images.length - 1) {currentIndex = 0}
    return currentIndex;
}

// create an event listener for a #next-button click
// increment the index
// set the img src to the next URL in the images array
next.onclick = function(){
    img.setAttribute('src', images[incrementIndex(currentIndex)])  
}
