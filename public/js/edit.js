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

document.querySelector("#editBtn").addEventListener("click", async function() {
    var name = document.querySelector("#editName").value.trim();
    var location = document.querySelector("#editLocation").value.trim();
    var bio = document.querySelector("#editBio").value.trim();
    var linkedin = document.querySelector("#editLinkedIn").value.trim();
    var github = document.querySelector("#editGitHub").value.trim();
    var image_link = document.querySelector("#picture-div").getAttribute('data-src');

    //put profile data
    const response = await fetch('/api/profile', {
        method: 'PUT',
        body: JSON.stringify({
            name,
            bio,
            linkedin,
            github,
            location
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        if (image_link) {
            const userResponse = await fetch('/api/users', {
                method: 'PUT',
                body: JSON.stringify({
                    image_link
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (userResponse.ok) {
                document.location.replace("/profile");
            } else {
                alert("Something went wrong.")
            }
        }
    }

    //should be put request
});