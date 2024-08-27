// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Select the login form and buttons
    const loginForm = document.getElementById('loginForm');
    const backButton = document.querySelector('.back-btn');

    // Add an event listener for form submission
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form from submitting normally

        // Get the values from the form inputs
        const enteredEmail = document.getElementById('loginEmail').value.trim();
        const enteredPassword = document.getElementById('loginPassword').value;

        // Check for admin credentials first
        if (enteredEmail === 'admin@gmail.com' && enteredPassword === 'admin') {
            alert('Admin login successful!');
            window.location.href = 'admin.html'; // Redirect to admin page
        } else {
            // Retrieve the user data from localStorage
            const storedUser = JSON.parse(localStorage.getItem('user'));

            // Validate entered credentials
            if (storedUser && storedUser.email === enteredEmail && storedUser.password === enteredPassword) {
                alert('Login successful!');
                window.location.href = 'homepage.html'; // Redirect to homepage
            } else {
                document.getElementById('errorMessage').textContent = 'Invalid email or password';
                document.getElementById('errorMessage').style.display = 'block'; // Show error message
            }
        }
    });

    // Add an event listener for the back button
    if (backButton) {
        backButton.addEventListener('click', function () {
            window.history.back(); // Go back to the previous page
        });
    }
});
