//Function to create a multiplication table
function showTableOf4() {
     for(let i = 1; i < 21; i++) {
         console.log(`4 x ${i} = ${4*i}`);
     }
 }

showTableOf4();


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
