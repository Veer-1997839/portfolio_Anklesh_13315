// Function to validate the form
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission to handle validation
        
        // Get form field values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        
        // Regular Expression for Email Validation
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        
        // Validate name
        if (name === "") {
            alert("Please enter your name.");
            return;
        }
        
        // Validate email
        if (email === "") {
            alert("Please enter your email.");
            return;
        } else if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        
        // Validate message
        if (message === "") {
            alert("Please enter your message.");
            return;
        }
        
        // If all fields are valid, you can submit the form (or perform an AJAX request, etc.)
        alert("Form submitted successfully!");
        document.getElementById("contactForm").reset(); // Reset form after submission (optional)
    });
});
