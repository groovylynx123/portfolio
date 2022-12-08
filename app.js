// Make a GET request to the fruityvice api to retrieve some fruit data
const apiRequest = async () => {
  const BASE_URL = 'https://www.fruityvice.com/api/'

  // This endpoint (https://www.fruityvice.com/doc/index.html#api-GET-getAll) returns a list of all the fruits and their info, feel free to play around with different endpoints!
  const resourcePath = 'fruit/all'

  // Making a fetch request to an API endpoint
  // Note: a fetch request is an asynchronous operation, and `await` tells the program to wait until the request has been completed before continuing
  const endpoint = BASE_URL + resourcePath;
  const response = await fetch(buildProxyEndpoint(endpoint), {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    }
  });

  console.log(response);

  // Return the response in JSON format
  return response.json();
}

const updatePage = async () => {
  const gallery = document.getElementById('cs1300-gallery');

  // Make API request and get an array of fruit objects
  const fruitsArray = await apiRequest();
  console.log(fruitsArray);

  // TODO: Use either `map` and/or `filter` to extract some data from the array of fruit objects
  // For example, find "name of all fruits whose sugar > 15",

  const result = fruitsArray.filter(checkFamily);
  console.log(result)

  function checkFamily(fruit) {
      return fruit.family === 'Rosaceae';
  }

  // TODO: Create a new HTML element to display your data

  
  
const list = document.getElementById("myFruitList");
  
result.forEach((item)=>{
  const li = document.createElement("li");
  li.innerText = item.name;
  list.appendChild(li);
})
  // TODO: Append your new element to the page

}

// window.onscroll = function() {myFunction()};
// // Get the navbar
// var navbar = document.getElementById("nav-bar");
// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;
// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

// SAMPLE CODE of how to create and append a new HTML element to the page
const exampleAddElement = () => {
  // Create a new HTML element and set its properties
  const newElement = document.createElement('div');
  newElement.innerHTML = "this text is inside a div";

  // Append the new element to an existing part of the webpage
  const existingElement = document.getElementById('example-id');
  existingElement.append(newElement);
}

/**
 * To access information in this API, we need to send our requests through a proxy due to CORS restrictions.
 * This will be used as our proxy to avoid CORS issues.
 */
// do not touch - stencil code to add the proxy to avoid CORS
const PROXY_URL = 'https://cs1300-cors-anywhere.herokuapp.com/'
const buildProxyEndpoint = (endpoint) => `${PROXY_URL}${endpoint}`;
