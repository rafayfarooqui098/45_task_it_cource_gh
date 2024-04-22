// Define the current_users and new_users arrays
let current_users: string[] = ['john', 'mary', 'alex', 'emily', 'chris'];
let new_users: string[] = ['chris', 'diana', 'james', 'ALEX', 'sophie'];

// Convert all usernames to lowercase for case-insensitive comparison
current_users = current_users.map(user => user.toLowerCase());

// Loop through the new_users list to check for duplicates
for (let new_user of new_users) {
    // Convert the new username to lowercase for case-insensitive comparison
    let lowercase_new_user = new_user.toLowerCase();

    // Check if the lowercase_new_user exists in the current_users array
    if (current_users.includes(lowercase_new_user)) {
        console.log(`Sorry, the username '${new_user}' is not available. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
        // Add the lowercase_new_user to the current_users array to prevent future duplicates
        current_users.push(lowercase_new_user);
    }
}
