document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('registerUsername').value;
        const password = document.getElementById('registerPassword').value;

        if (username && password) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            messageDiv.innerText = 'Registration successful!';
            messageDiv.style.color = 'green';
        } else {
            messageDiv.innerText = 'Please enter both username and password.';
            messageDiv.style.color = 'red';
        }
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (username === storedUsername && password === storedPassword) {
            messageDiv.innerText = 'Login successful!';
            messageDiv.style.color = 'green';
        } else {
            messageDiv.innerText = 'Invalid username or password.';
            messageDiv.style.color = 'red';
        }
    });
});
