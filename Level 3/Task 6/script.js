// Function to validate the form
function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting

    let isValid = true;

    // Get form elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    
    // Get error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Reset error messages
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    messageError.style.display = 'none';

    // Validate Name
    if (name.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        nameError.style.display = 'block';
        isValid = false;
    }

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        emailError.style.display = 'block';
        isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
        isValid = false;
    }

    // Validate Message
    if (message.value.trim() === '') {
        messageError.textContent = 'Message is required.';
        messageError.style.display = 'block';
        isValid = false;
    }

    // If all fields are valid, you can submit the form or perform any action
    if (isValid) {
        alert('Form submitted successfully!');
        document.getElementById('contactForm').reset();  // Reset form fields after submission
    }
}

// Attach the validation function to the form's submit event
document.getElementById('contactForm').addEventListener('submit', validateForm);
