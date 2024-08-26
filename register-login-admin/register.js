// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Select the registration form
    const registerForm = document.querySelector('form');

    // Add an event listener for form submission
    registerForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form from submitting normally

        // Get the values from the form inputs
        const username = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const birthDate = document.getElementById('birthdate').value;
        const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
        
        // Get all selected favorite plants
        const favPlantsNodes = document.querySelectorAll('input[name="fav_plants"]:checked');
        const favPlants = Array.from(favPlantsNodes).map(plant => plant.value);

        // Validate required fields
        if (!username || !email || !password) {
            alert('Please fill in all required fields.');
            return;
        }

        // Create user object
        const user = {
            username: username,
            email: email,
            password: password,
            birthDate: birthDate,
            gender: gender,
            favPlants: favPlants
        };

        // Save the user data to localStorage
        localStorage.setItem('user', JSON.stringify(user));

        alert('Registration successful! You can now log in.');

        // Redirect to login page
        window.location.href = 'login.html';
    });
});
