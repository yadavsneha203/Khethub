function toggleLoginForm() {
    // Clear form fields and error messages when user type changes
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('error-message').textContent = '';
}

function validateLogin() {
    // Basic form validation
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    // Replace this condition with actual authentication logic
    if (username === 'testuser' && password === 'password123') {
        // Login successful
        document.getElementById('error-message').textContent = '';
        return true; // Allow form submission
    } else {
        document.getElementById('error-message').textContent = 'Username or password is incorrect.';
        return false; // Prevent form submission
    }
}

function showForgotPassword() {
    // Hide login form and show forgot password form
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('forgot-password-form').style.display = 'block';
}

function hideForgotPassword() {
    // Hide forgot password form and show login form
    document.getElementById('forgot-password-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

function resetPassword() {
    // Basic validation for password reset form
    const recoveryEmail = document.getElementById('recovery-email').value.trim();
    const newPassword = document.getElementById('new-password').value.trim();
    const confirmNewPassword = document.getElementById('confirm-new-password').value.trim();
    
    if (newPassword === '' || confirmNewPassword === '') {
        document.getElementById('forgot-password-message').textContent = 'Both new password fields are required.';
        return false; // Prevent form submission
    }

    if (newPassword !== confirmNewPassword) {
        document.getElementById('forgot-password-message').textContent = 'New passwords do not match.';
        return false; // Prevent form submission
    }

    // Add actual password reset logic here (e.g., update password in database)
    alert('Password has been reset successfully.');
    
    // Redirect or show success message
    hideForgotPassword();
    return false; // Prevent form submission
}
