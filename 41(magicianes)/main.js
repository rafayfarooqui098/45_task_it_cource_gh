"use strict";
// Define the show_magicians function
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Define an array of magician's names
const magicians = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
// Call the show_magicians function to print the names of magicians in the array
show_magicians(magicians);
