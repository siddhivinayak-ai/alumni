document.addEventListener('DOMContentLoaded', function () {
  // Get the registration form
  const registrationForm = document.getElementById('registration-form');

  registrationForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Gather form data
    const formData = new FormData(registrationForm);

    // Send form data to Google Apps Script
    fetch(registrationForm.action, {
      method: 'POST',
      body: formData,
    })
      .then(response => response.text())
      .then(result => {
        alert('Registration successful!');
        registrationForm.reset(); 
      })
      .catch(error => {
        console.error('Error:', error);
        alert('There was a problem with your submission. Please try again.');
      });
  });
});


