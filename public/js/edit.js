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



document.querySelector("#editBtn").addEventListener("click", async function() {
    var name = document.querySelector("#editName").value.trim();
    var location = document.querySelector("#editLocation").value.trim();
    var bio = document.querySelector("#editBio").value.trim();
    var linkedin = document.querySelector("#editLinkedIn").value.trim();
    var github = document.querySelector("#editGitHub").value.trim();
    var image_link = document.querySelector("#picture-div").getAttribute('data-src');
    // add fetch /api/profile

    // const res = await fetch('/api/profile', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         name,
    //         bio,
    //         linkedin,
    //         github,
    //         location
    //     }),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // });
    // if (res.ok) {
    //     console.log('success')
    // }

    //should be put request
});