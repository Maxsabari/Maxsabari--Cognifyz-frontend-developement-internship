// Form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    // Validate the form fields
    if (name.value === '') {
        document.getElementById('nameError').innerText = 'Name is required';
    } else {
        document.getElementById('nameError').innerText = '';
    }

    if (email.value === '') {
        document.getElementById('emailError').innerText = 'Email is required';
    } else {
        document.getElementById('emailError').innerText = '';
    }

    if (message.value === '') {
        document.getElementById('messageError').innerText = 'Message is required';
    } else {
        document.getElementById('messageError').innerText = '';
    }
});

// Button click to change background color
const button = document.querySelector('button');
button.addEventListener('click', function() {
    document.body.style.backgroundColor = '#e0f7fa'; // Change background color to light blue
});
