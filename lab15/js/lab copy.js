/*
 * Author: Saraí Munoz
 * Date: 6/2/25
 * Lab 15 - AJAX Dog API
 * Description: Fetches a random dog image and displays it
 */

$("#activate").click(function () {
  $.ajax({
    url: "https://dog.ceo/api/breeds/image/random",
    type: "GET",
    dataType: "json",
    success: function (data) {
      $("#output").html(`
        <img src="${data.message}" alt="Random Dog" style="max-width:300px; display:block; margin-bottom:10px;" />
        <p>Enjoy your doggo!</p>
      `);
    }
    // No error handling shown, just do nothing if it fails
  });
});
$.ajax({
  url: "https://dog.ceo/api/breeds/image/random",
  type: "GET",
  dataType: "json",
  success: function (data) { console.log("Dog URL:", data.message); }
});



