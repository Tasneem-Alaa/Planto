document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.querySelector("#registerForm");
  const resetBtn = document.querySelector(".reset-btn");
  const submitBtn = document.querySelector(".submit-btn");

  // Function to validate password
  function validatePassword(password) {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
  }

  // Handle form submission
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting normally

    const username = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-pass").value;
    const birthDate = document.getElementById("birthdate").value;
    const gender = document.querySelector('input[name="gender"]:checked')
      ? document.querySelector('input[name="gender"]:checked').value
      : "";

    if (!username || !email || !password || !confirmPassword) {
      alert("Please fill in all required fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!validatePassword(password)) {
      alert(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }

    const user = {
      username: username,
      email: email,
      password: password,
      birthDate: birthDate,
      gender: gender,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration successful! You can now log in.");

    window.location.href = "login.html";
  });

  // Handle reset button click
  resetBtn.addEventListener("click", function () {
    registerForm.reset(); // Reset the form fields
  });
});
