// Define the make_sandwich function
function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log("- " + item);
    }
}

// Call the function three times with different numbers of arguments
make_sandwich('ham', 'cheese', 'lettuce');
make_sandwich('turkey', 'bacon');
make_sandwich('peanut butter', 'jelly');
