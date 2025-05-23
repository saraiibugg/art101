// index.js - Conditionals
// Author: Saraí Muñoz
// Date: 5/22/25


/*
 * Adventure Time Character Sorter
 * This program assigns users to a character from Adventure Time based on their name.
 * A simple hash function is used to generate a numeric value from the input,
 * making the result feel more mysterious and less predictable.
 * The program updates the page with the character name, a short description, and an image.
 */

// Array of characters
const characterArray = [
  {
    name: "Finn the Human",
    description: "You're brave, loyal, and always ready for adventure!",
    image: "https://www.looper.com/img/gallery/things-you-never-noticed-in-the-first-adventure-time-episode/intro-1615252241.jpg"
  },
  {
    name: "Jake the Dog",
    description: "You're chill, creative, and always there for your friends.",
    image: "https://preview.redd.it/jake-is-so-damn-cute-with-his-little-tongue-out-v0-rguc8sa333z91.jpg?width=640&crop=smart&auto=webp&s=81badb248c72b9500a5fc84fa092a1a23c29955f"
  },
  {
    name: "Princess Bubblegum",
    description: "You're intelligent, scientific, and rule with compassion.",
    image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/10/princess-bubblegum.jpg"
  },
  {
    name: "Marceline the Vampire Queen",
    description: "You're cool, complex, and march to the beat of your own bass guitar.",
    image: "https://static.wikia.nocookie.net/atfanfic/images/9/92/Daddy_s_little_monster_by_sircinnamon-d8to537.png/revision/latest/scale-to-width-down/250?cb=20151017001731ps://static.wikia.nocookie.net/adventuretimewithfinnandjake/images/8/8e/Marceline.png"
  },
  {
    name: "Ice King",
    description: "You might seem misunderstood, but deep down, you're full of heart.",
    image: "https://preview.redd.it/why-do-you-love-ice-king-v0-q3g9xggoewce1.jpeg?width=640&crop=smart&auto=webp&s=ceaccc5ac2ec5a14f1a021e672a2f63c16d86695"
  }
];

// Simple hash function to make sorting less predictable
function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

// Main function to sort user into a character
function sortingHat(str) {
  const index = hashCode(str) % characterArray.length;
  return characterArray[index];
}

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("button");

  button.addEventListener("click", function () {
    const name = document.getElementById("input").value.trim();

    if (name === "") return;

    const character = sortingHat(name);

    const output = document.getElementById("output");
    output.innerHTML = ""; // Clear previous output

    // Create styled paragraph
    const p = document.createElement("p");
    p.textContent = `You've been matched with ${character.name}! ${character.description}`;
    p.style.fontSize = "18px";
    p.style.fontWeight = "bold";
    p.style.marginBottom = "10px";

    // Create image element
    const img = document.createElement("img");
    img.src = character.image;
    img.alt = character.name;
    img.style.maxWidth = "200px";
    img.style.borderRadius = "12px";
    img.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";

    output.appendChild(p);
    output.appendChild(img);
  });
});

