const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
let firstA = arr.indexOf("a");
console.log(arr.indexOf("a")); //0

let firstB = arr.indexOf("b");
console.log(arr.indexOf("b")); //2

let firstC = arr.indexOf("c");
console.log(arr.indexOf("c")); //4


// find the last index of "a", "b", and "c"
let lastA = arr.lastindexOf("a");
console.log(arr.lastIndexOf("a")); //6

let lastB = arr.lastindexOf("b");
console.log(arr.lastIndexOf("b")); //8

let lastC = arr.lastindexOf("c");
console.log(arr.lastIndexOf("c")); //11

// if the first index and last index of "a" is not the same, remove the last instance
function removeDuplicates(arr, duplicateValue){
    let firstIndex = arr.indexOf(duplicateValue);
    let lastIndex = arr.lastIndexOf(duplicateValue);

    while (firstIndex !== lastIndex){
        arr.splice(lastIndex, 1);
        lastIndex = arr.lastIndexOf(duplicateValue);
    }
    return arr; 

// console.log(arr);

// repeat until there is just one "a"
console.log(removeDuplicates(arr, "a"));
