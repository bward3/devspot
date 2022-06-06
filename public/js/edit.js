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
    var editProfile = document.querySelector("#editName").value
    var editLocation = document.querySelector("#editLocation").value
    var editBio = document.querySelector("#editBio").value
    var editLinkedIn = document.querySelector("#editLinkedIn").value
    var editGitHub = document.querySelector("#editGitHub").value
    // add fethch /api/profile
});