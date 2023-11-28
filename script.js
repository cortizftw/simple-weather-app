document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Validate your form here
    var isValidForm = validateForm();
    if (isValidForm) {
      // If the form is valid, navigate to main.html
      window.location.href = 'main.html';
    }
  });
  
  function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Validate email
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
  
    // Validate password
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert('Password must be at least 8 characters long, and must include at least one uppercase letter, one lowercase letter, one number, and one special character.');
      return false;
    }
  
    // If all validations pass
    return true;
  }