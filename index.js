// Find an endpoint that has data in it and store it in a variable.
const url = "https://cat-fact.herokuapp.com/facts";

// Request data from that server.
const requestData = fetch(url);

// Parse data
requestData
  .then((responseData) => {
    if (!responseData.ok) {
      throw new Error(`HTTP error: ${responseData.status}`);
    } else {
      return responseData.json();
    }
  })
  .then((objects) =>
    objects.map((object) => {
      const list = document.querySelector("#list");
      renderData(list, object.text);
    })
  ) // Handle errors
  .catch((error) => {
    console.error(`Error: ${error}`);
  });

// Render data.
function renderData(list, text) {
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}

// Get data.
// Convert data to JSON.
// Manipulate JSON data.

// Handle success in getting data.

// Handle failure in getting data.

// Check if you have access to the data.

// Get the data, convert it to JSON, access the parts you need

// Get data from any api
async function getData(url) {
  try {
  } catch {}
}
