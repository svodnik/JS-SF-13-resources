/*
  Write code that generates random addresses
  Each time you load or reload the page in a browser, your program should log
  a new randomly-generated address to the console. 

  Step 1:
    Create arrays that contain dummy data for each of the following: 
    street number, street name, city name, state name, and zip code

  Step 2:
    Write code that randomly selects one item from each of these arrays, uses
    the selected values to construct a string containing a random address, and 
    then logs the result to the console.

  Step 3:
    Save your work, load your app in the browser, open the console, and verify
    that a random address is logged.

  Step 4:
    Reload the page and verify that a different random address is logged.

  Example output:  
    34578 Dolphin Street, Wonka NY, 44506
*/

let streetNum = ["2390", "938", "2", "3085"];
let streetName = ["Appomattox Rd.", "5th St.", "Sassafras Ave.", "Park Pl."];
let cityName = ["San Francisco", "Richmond", "New York", "Springfield"];
let stateName = ["CA", "VA", "NY", "MO"];
let zipCode = ["11111", "55555", "44444", "77777"];

console.log(
  streetNum[Math.floor(Math.random() * 4)] +
    " " +
    streetName[Math.floor(Math.random() * 4)] +
    ", " +
    cityName[Math.floor(Math.random() * 4)] +
    " " +
    stateName[Math.floor(Math.random() * 4)] +
    ", " +
    zipCode[Math.floor(Math.random() * 4)]
);
