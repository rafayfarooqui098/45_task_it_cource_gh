// Store the names of animals with a common characteristic in an array
const animals: string[] = ['dog', 'cat', 'rabbit'];

// Use a for loop to print the name of each animal
for (let animal of animals) {
    console.log(animal); // Print the name of the animal
}

// Modify the for loop to print a statement about each animal
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`); // Print a statement about each animal
}

// Print a sentence stating what these animals have in common
console.log("Any of these animals would make a great pet!");
