// Define the alien's color
let alien_color = 'green'; // Change this value to 'yellow' or 'red' to make the test fail

// Version that passes the if test (when alien_color is 'green')
console.log("Version that passes the if test:");
if (alien_color === 'green') {
    console.log("The player just earned 5 points!");
}

// Change the alien's color to something other than 'green'
alien_color = 'red'; // Change this value to 'green' to make the test pass

// Version that fails the if test (when alien_color is not 'green')
console.log("\nVersion that fails the if test:");
if (alien_color === 'green') {
    console.log("The player just earned 5 points!"); // This will not print when alien_color is 'red'
}
