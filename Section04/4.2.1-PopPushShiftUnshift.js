const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let nums1 = nums.pop(); //0
let nums2 = nums.pop(); //1


// remove each of the first two items with shift(), saving each item to a variable
let numsShift1 = nums.shift(); //6
let numsShift2 = nums.shift(); //5

// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.unshift(nums2); //1
nums.unshift(nums1); //0

nums.push(numsShift2); //5
nums.push(numsShift1); //6

console.log(nums);
