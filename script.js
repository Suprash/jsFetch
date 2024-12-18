
async function fetchRandomUser() {
    const url = 'https://randomuser.me/api/';

    try {
        const response = await fetch(url); 
        const data = await response.json(); // Convert response to JSON
        const user = data.results[0]; // Extract user information
        console.log(user);
        displayUser(user); // Function to display user details
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to display user details
function displayUser(user) {
    const userContainer = document.getElementById('userContainer');
    userContainer.innerHTML = '';

    // Create a div to hold user information
    const userDiv = document.createElement('div');
    userDiv.classList.add('user-card');

    // User Name
    const userName = document.createElement('h2');
    userName.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;

    // User Image
    const userImage = document.createElement('img');
    userImage.src = user.picture.large;
    userImage.alt = 'User Image';

    // User Email
    const userEmail = document.createElement('p');
    userEmail.textContent = `Email: ${user.email}`;

    // Append elements to the container
    userDiv.appendChild(userImage);
    userDiv.appendChild(userName);
    userDiv.appendChild(userEmail);
    userContainer.appendChild(userDiv);
}

// Add Event Listener to the button
document.getElementById('fetchUser').addEventListener('click', fetchRandomUser);
