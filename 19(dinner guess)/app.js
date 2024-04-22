"use strict";
// Define the initial list of guests
let guestList = ['Alice', 'David', 'Eve', 'Frank', 'Grace'];
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
// Print the number of people you are inviting to dinner
console.log(`\nYou are inviting ${guestList.length} people to dinner.`);
// Remove the last two names from your list
guestList.pop();
guestList.pop();
// Print your list to make sure you actually have an empty list at the end of your program
console.log("\nFinal guest list (should be empty):", guestList);
