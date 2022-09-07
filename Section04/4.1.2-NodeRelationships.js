// select the root node
console.log(document.querySelector("html"));

// select the last child of the root node
document.querySelector("html").lastElementChild;

// select all the children of the body element
document.querySelectorAll("body").children;

// select the next sibling of the h2 node 
//*Note: Another way to console.log with a string of info...defining the search.
console.log("h2 next sibling", document.querySelector("h2").nextElementSibling);

// select the parent element of the h1 node
document.querySelector("h1").parentElement;
console.log(document.querySelector("header").outerHTML);
console.log(document.querySelector("header").innerHTL);

