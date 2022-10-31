// Question 4 - Count the Vowels
// Write a function that counts the number of vowels in a string.
// The vowels are "a", "e", "i", "o" & "u"

// Problem:
// findVowels('hello') // --> 2
// findVowels('why') // --> 0

// Split string to an Array Solution:

function findVowels(word) {
    // Establish the list of vowels in an Array
    const vowels = ["a", "e", "i", "o", "u"];
    // Initialize the count to zero
    let count = 0;

    // Convert the string to an array of letters
    // Convert the word to lower case so the letters can be compared
    const letters = word.split('').toLowerCase();
    // Same process using the spreader operator
    // const letters = [...word.toLowerCase()];

    // Iterate over each letter determine if it is in the array of vowels
    letters.forEach(letter => {
        // If it is increment the count
        // Greater than or equal is used because indexOf returns 0 if found in the first index,
        //   -1 if not found
        if (vowels.indexOf(letter) >= 0 ) {
            count++;
        }
    });

    console.log("Count", count);
}

// Treat string as an Array Solution:

function findVowels(word) {
    // Establish the list of vowels in an Array
    const vowels = ["a", "e", "i", "o", "u"];
    // Initialize the count to zero
    let count = 0;

    // Convert the word to lower case so the letters can be compared
    word = word.toLowerCase();

    // Iterate over each letter determine if it is in the array of vowels
    for(let i = 0; i < word.length; i++) {
        // Notice that we are accessing each letter just like we would an array index
        if (vowels.indexOf(word[i]) >= 0) {
            count++;
        }
    }

    console.log("Count", count);
}
