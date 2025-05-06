// index.js - Anon Functions and Callbacks
// Author: Saraí Muñoz
// Date: 5/6/25


/*
    This script experiments with the map() function and prints
    results to both the console and the web page.
*/

// Create an array
var array = [1, 2, 3, 4, 5];

// Named function that squares a number
function yourFunctionName(x) {
    var results = x * x;
    return results;
}

// Use map with the named function
var mapResults = array.map(yourFunctionName);

// Use map with an anonymous function to add 10
var addTenResults = array.map(function(x) {
    var results = x + 10;
    return results;
});

// Log to console
console.log("Named Function (squares):", mapResults);
console.log("Anonymous Function (add 10):", addTenResults);
//





        
