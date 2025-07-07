document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const loginDropdown = document.getElementById('loginDropdown');
    const signupDropdown = document.getElementById('signupDropdown');
    const loginCategorySelect = document.getElementById('loginCategorySelect');
    const signupCategorySelect = document.getElementById('signupCategorySelect');
    const loginSubmitBtn = document.getElementById('loginSubmitBtn');
    const signupSubmitBtn = document.getElementById('signupSubmitBtn');

    // Show the login dropdown when login button is clicked
    loginBtn.addEventListener('click', () => {
        loginDropdown.classList.toggle('hidden');
        signupDropdown.classList.add('hidden'); // Hide the signup dropdown if it's visible
    });

    // Show the signup dropdown when signup button is clicked
    signupBtn.addEventListener('click', () => {
        signupDropdown.classList.toggle('hidden');
        loginDropdown.classList.add('hidden'); // Hide the login dropdown if it's visible
    });

    // Handle login dropdown submission
    loginSubmitBtn.addEventListener('click', () => {
        const selectedCategory = loginCategorySelect.value;
        if (selectedCategory === 'farmer') {
            window.location.href = 'login.html';
        } else if (selectedCategory === 'customer') {
            window.location.href = 'login.html'; // Update this if login pages are different
        }
    });

    // Handle signup dropdown submission
    signupSubmitBtn.addEventListener('click', () => {
        const selectedCategory = signupCategorySelect.value;
        if (selectedCategory === 'farmer') {
            window.location.href = 'farmer-registration.html';
        } else if (selectedCategory === 'customer') {
            window.location.href = 'customer-registration.html';
        }
    });
});
