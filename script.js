// Get references to the form and table elements
const userForm = document.querySelector('#user-form');
const userList = document.querySelector('#user-list tbody');

// Add an event listener for the form submission
userForm.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form values
  const fullName = userForm.elements['full-name'].value;
  const email = userForm.elements['email'].value;
  const dateOfBirth = userForm.elements['date-of-birth'].value;
  const gender = userForm.elements['gender'].value;
  const hobby = userForm.elements['hobby'].value;
  const country = userForm.elements['country'].value;
  const state = userForm.elements['state'].value;
  const city = userForm.elements['city'].value;

  // Create a new table row element
  const newRow = document.createElement('tr');

  // Add the user data as table cells
  newRow.innerHTML = `
    <td>${fullName}</td>
    <td>${email}</td>
    <td>${dateOfBirth}</td>
    <td>${gender}</td>
    <td>${hobby}</td>
    <td>${country}</td>
    <td>${state}</td>
    <td>${city}</td>
    <td><button class="delete-button">Delete</button></td>
  `;

  // Add the row to the table
  userList.appendChild(newRow);

  // Reset the form
  userForm.reset();
});
// Populate the state select element based on the selected country
function populateStates(selectedState) {
  const country = userForm.elements['country'].value;
  const stateSelect = userForm.elements['state'];

  // Clear the current state options
  stateSelect.innerHTML = '<option value="">Select State</option>';

  // Populate the state options for the selected country
  if (country === 'usa') {
    stateSelect.innerHTML += `
      <option value="new-york">New York</option>
      <option value="california">California</option>
      <option value="texas">Texas</option>
    `;
  } else if (country === 'canada') {
    stateSelect.innerHTML += `
      <option value="ontario">Ontario</option>
      <option value="quebec">Quebec</option>
      <option value="alberta">Alberta</option>
    `;
  } else if (country === 'mexico') {
    stateSelect.innerHTML += `
      <option value="jalisco">Jalisco</option>
      <option value="mexico-city">Mexico City</option>
      <option value="baja-california">Baja California</option>
    `;
  }

  // If a state is already selected, select it in the state select element
  if (selectedState) {
    stateSelect.value = selectedState;
  }
}


function populateCities() {
  const stateSelect = document.getElementById("state");
  const citySelect = document.getElementById("city");
  const selectedState = stateSelect.options[stateSelect.selectedIndex].value;

  // Clear the city dropdown
  citySelect.innerHTML = "<option value=''>Select City</option>";

  // Populate the city dropdown based on the selected state
  if (selectedState === "new-york") {
    const cities = ["New York City", "Buffalo", "Albany", "Syracuse", "Rochester"];
    for (let i = 0; i < cities.length; i++) {
      const city = cities[i];
      const option = document.createElement("option");
      option.value = city;
      option.text = city;
      citySelect.add(option);
    }
  } else if (selectedState === "california") {
    const cities = ["Los Angeles", "San Francisco", "San Diego", "Sacramento", "Oakland"];
    for (let i = 0; i < cities.length; i++) {
      const city = cities[i];
      const option = document.createElement("option");
      option.value = city;
      option.text = city;
      citySelect.add(option);
    }
  } else if (selectedState === "texas") {
    const cities = ["Houston", "Dallas", "Austin", "San Antonio", "El Paso"];
    for (let i = 0; i < cities.length; i++) {
      const city = cities[i];
      const option = document.createElement("option");
      option.value = city;
      option.text = city;
      citySelect.add(option);
    }
  } else if (selectedState === "ontario") {
    const cities = ["Toronto", "Ottawa", "Mississauga", "Brampton", "Hamilton"];
    for (let i = 0; i < cities.length; i++) {
      const city = cities[i];
      const option = document.createElement("option");
      option.value = city;
      option.text = city;
      citySelect.add(option);
    }
  } else if (selectedState === "quebec") {
    const cities = ["Montreal", "Quebec City", "Laval", "Gatineau", "Longueuil"];
    for (let i = 0; i < cities.length; i++) {
      const city = cities[i];
      const option = document.createElement("option");
      option.value = city;
      option.text = city;
      citySelect.add(option);
    }
  } else if (selectedState === "alberta") {
    const cities = ["Calgary", "Edmonton", "Red Deer", "Lethbridge", "Medicine Hat"];
    for (let i = 0; i < cities.length; i++) {
      const city = cities[i];
      const option = document.createElement("option");
      option.value = city;
      option.text = city;
      citySelect.add(option);
    }
  } else if (selectedState === "jalisco") {
    const cities = ["Guadalajara", "Zapopan", "Tlaquepaque", "Puerto Vallarta", "Tonalá"];
    for (let i = 0; i < cities.length; i++) {
      const city = cities[i];
      const option = document.createElement("option");
      option.value = city;
      option.text = city;
      citySelect.add(option);
    }
  } else if (selectedState === "veracruz") {
    const cities = ["Veracruz", "Xalapa", "Coatzacoalcos", "Córdoba", "Minatitlán"];
    for (let i = 0; i < cities.length; i++) {
    const city = cities[i];
    const option = document.createElement("option");
    option.value = city;
    option.text = city;
    citySelect.add(option);
    }
    } else if (selectedState === "baja-california") {
    const cities = ["Tijuana", "Mexicali", "Ensenada", "Rosarito", "Tecate"];
    for (let i = 0; i < cities.length; i++) {
    const city = cities[i];
    const option = document.createElement("option");
    option.value = city;
    option.text = city;
    citySelect.add(option);
    }
    } else if (selectedState === "chiapas") {
    const cities = ["Tuxtla Gutiérrez", "Tapachula", "San Cristóbal de las Casas", "Comitán", "Villaflores"];
    for (let i = 0; i < cities.length; i++) {
    const city = cities[i];
    const option = document.createElement("option");
    option.value = city;
    option.text = city;
    citySelect.add(option);
    }
    } else {
    // If the selected state doesn't have any cities listed, show a message
    const option = document.createElement("option");
    option.text = "No cities available";
    citySelect.add(option);
    }
    }
    
    // Attach the populateCities function to the state select element
    const stateSelect = document.getElementById("state");
    stateSelect.addEventListener("change", populateCities)


function addUserToList(event) {
  event.preventDefault();

  const form = document.getElementById("user-form");
  const fullName = form.elements["full-name"].value;
  const email = form.elements["email"].value;
  const dateOfBirth = form.elements["date-of-birth"].value;
  const gender = form.elements["gender"].value;
  const hobby = form.elements["hobby"].value;
  const country = form.elements["country"].value;
  const state = form.elements["state"].value;
  const city = form.elements["city"].value;

  const userList = document.getElementById("user-list");
  const row = userList.insertRow();

  row.insertCell().textContent = fullName;
  row.insertCell().textContent = email;
  row.insertCell().textContent = dateOfBirth;
  row.insertCell().textContent = gender;
  row.insertCell().textContent = hobby;
  row.insertCell().textContent = country;
  row.insertCell().textContent = state;
  row.insertCell().textContent = city;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delee";
  deleteButton.addEventListener("click", function () {
    row.remove();
  });
  row.insertCell().appendChild(deleteButton);

  // Clear the form
  form.reset();
}

document.addEventListener("DOMContentLoaded", function () {
  const stateSelect = document.getElementById("state");
  stateSelect.addEventListener("change", populateCities);

  const form = document.getElementById("user-form");
  form.addEventListener("submit", addUserToList);
});









