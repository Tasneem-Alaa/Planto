document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.querySelector('#registerForm');
    const resetBtn = document.querySelector('.reset-btn');
    const submitBtn = document.querySelector('.submit-btn');

    // Handle form submission
    registerForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form from submitting normally

        const username = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const birthDate = document.getElementById('birthdate').value;
        const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
        
        if (!username || !email || !password) {
            alert('Please fill in all required fields.');
            return;
        }

        const user = {
            username: username,
            email: email,
            password: password,
            birthDate: birthDate,
            gender: gender
        };

        localStorage.setItem('user', JSON.stringify(user));

        alert('Registration successful! You can now log in.');

        window.location.href = 'login.html';
    });

    // Handle reset button click
    resetBtn.addEventListener('click', function () {
        registerForm.reset(); // Reset the form fields
    });
});
