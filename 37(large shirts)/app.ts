// Define the make_shirt function with default parameters
function make_shirt(size: string = 'large', message: string = 'I love TypeScript'): void {
    console.log(`Creating a ${size} shirt with the message: "${message}"`);
}

// Call the function to make a large shirt with the default message
make_shirt();

// Call the function to make a medium shirt with the default message
make_shirt('medium');

// Call the function to make a shirt of any size with a different message
make_shirt('small', 'Hello, World!');
