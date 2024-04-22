// Define variables for testing
let car = 'subaru';
let color = 'Red';
let age = 25;
let height = 5.9;
let numbers = [1, 2, 3, 4, 5];



// Tests for equality and inequality with strings
console.log("Tests for equality and inequality with strings:");
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // Expected: True

console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota'); // Expected: False

// Tests using the lower case function
console.log("\nTests using the lower case function:");
console.log("Is color.toLowerCase() == 'red'? I predict True.");
console.log(color.toLowerCase() == 'red'); // Expected: True

console.log("Is color.toLowerCase() == 'blue'? I predict False.");
console.log(color.toLowerCase() == 'blue'); // Expected: False

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("\nNumerical tests:");
console.log("Is age == 25? I predict True.");
console.log(age == 25); // Expected: True

console.log("Is age != 25? I predict False.");
console.log(age != 25); // Expected: False

console.log("Is height > 5.5? I predict True.");
console.log(height > 5.5); // Expected: True

console.log("Is height < 6.0? I predict True.");
console.log(height < 6.0); // Expected: True

console.log("Is height >= 6.0? I predict False.");
console.log(height >= 6.0); // Expected: False

console.log("Is height <= 5.9? I predict True.");
console.log(height <= 5.9); // Expected: True

// Tests using "and" and "or" operators
console.log("\nTests using 'and' and 'or' operators:");
console.log("Is age > 20 and height > 5.5? I predict True.");
console.log(age > 20 && height > 5.5); // Expected: True

console.log("Is age < 20 or height > 6.0? I predict False.");
console.log(age < 20 || height > 6.0); // Expected: False

// Test whether an item is in an array
console.log("\nTests for whether an item is in an array:");
console.log("Is 3 in the numbers array? I predict True.");
console.log(numbers.includes(3)); // Expected: True

console.log("Is 7 in the numbers array? I predict False.");
console.log(numbers.includes(7)); // Expected: False

