

// go to login page when user clicks on the login or sign up buttons when logged out
document.querySelector("#loginButton").addEventListener("click", () => {
  document.location.replace("/login");
});

document.querySelector("#signupButton").addEventListener("click", () => {
  document.location.replace("/login");
});