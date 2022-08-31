// create an Array using an Array literal
const y = [1, 3, "string", true, false];
console.log(y);

// access the 1st item in the Array
console.log(y[0]);

// access the last item in the Array
console.log(y[4]);

// print the length of the Array
console.log(y.length);

// use the length property to access the last item in the Array
console.log(y[y.length - 1]);

// with for...of, loop over the Array, modify the value and add to a different Array
const y = [1, 3, "string", true, false];
for (let firstArray of y) {
console.log(y);
}

