// Question 5 - Palindrome
// Write a function that determines if a string in a palindrome.
// A palindrome is a string that is the same forward and backwards.

// Problem:

isPalindrome("racecar"); // --> true
isPalindrome("table"); // --> false
// Solution:

function isPalindrome(word) {
  // Convert the word to lower case so the letters can be compared
  word = word.toLowerCase();
  // Convert the string to an array of letters
  const reversed = word
    .split("")
    .reverse()
    .join("");

  console.log(word === reversed); // Output the boolean result of the comparison
}
Palidrome;
