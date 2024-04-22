// Define an array of places to visit
let places: string[] = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Balaochistan'];

// Print the array in its original order
console.log("Original order:");
console.log(places);

// Print the array in alphabetical order without modifying the actual list
console.log("\nAlphabetical order:");
console.log([...places].sort());

// Show that the array is still in its original order
console.log("\nOriginal order (again):");
console.log(places);

// Print the array in reverse alphabetical order without modifying the actual list
console.log("\nReverse alphabetical order:");
console.log([...places].sort().reverse());

// Show that the array is still in its original order
console.log("\nOriginal order (again):");
console.log(places);

// Reverse the order of the list
places.reverse();
console.log("\nReversed order:");
console.log(places);

// Reverse the order of the list again to return to original order
places.reverse();
console.log("\nRestored to original order:");
console.log(places);

// Sort the array in alphabetical order
places.sort();
console.log("\nSorted in alphabetical order:");
console.log(places);

// Sort the array in reverse alphabetical order
places.sort().reverse();
console.log("\nSorted in reverse alphabetical order:");
console.log(places);
