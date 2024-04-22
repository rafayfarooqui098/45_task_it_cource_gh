// Define an array of favorite books
const favoriteBooks: string[] = [
    'To Kill a Mockingbird by Harper Lee',
    '1984 by George Orwell',
    'Pride and Prejudice by Jane Austen',
    'The Great Gatsby by F. Scott Fitzgerald',
    'Moby Dick by Herman Melville'
];

// Print the list of favorite books
console.log("List of favorite books:");
favoriteBooks.forEach((book, index) => {
    console.log(`${index + 1}. ${book}`);
});
