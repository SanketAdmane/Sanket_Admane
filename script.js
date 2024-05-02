
/*------------------------------------
     Function for resposive nav-bar
 -------------------------------------*/

const mobile_nav = document.querySelector(".mobile-navbar-btn");

const nav_link = document.querySelectorAll(".navbar-link");
var div_array = [...nav_link];
div_array.forEach((navbar_link) => {
  navbar_link.addEventListener("click", () => {
    toggleNav();
  });
});

const nav_header = document.querySelector("#header");

function toggleNav() {
  nav_header.classList.toggle("active");
}

mobile_nav.addEventListener("click", () => {
  toggleNav();
});



/*--------------------------------------------------------------------
     Function for Hilighting navlinks on scroll to particular section
 ----------------------------------------------------------------------*/

// Get all sections that have an ID defined
const sections = document.querySelectorAll(".container");
// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  // Get current scroll position
  let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 180;
    const sectionId = current.getAttribute("id");

    /*
     - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
     - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
     */
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".navbar a[name*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".navbar a[name*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}



/*------------------------------------
         ON SCROLL FUNCTION
  -------------------------------------*/

const nav_elements = document.getElementsByClassName("navbar-link");
const links_array = [...nav_elements];

const linkeach = links_array.forEach((link) => {
  const link_name = link.getAttribute("name");
  const element = document.getElementsByName(link_name);

  function scrolldiv() {
    var section = document.getElementById(link_name);
    section.scrollIntoView();
  }

  element[0].addEventListener("click", scrolldiv);
});



/*-------------------------------------------------------------------
         FORM AND EMAIL FUNCTIONALITY WITH ERROR DETECTION(IF ANY)
  --------------------------------------------------------------------*/

/*--------------------------
                 FORM FUNCTION
         ---------------------------*/

// Display if the name field is kept empty else hide
function checkName() {
  var nameVal = document.getElementById("name").value.trim();

  if (nameVal == "") {
    document.getElementById("nameError").style.visibility = "visible";
    var nameVal = false;
  } else {
    document.getElementById("nameError").style.visibility = "hidden";
    var nameVal = true;
  }
}

// Display if the email field is kept empty else hide
function checkEmail() {
  var emailVal = document.getElementById("email").value.trim();
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailVal.match(mailformat)) {
    document.getElementById("emailError").style.visibility = "hidden";
    var emailVal = true;
  } else {
    document.getElementById("emailError").style.visibility = "visible";
    var emailVal = false;
  }
}

// Display if the message field is kept empty else hide
function checkMessage() {
  var messageVal = document.getElementById("message").value.trim();

  if (messageVal == "") {
    document.getElementById("messageError").style.visibility = "visible";
    var messageVal = false;
  } else {
    document.getElementById("messageError").style.visibility = "hidden";
    var messageVal = true;
  }
}

//        /*-----------------------------------
//                  SUBMIT BUTTON FUNCTION
//          -----------------------------------*/

const submit_btn = document.getElementById("submit");
submit_btn.addEventListener("click", validateForm);

