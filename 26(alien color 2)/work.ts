// Define the alien's color
let alien_color = 'green'; // Change this value to something other than 'green' to run the else block

// Version where the if block runs (when alien_color is 'green')
console.log("Version where the if block runs:");
if (alien_color === 'green') {
    console.log("The player just earned 5 points for shooting the alien!");
} else {
    console.log("The player just earned 10 points for shooting the alien!");
}

// Change the alien's color to something other than 'green'
alien_color = 'red'; // Change this value to 'green' to run the if block

// Version where the else block runs (when alien_color is not 'green')
console.log("\nVersion where the else block runs:");
if (alien_color === 'green') {
    console.log("The player just earned 5 points for shooting the alien!"); 
} else {
    console.log("The player just earned 10 points for shooting the alien!");
}
