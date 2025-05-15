// index.js - JavaScript and the web
// Author: Saraí Muñoz
// Date: 5/15/25
$(document).ready(function () {
  let side = "left";

  function generateRandomText() {
    const messages = [
      "Hey there!",
      "This lab is kinda fun.",
      "DOM manipulation makes the page feel alive.",
      "Are we almost done?",
      "I hope it works now.",
      "Yesss, it finally shows in the right spot!"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  }

  $("#make-convo").click(function () {
    const newText = generateRandomText();
    const sideClass = side === "left" ? "left-bubble" : "right-bubble";
    side = side === "left" ? "right" : "left";

    $("#output").append(`<div class="bubble ${sideClass}">${newText}</div>`);
  });
});
$("#Results #output").append(`<div class="bubble ${sideClass}">${newText}</div>`);