function validateForm() {
  var nameVal = document.getElementById("name").value.trim();
  var emailVal = document.getElementById("email").value.trim();
  var messageVal = document.getElementById("message").value.trim();
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // Display if the name field is kept empty else hide

  if (nameVal == "") {
    document.getElementById("nameError").style.visibility = "visible";
    var nameVal = false;
  } else {
    document.getElementById("nameError").style.visibility = "hidden";
    var nameVal = true;
  }

  // Display if the email field is kept empty else hide

  if (emailVal.match(mailformat)) {
    document.getElementById("emailError").style.visibility = "hidden";
    var emailVal = true;
  } else {
    document.getElementById("emailError").style.visibility = "visible";
    var emailVal = false;
  }

  // Display if the message field is kept empty else hide

  if (messageVal == "") {
    document.getElementById("messageError").style.visibility = "visible";
    var messageVal = false;
  } else {
    document.getElementById("messageError").style.visibility = "hidden";
    var messageVal = true;
  }

  /*--------------------------
                 MAIL FUNCTION
         ---------------------------*/

  // Mail & snackbar functionality is executed if and only if all the fields are filled by the user.
//   if (nameVal && emailVal && messageVal == true) {
//     snackbar.className = "show";
//     // parameters to be passed from form.
//     var templateParams = {
//       from_name: document.getElementById("name").value,
//       email_id: document.getElementById("email").value,
//       message: document.getElementById("message").value,
//     };

//     emailjs.init("oB2YbL9XUsZdLvd4K");

//     emailjs.send("service_e60s1jg", "template_myhl7u3", templateParams).then(
//       function (response) {
//         snackbar.innerHTML = "Your message was sent successfully!";
//         snackbar.style.backgroundColor = "green";
//         // Reset form if message was sent successfully.
//         document.getElementById("myform").reset();
//       },

//       // Error function
//       function (error) {
//         // If any error occurs at backend while the internet status is on, error will be thrown likewise, else internet error will be thrown.
//         internet_status = window.navigator.onLine ? "on" : "off";
//         if (internet_status == "on") {
//           snackbar.innerHTML = `Error! ${error.text}. Please try after sometime.`;
//           snackbar.style.backgroundColor = "red";
//         } else {
//           snackbar.innerHTML =
//             "Error! Please check your internet connection and try again.";
//           snackbar.style.backgroundColor = "red";
//         }
//       }
//     );

//     // show error for 4 seconds.
//     setTimeout(function () {
//       snackbar.className = snackbar.className.replace("show", "");
//     }, 4000);
//   } else {
//     snackbar.className = "show";
//     snackbar.innerHTML = `Please fill in a valid values in all the required fields!`;
//     snackbar.style.backgroundColor = "red";
//   }
//   setTimeout(function () {
//     snackbar.className = snackbar.className.replace("show", "");
//   }, 4000);
// }

if(nameVal && emailVal && messageVal == true){
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
  }
}


/*-------------------------------------------
         SLIDER FUNCTION FOR PROJECT SECTION
 ---------------------------------------------*/

// Function to validate name
// function checkName() {
//   var nameVal = document.getElementById("name").value.trim();

//   if (nameVal === "") {
//     document.getElementById("nameError").style.display = "block";
//     return false;
//   } else {
//     document.getElementById("nameError").style.display = "none";
//     return true;
//   }
// }

// // Function to validate email
// function checkEmail() {
//   var emailVal = document.getElementById("email").value.trim();
//   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//   if (!emailVal.match(mailformat)) {
//     document.getElementById("emailError").style.display = "block";
//     return false;
//   } else {
//     document.getElementById("emailError").style.display = "none";
//     return true;
//   }
// }

// // Function to validate message
// function checkMessage() {
//   var messageVal = document.getElementById("message").value.trim();

//   if (messageVal === "") {
//     document.getElementById("messageError").style.display = "block";
//     return false;
//   } else {
//     document.getElementById("messageError").style.display = "none";
//     return true;
//   }
// }

// // Function to validate the entire form
// function validateForm() {
//   var nameValid = checkName();
//   var emailValid = checkEmail();
//   var messageValid = checkMessage();

//   return nameValid && emailValid && messageValid;
// }

// // Submit button click event listener
// document.getElementById("submit").addEventListener("click", function(event) {
//   // Prevent form submission if form is not valid
//   if (!validateForm()) {
//     event.preventDefault();
//     return;
//   }

//   // If form is valid, send the email
//   var templateParams = {
//     from_name: document.getElementById("name").value.trim(),
//     email_id: document.getElementById("email").value.trim(),
//     message: document.getElementById("message").value.trim()
//   };

//   emailjs.send("service_e60s1jg", "template_myhl7u3", templateParams)
//     .then(function(response) {
//       alert("Email sent successfully!");
//       document.getElementById("myform").reset(); // Reset form
//     }, function(error) {
//       alert("Error sending email: " + error);
//     });
// });
