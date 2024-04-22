// Define an array of favorite fruits
const fruits: string[] = ['Apple', 'Banana', 'Cherry'];

// Try to access an invalid index beyond the range of the array
const invalidIndex = 5; // This index is out of range for the array
const fruit = fruits[invalidIndex];

// Check if the accessed value is undefined and print an error message
if (fruit === undefined) {
    console.log(`Error: Index ${invalidIndex} is out of range.`);
} else {
    console.log(`Fruit at index ${invalidIndex}: ${fruit}`);
}

// Correcting the error: access a valid index within the range of the array
const validIndex = 1; // This index is within the range of the array
const validFruit = fruits[validIndex];

// Print the value at the valid index
console.log(`Fruit at index ${validIndex}: ${validFruit}`);
