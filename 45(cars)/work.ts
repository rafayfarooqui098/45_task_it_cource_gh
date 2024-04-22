let color = "blue"
let features = "GPS,Sunroof"


// Define the create_car function
function create_car(manufacturer: string, model: string, ...options: { [key: string]: any }[]): { manufacturer: string, model: string, [key: string]: any } {
    let car: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };
    for (let option of options) {
        for (let key in option) {
            car[key] = option[key];
        }
    }
    return car;
}

// Call the function with required information and additional name-value pairs
const my_car = create_car('Toyota', 'Camry', {color} , {features});

// Print the object to verify that all information was stored correctly
console.log(my_car);
