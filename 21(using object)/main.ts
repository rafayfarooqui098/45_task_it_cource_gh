// Define an array of car objects
const cars: { make: string; model: string; year: number; color: string }[] = [
    {
        make: 'Toyota',
        model: 'Camry',
        year: 2021,
        color: 'Blue'
    },
    {
        make: 'Honda',
        model: 'Civic',
        year: 2020,
        color: 'Red'
    },
    {
        make: 'Ford',
        model: 'Mustang',
        year: 2019,
        color: 'Black'
    }
];

// Print the details of each car
console.log("List of cars:");
cars.forEach((car, index) => {
    console.log(`Car ${index + 1}:`);
    console.log(`- Make: ${car.make}`);
    console.log(`- Model: ${car.model}`);
    console.log(`- Year: ${car.year}`);
    console.log(`- Color: ${car.color}`);
    console.log(''); // Print a blank line for separation
});
