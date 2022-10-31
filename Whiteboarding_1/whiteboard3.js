// Question 3 - Five
// Write a function that generates a random number between 0-10.
// If the number is greater than 5, log “{number} is greater than five!”.
// If it is less than 5, log “{number} is less than five!”

// Question that should be asked:
// What should happen if the number equals five?

// Solution:

function five() {
  // Generate a random number between 0-10
  // Using this formula reduced (Math.floor(Math.random() * (max - min + 1) + min))
  const num = Math.floor(Math.random() * 11);

  if (num > 5) {
    console.log(`${num} is greater than five!`);
  }
  if (num < 5) {
    console.log(`${num} is less than five!`);
  }
  if (num === 5) {
    console.log(`${num} is equal to five!`);
  }
}
