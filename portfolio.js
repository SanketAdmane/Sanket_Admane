// Function to validate name
function checkName() {
  var nameVal = document.getElementById("name").value.trim();

  if (nameVal === "") {
    document.getElementById("nameError").style.display = "block";
    return false;
  } else {
    document.getElementById("nameError").style.display = "none";
    return true;
  }
}

// Function to validate email
function checkEmail() {
  var emailVal = document.getElementById("email").value.trim();
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!emailVal.match(mailformat)) {
    document.getElementById("emailError").style.display = "block";
    return false;
  } else {
    document.getElementById("emailError").style.display = "none";
    return true;
  }
}

// Function to validate message
function checkMessage() {
  var messageVal = document.getElementById("message").value.trim();

  if (messageVal === "") {
    document.getElementById("messageError").style.display = "block";
    return false;
  } else {
    document.getElementById("messageError").style.display = "none";
    return true;
  }
}

// Function to validate the entire form
function validateForm() {
  var nameValid = checkName();
  var emailValid = checkEmail();
  var messageValid = checkMessage();

  return nameValid && emailValid && messageValid;
}

// Submit button click event listener
document.getElementById("submit").addEventListener("click", function(event) {
  // Prevent form submission if form is not valid
  if (!validateForm()) {
    event.preventDefault();
    return;
  }

  // If form is valid, send the email
  var templateParams = {
    from_name: document.getElementById("name").value.trim(),
    email_id: document.getElementById("email").value.trim(),
    message: document.getElementById("message").value.trim()
  };

  emailjs.send("service_e60s1jg", "template_myhl7u3", templateParams)
    .then(function(response) {
      alert("Email sent successfully!");
      document.getElementById("myform").reset(); // Reset form
    }, function(error) {
      alert("Error sending email: " + error);
    });
});