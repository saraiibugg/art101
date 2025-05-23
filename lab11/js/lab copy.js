// index.js - JavaScript Events and Forms
// Author: Saraí Muñoz
// Date: 5/19/25

// Sort the characters of the string in alphabetical order
function sortString(inputString) {
  return inputString.split('').sort().join('');
}

// Generates an anagram of a given string
function anagram(inputString) {
  const charArray = inputString.split('');
  for (let i = charArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
  }
  return charArray.join('');
}

// Click listener for the button
$('#submit').click(function () {
  // Get value from input field
  const userName = $("#user-name").val();

  // Debug
  console.log("User input:", userName);

  // Sort the string
  const userNameSorted = sortString(userName);

  // Create anagram
  const userNameAnagram = anagram(userName);

  // Display all three results
  $("#output").append(`
    <div class="text" style="display:none">
      <p>Sorted: ${userNameSorted}</p>
      <p>Anagram: ${userNameAnagram}</p>
      <p>Original: ${userName}</p>
    </div>
  `);
  $(".text:last").fadeIn(500);
});






