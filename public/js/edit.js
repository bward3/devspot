var techBtn = document.getElementById('addTechBtn');
techBtn.disabled = true;
var currentId;
var numTechs = 0;
var lastClicked;

// Dropdown Add Tech
document.querySelector("#dropdownBtn").addEventListener("click", function () {
    document.querySelector("#dropdown-menu3").classList.toggle("is-hidden");
});

document.querySelectorAll(".dropdown-item").forEach(function (item) {
    item.addEventListener("click", function (event) {
        document.querySelector("#dropdownTitle").textContent = event.target.textContent;
        document.querySelector("#dropdown-menu3").classList.add("is-hidden");
        currentId = event.target.getAttribute('data-id');
        lastClicked = event.target;
        techBtn.disabled = false;
    })
});

techBtn.addEventListener('click', () => {
    var techName = document.querySelector('#dropdownTitle').innerText;
    var proficiency = document.querySelector('#sliderWithValue').value;
    var techContainer = document.getElementById('techContainer');
    var newTech = document.createElement('div');
    var newTechName = document.createElement('div');
    var newTechProf = document.createElement('div');
    var profMeter = document.createElement('div');
    newTechProf.classList.add('prof-container');
    profMeter.classList.add(`prof-meter-${proficiency}`);
    newTechProf.append(profMeter);
    newTechName.innerText = techName;
    newTech.append(newTechName, newTechProf);
    newTech.setAttribute('data-id', currentId);
    newTech.setAttribute('data-proficiency', proficiency);
    newTech.classList.add('new-tech');
    techContainer.append(newTech);
    lastClicked.remove();
    document.querySelector("#dropdownTitle").textContent = "Click me"
    techBtn.disabled = true;
});

document.querySelector("#editBtn").addEventListener("click", async function () {
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
            // if (userResponse.ok) {
            //     document.location.replace("/profile");
            // } else {
            //     alert("Something went wrong.")
            // }
        }
    }

    //add techs
    var techs = [];
    document.querySelectorAll('.new-tech').forEach((techDiv) => {
        let tech = {
            id: techDiv.getAttribute('data-id'),
            proficiency: techDiv.getAttribute('data-proficiency')
        }
        techs.push(tech);
    });
    console.log(techs);
    response = await fetch('/api/users/tech', {
        method: 'POST',
        body: JSON.stringify({
            techs
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    //should be put request
});