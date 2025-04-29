// index.js - Arrays and Objects
// Author: Saraí Muñoz
// Date: 4/28/25

// Define Variabes
myTransport = ["Hyundai Accent SE","rollerskates"];

// Create an object for my main ride
myMainRide = {
  make: "Hyundai",
  model: "Accent SE",
  year: 2019,
  age: function () {
       return 2025 - this.year;
       }
      }
 //

      // Output
      document.writeln("Getting Around:" + myTransport + "<br>");
      document.writeln("My Main Ride: <pre>", 
        JSON.stringify(myMainRide, null, '\t'), "</pre>");
      //

        

