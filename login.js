function toggleLoginForm() {
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
  document.getElementById('error-message').textContent = '';
}

// ✅ Login
function validateLogin() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  const storedUsername = localStorage.getItem('registeredUsername');
  const storedPassword = localStorage.getItem('registeredPassword');

  if (username === '' || password === '') {
    document.getElementById('error-message').textContent = 'Please enter both username and password.';
    return false;
  }

  if (username === storedUsername && password === storedPassword) {
    document.getElementById('error-message').textContent = '';
    alert('Login successful!');
    window.location.href = 'index.html'; // or dashboard page
    return false;
  } else {
    document.getElementById('error-message').textContent = 'Username or password is incorrect.';
    return false;
  }
}

// ✅ Register
function registerUser() {
  const username = document.getElementById('reg-username').value.trim();
  const password = document.getElementById('reg-password').value.trim();

  if (username === '' || password === '') {
    document.getElementById('register-message').textContent = 'Please enter both username and password.';
    return false;
  }

  localStorage.setItem('registeredUsername', username);
  localStorage.setItem('registeredPassword', password);

  document.getElementById('register-message').textContent = 'Registration successful! Please log in.';

  document.getElementById('reg-username').value = '';
  document.getElementById('reg-password').value = '';

  setTimeout(() => {
    showLogin();
    document.getElementById('register-message').textContent = '';
  }, 1500);

  return false;
}

// ✅ Forgot Password Navigation
function showForgotPassword() {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('forgot-password-form').style.display = 'block';
}

function hideForgotPassword() {
  document.getElementById('forgot-password-form').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
}

function showRegister() {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('register-form').style.display = 'block';
}

function showLogin() {
  document.getElementById('register-form').style.display = 'none';
  document.getElementById('forgot-password-form').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
}

// ✅ Reset Password
function resetPassword() {
  const newPassword = document.getElementById('new-password').value.trim();
  const confirmNewPassword = document.getElementById('confirm-new-password').value.trim();

  if (newPassword === '' || confirmNewPassword === '') {
    document.getElementById('forgot-password-message').textContent = 'Both new password fields are required.';
    return false;
  }

  if (newPassword !== confirmNewPassword) {
    document.getElementById('forgot-password-message').textContent = 'New passwords do not match.';
    return false;
  }

  localStorage.setItem('registeredPassword', newPassword);
  alert('Password has been reset successfully.');

  hideForgotPassword();
  return false;
}
