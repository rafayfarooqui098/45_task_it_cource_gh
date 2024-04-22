"use strict";
// Store the names of your favorite pizzas in an array
const favorite_pizzas = ['Pepperoni', 'Margherita', 'Hawaiian'];
// Use a for loop to print the name of each pizza
for (let pizza of favorite_pizzas) {
    console.log(pizza); // Print the name of the pizza
}
// Modify the for loop to print a sentence using the name of the pizza
for (let pizza of favorite_pizzas) {
    console.log(`I like ${pizza} pizza.`);
}
// Print a sentence stating how much you like pizza
console.log("I really love pizza!");
