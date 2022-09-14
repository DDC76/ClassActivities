// Activity 1

// 1.a
// Declare a function called testAverage
//  These are the requirements of the function:
//    Accepts a single parameter that can accept an infinite amount of arguments
//    Inside the function, add the parameters together using the forEach method
//    Divide the sum by the number of parameters that were passed in
//    The function will print the result in the following string: `The <number of scores> scores resulted in an average of <result>`
//    The function will output the result
// Hints: Remember how a rest parameter represents arguments and what methods that can allow us to use

//Code below this line:
// function testAverage(...scores) {
//   let total = 0;
//   scores.forEach(score => (total += score));
//   console.log(
//     `The ${scores.length} scores resulted in  an average of: ${total /
//       scores.length}`
//   );
//   return total / scores.length;
// }
// testAverage(92, 71, 85, 83);

// Invoke testAverage with the following parameters: 92, 71, 85, 83

// 1.b
// Declare a function called gradeCheck
//  These are the requirements of the function:
//    Accepts a single parameter (we will be passing the returned value of our testAverage function)
//    Inside the function, build the following conditionals:
//    if argument is greater than or equal to 80, print "<grade>, Enjoy your summer!" then output false
//    if argument is greater than or equal to 60, print "<grade>, Extra studying required." then output true
//    if argument is less than 60, print "<grade>, Failed" then output true

// Invoke gradeCheck and pass in testAverage as an argument; testAverage should have the same parameters as before

function gradeCheck(grade) {
  if (grade >= 80) {
    console.log(`${grade.length}, Enjoy your summer!`);
    return false;
  }
  if (grade >= 60) {
    console.log(`${grade.length}, Extra studying required.`);
    return true;
  }
  if (grade - 60) {
    console.log(`${grade.length}, Failed.`);
    return true;
  }
}
gradeCheck(92, 71, 85, 83);
