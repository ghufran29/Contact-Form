document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("formError").style.display = "none";
    document.getElementById("formSuccess").style.display = "none";

    var fname = document.getElementById("fname").value.trim();
    var lname = document.getElementById("lname").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var message = document.getElementById("message").value.trim();

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!fname || !lname || !email || !phone || !message) {
      document.getElementById("formError").textContent = "All fields are required.";
      document.getElementById("formError").style.display = "block";
      return;
    }

    if (!emailPattern.test(email)) {
      document.getElementById("formError").textContent = "Please enter a valid email address.";
      document.getElementById("formError").style.display = "block";
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      document.getElementById("formError").textContent = "Please enter a valid 10-digit phone number.";
      document.getElementById("formError").style.display = "block";
      return;
    }

    document.getElementById("formSuccess").textContent = "Your message has been sent successfully!";
    document.getElementById("formSuccess").style.display = "block";

    document.getElementById("contactForm").reset();
  });