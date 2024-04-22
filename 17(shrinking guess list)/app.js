"use strict";
// Define the initial list of guests
var guestList = ['bilal', 'Bobby', 'nazish'];
// Print the original set of invitations
console.log("Original set of invitations:");
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are invited to dinner.`);
});
// Specify the guest who can't make it
const cannotMakeIt = 'Bobby';
// Print the name of the guest who can't make it
console.log(`\n${cannotMakeIt} can't make it to the dinner.`);
// Replace the guest who can't make it with a new guest
const newGuest = 'nazish';
const index = guestList.indexOf(cannotMakeIt); // Find the index of the guest who can't make it
if (index !== -1) {
    // Replace the guest with the new guest
    guestList[index] = newGuest;
}
// Inform people that you found a bigger dinner table
console.log("\nGood news! We've found a bigger dinner table!");
// Add one new guest to the beginning of the list
guestList.unshift('shahani');
// Add one new guest to the middle of the list
const middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, 'Fahad');
// Add one new guest to the end of the list
guestList.push('rahim');
// Print the updated set of invitations
console.log("\nUpdated set of invitations:");
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are invited to dinner.`);
});
// Define the initial list of guests
var guestList = ['bilal', 'bobby', 'nazish', 'shahani', 'fahad'];
// Print the original set of invitations
console.log("Original set of invitations:");
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are invited to dinner.`);
});
// Inform that you can invite only two people
console.log("\nUnfortunately, I can invite only two people to dinner.");
// Remove guests from the list one at a time until only two names remain
while (guestList.length > 2) {
    const removedGuest = guestList.pop(); // Remove the last guest from the list
    console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
}
// Print messages to the two people still on your list
console.log("\nYou are still invited to dinner:");
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
});
// Remove the last two names from your list
guestList.pop();
guestList.pop();
// Print your list to make sure you actually have an empty list at the end of your program
console.log("\nFinal guest list (should be empty):", guestList);
