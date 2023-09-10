document.addEventListener("DOMContentLoaded", function() {
    const signupLink = document.getElementById("signup-link");
    const signupPopup = document.getElementById("signup-popup");
    const closePopup = document.getElementById("close-popup1");

    signupLink.addEventListener("click", function() {
        signupPopup.style.display = "block";
    });

    closePopup.addEventListener("click", function() {
        signupPopup.style.display = "none";
    });

    // Close the popup when clicking outside the content
    window.addEventListener("click", function(event) {
        if (event.target === signupPopup) {
            signupPopup.style.display = "none";
        }
    });

    // Prevent the form from submitting (you can add form validation here)
    const signupForm = document.getElementById("signup-form");
    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Add your form submission logic here
    });
});
