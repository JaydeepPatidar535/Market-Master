// Get references to the login link, popup, and close button
const loginLink = document.getElementById("login-link");
const loginPopup = document.getElementById("login-popup");
const closePopup = document.getElementById("close-popup");

// Function to open the login popup
function openLoginPopup() {
  loginPopup.style.display = "block";
}

// Function to close the login popup
function closeLoginPopup() {
  loginPopup.style.display = "none";
}

// Event listeners
loginLink.addEventListener("click", openLoginPopup);
closePopup.addEventListener("click", closeLoginPopup);
loginPopup.addEventListener("click", function (event) {
  if (event.target === loginPopup) {
    closeLoginPopup();
  }
});
