const { Profile } = require("../../models");


// Dropdown Add Tech
document.querySelector("#dropdownBtn").addEventListener("click", function() {
    document.querySelector("#dropdown-menu3").classList.remove("is-hidden")
});

document.querySelectorAll(".dropdown-item").forEach( function(item) {
    item.addEventListener("click", function(event) {
        document.querySelector("#dropdownTitle").textContent = event.target.textContent
        document.querySelector("#dropdown-menu3").classList.add("is-hidden")

    })
});

// Slider Extension
// bulmaSlider.attach();

// document.querySelector('#upload-btn').addEventListener('click', () => {
// });



document.querySelector("#editBtn").addEventListener("click", function() {
    var profile = {};
    profile.name = document.querySelector("#editName").value;
    profile.location = document.querySelector("#editLocation").value;
    profile.bio = document.querySelector("#editBio").value;
    profile.linkedIn = document.querySelector("#editLinkedIn").value;
    profile.gitHub = document.querySelector("#editGitHub").value;
    // add fethch /api/profile
    fetch("/profile", {
  method: 'POST',
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error
  body: profile
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
});