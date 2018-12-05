//Step 1:

//Construct a for loop that iterates through, and `console.log()`'s out, numbers 1 - 100:

'use strict';

/* 
for (let num = 1; num <= 100; num++) {
  console.log(num);
}
*/

//Step 2:

//Add an `if/else` statement that logs the string `"fizz"` if the value being iterated over is divisible by `3`; otherwise, log out the value:

/*
for (let num = 1; num <= 100; num++) {
  if (num % 3 === 0) {
    console.log('fizz');
  } else {
    console.log(num)
  }
}
*/

//##### Step 3:

//Add an `else if` clause that logs the string `"buzz"` if the value being iterated over is divisible by `5`:

/*
for (let num = 1; num <= 100; num++) {
  if (num % 3 === 0) {
    console.log('fizz');
  } else if (num % 5 === 0) {
    console.log('buzz')
  } else {
    console.log(num)
  }
}
*/

//##### Step 4:

//Add an additional `else if` clause that logs the string `"fizzbuzz"` if the value being iterated over is divisible by both `3` and `5`. (Note that the num % 15 clause must come befor the conditions checking for divisibility by 3 and 5; otherwise, the condition where a number is divisible by both 3 and 5 is never checked!)

// for (let num = 1; num <= 100; num++) {
//   if (num % 15 === 0) {
//     console.log('fizzbuzz');
//   } else if (num % 5 === 0) {
//     console.log('buzz')
//   } else if (num % 3 === 0) {
//     console.log('fizz')
//   } else {
//     console.log(num)
//   }
// }

//##### BONUS:

// a. Make a copy of your existing code and comment out the original.
// b. In the new copy, instead of using console.log for the results, push the
//    result of each loop to an array.
// c. After all iterations have, completed, use the forEach array method to log
//    each array element value to the console.
//    Label your console output with the original number and a colon before each
//    array value. (Hint: How can you shorten your code using a second forEach
//    function parameter?)

let results = [];
for (let num = 1; num <= 100; num++) {
  if (num % 15 === 0) {
    results.push('fizzbuzz');
  } else if (num % 5 === 0) {
    results.push('buzz');
  } else if (num % 3 === 0) {
    results.push('fizz');
  } else {
    results.push(num);
  }
}
//console.log(results);
results.forEach(function(result, index) {
  // See https://github.com/airbnb/javascript#coercion--strings for why String()
  // is preferable to toString()
  console.log(String(index + 1) + ': ' + result);
});
