// Validate Farmer Registration Form
function validateFarmerForm() {
    const form = document.getElementById('farmerForm');
    const fields = ['fname', 'lname', 'email', 'phone', 'address', 'city', 'state', 'password'];
    let isValid = true;

    fields.forEach(field => {
        const input = document.getElementById(field);
        if (!input.value.trim()) {
            isValid = false;
            document.getElementById('registration-error-message').textContent = 'Please fill out all fields.';
        }
    });

    if (isValid) {
        // Redirect or process the form submission here
        window.location.href = 'index.html'; // Change to the actual URL
    }

    return false; // Prevent the default form submission
}

// Validate Customer Registration Form
function validateCustomerForm() {
    const form = document.getElementById('customerForm');
    const fields = ['fname', 'lname', 'email', 'phone', 'password'];
    let isValid = true;

    fields.forEach(field => {
        const input = document.getElementById(field);
        if (!input.value.trim()) {
            isValid = false;
            document.getElementById('registration-error-message').textContent = 'Please fill out all fields.';
        }
    });

    if (isValid) {
        // Redirect or process the form submission here
        window.location.href = 'index.html'; // Change to the actual URL
    }

    return false; // Prevent the default form submission
}
