document.querySelector("#dropdownBtn").addEventListener("click", function() {
    document.querySelector("#dropdown-menu3").classList.remove("is-hidden")
});

document.querySelectorAll(".dropdown-item").forEach( function(item) {
    item.addEventListener("click", function(event) {
        document.querySelector("#dropdownTitle").textContent = event.target.textContent
        document.querySelector("#dropdown-menu3").classList.add("is-hidden")

    })
});

// document.querySelector('#upload-btn').addEventListener('click', () => {

// });