//create a function called sum2Integers
//Write a JavaScript function that takes in two integers and returns their sum,
//unless the two integers are equal. If the two integers are equal,
//then return three times their sum.
//sum2Integers(10, 20) // --> 30
//sum2Integers(10, 10) // --> 60

function sum2Integers(x, y) {
  let sum = x + y;
  if (x === y) {
    return 3 * sum;
  }
  return sum;
}
console.log(sum2Integers(10, 20));
console.log(sum2Integers(10, 10));

//OTHER WAY TO SOLVE:

function sum2Integers(num1, num2) {
  // Sum the 2 numbers
  let sum = num1 + num2;

  // If the integers are equal then multipy by 3
  if (num1 === num2) {
      sum *= 3;  // the same as 'sum = sum * 3;'
  }

  // Output the sum
  console.log(sum);
}
