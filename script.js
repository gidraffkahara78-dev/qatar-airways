// script.js

// Function to perform flight search
function searchFlights() {
    // Placeholder for search functionality
    console.log('Searching for flights...');
}

// Function for form validation
function validateForm(form) {
    // Placeholder for validation
    if (form.destination.value === '') {
        alert('Please enter a destination.');
        return false;
    }
    return true;
}

// Sample flight data
const sampleFlights = [
    { flightNumber: 'QA123', destination: 'Doha', price: 500 },
    { flightNumber: 'QA456', destination: 'Dubai', price: 600 }
];

// Function to display flights
function displayFlights(flights) {
    flights.forEach(flight => {
        console.log(`Flight Number: ${flight.flightNumber}, Destination: ${flight.destination}, Price: $${flight.price}`);
    });
}

// Example usage
searchFlights(); // Call search function
const form = { destination: { value: 'Doha' } }; // Mock form data
if (validateForm(form)) {
    displayFlights(sampleFlights);
}