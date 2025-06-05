/*
 * Author: Saraí Munoz
 * Date: 6/4/25
 * Lab 16 - JSON and APIs
 * Description: Uses jQuery AJAX to get JSON data from the XKCD API and display it on the webpage.
 */

$(document).ready(function () {
  // Use AJAX to call XKCD API with a CORS proxy
  $.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json", // CORS proxy + API endpoint
    type: "GET",
    dataType: "json",
    success: function (comicObj) {
      console.log(comicObj);

      // Build comic HTML
      const comicHTML = `
        <h3>${comicObj.title}</h3>
        <img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}">
        <p>${comicObj.alt}</p>
      `;

      // Correct selector here: target the div with id="output"
      $("#output").html(comicHTML);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("Error:", textStatus, errorThrown);
    }
  });
});







