// Find an endpoint that has data in it and store it in a variable.
const url = "https://cat-fact.herokuapp.com/facts";

// Request data from that server.
const requestedData = fetch(url);

requestedData.then((dataInResponse) => dataInResponse.json()).then((objects) => objects.map((object) => console.log(object)));

// Get data.
// Convert data to JSON.
// Manipulate JSON data.

// Handle success in getting data.

// Handle failure in getting data.

// Check if you have access to the data.

// Render data.

// Get the data, convert it to JSON, access the parts you need