// Question 2 - Highest Number
// Write a JavaScript function that takes in integers and returns the integer with the highest value.
// (Do NOT use Math.max()!!!)

// Problem:

// findHighest(5, 8, 1) // --> 8
// findHighest([4, 1, -3]) // --> 4

// 1. Multiple Parameter Solution using Rest Operator:

function findHighest(...numbers){
    // Sort the array of numbers descending (highest first)
    let list = numbers.sort(function(a, b) {
        return b - a;
    });
    // Output the first (highest value)
    console.log(list[0]);
}

findHighest(0,20,-100,11111)


// 2. Multiple Parameter Solution:

function findHighest(num1, num2, num3) {
    // Compare the parameters
    if (num1 > num2 && num1 > num3) {
        console.log(num1);
    }
    if (num2 > num3 && num2 > num3) {
        console.log(num2);
    } else {
        console.log(num3);
    }
}

findHighest(0,20,-100,11111)


// 3. Single Array Parameter Solution with Array.prototype.forEach:

function findHighest(nums) { // data type of nums is an array
    // Store the first value as the highest
    let highest = nums[0];

    // Iterate over the array of numbers and check if num is higher
    // Could also be:
    //   nums.map // returns an array if assigned to a variable, which is not necessary here
    //   for loop // doesn't return anything
    nums.forEach(num => {  // doesn't return anything
        if (num > highest) {
            highest = num;
        }
    });

    // Return the highest
    console.log(highest);
}

findHighest([0,20,-100,11111])


// 4. Single Array Parameter Solution with Array.prototype.reduce:
// This works but it ignores the accumulator concept and just sets highest

function findHighest(nums) { // data type of nums is an array
    // Iterate over the array of numbers and check if num is higher
    console.log(nums.reduce((highest, num) => num > highest ? num : highest));
}

findHighest([0,20,-100,11111])
The forbidden Math.max():
Math.max uses Rest parameters so you can pass any number of arguments

const highest = Math.max(8, 2, 11, 31);
