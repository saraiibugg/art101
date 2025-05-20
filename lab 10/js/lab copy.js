// index.js - JavaScript and the web
// Author: Saraí Muñoz
// Date: 5/15/25



// generate a short fake sentence
function generateRandomText() {
  const phrases = [
    "Hey there!",
    "How’s it going?",
    "I'm just writing some JavaScript.",
    "DOM manipulation is fun!",
    "This lab is kinda cool.",
    "Check out this bubble.",
    "Let's keep clicking!"
  ];
  const randIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randIndex];
}

// click listener for button
$("#make-convo").click(function() {
  // get new fake dialogue
  const newText = generateRandomText();

  // alternate sides
  const sideClass = ($("#output .bubble.left").length <= $("#output .bubble.right").length) ? "left" : "right";

  // append a new bubble to our output div
  $("#output").append('<div class="bubble ' + sideClass + '"><p>' + newText + '</p></div>');
});




