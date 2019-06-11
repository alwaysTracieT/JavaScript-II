// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];



  // //Given this problem: 
  
  // function firstItem(arr, cb) {
  //   // firstItem passes the first item of the given array to the callback function.
  // }

  // // Potential Solution:

  // // Higher order function using "cb" as the call back
  // function firstItem(arr, cb) {
  //   return cb(arr[0]);
  // }

  // // Function invocation 
  // firstItem(items, function(first) {
  //   console.log(first)
  // });

//Challenge 1: Done
// getLength passes the length of the array into the callback.
function getLength(arr, cb) {
  return cb(arr.length);
};
getLength(items, function(length) {
  console.log(`There are ${length} items in the array.`);
});


//Challenge 2: Done
// last passes the last item of the array into the callback.
function lastItem(arr, cb) {
  return cb(arr[arr.length-1]);
};
lastItem(items, function(last){
  console.log(`The last item in the array is ${last}.`);
});

//Challenge 3: Done
// sumNums adds two numbers (x, y) and passes the result to the callback.
function sumNums(x, y, cb) {
  return cb(x, y);
};
const sum = function(x, y) {
  return x + y;
};
console.log(sumNums(4,5, sum)); 

//Challenge 4: Done
// multiplyNums multiplies two numbers and passes the result to the callback.
function multiplyNums(x, y, cb) {
  return cb(x, y);
};
const multiply = function(x, y) {
  return x * y;
};
console.log(multiplyNums(4,5, multiply));


//Challenge 5:
// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false.

function contains(item, list, cb) {
  for( let i = 0; i < list.length; i++ ){
    if (length[i] === item) {
      return true;
    } else {
      return false;
    }
  };
};
contains(item, list, function(contains)) {
  console.log(`${item} is on the list`);
}



function getLength(arr, cb) {
  return cb(arr.length);
};
getLength(items, function(length) {
  console.log(`There are ${length} items in the array.`);
});


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
