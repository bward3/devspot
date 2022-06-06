document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  console.log($navbarBurgers);
  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});

// go to login page when user clicks on the login or sign up buttons when logged out
document.querySelector("#loginButton").addEventListener("click", () => {
  document.location.replace("/login");
});

document.querySelector("#signupButton").addEventListener("click", () => {
  document.location.replace("/login");
});

// document.querySelectorAll(".navbar-burger").addEventListener("click", function() {
//     console.log("here");
// })
