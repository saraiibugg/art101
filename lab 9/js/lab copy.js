// index.js - Libraries and jQuery
// Author: Saraí Muñoz
// Date: 5/12/25

$(document).ready(function () {
  // Add message to output
  $("#output").html("<p>I wanted to make this Section fun and interesting!</p>");

  // Add buttons to specific sections
  $("#challenge").append("<button id='button-challenge'>Make Special</button>");
  $("#problems").append("<button id='button-problems'>Make Special</button>");
  $("#results").append("<button id='button-results'>Make Special</button>");
  $("#reflections").append("<button id='button-reflections'>Make Special</button>");

  // Click event for challenge section
  $("#challenge").on("click", "#button-challenge", function () {
    $("#challenge").toggleClass("special");
  });

  // Click event for problems section
  $("#problems").on("click", "#button-problems", function () {
    $("#problems").toggleClass("special");
  });

  // Click event for results section
  $("#results").on("click", "#button-results", function () {
    $("#results").toggleClass("special");
  });

   // Click event for reflection section
  $("#reflections").on("click", "#button-reflections", function () {
    $("#reflections").toggleClass("special");
  });
});
        
