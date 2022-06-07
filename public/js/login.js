const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const username = document.querySelector("#user-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password
      }),
      headers: {
        "Content-Type": "application/json"
      },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  } else {
    alert("Please enter your username and password");
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: {
        "Content-Type": "application/json"
      },
    });

    const userData = await response.json();
    const user_id = userData.id;

    if (response.ok) {
      //create blank profile for new user
      const res = await fetch("/api/profile", {
        method: "POST",
        body: JSON.stringify({
          user_id: user_id
        }),
        headers: {
          "Content-Type": "application/json"
        },
      });
      if (res.ok) {
        document.location.replace("/");
      } else {
        alert("Something went wrong.")
      }

    } else {
      alert(response.statusText);
    }
  } else {
    alert("Please fill out all fields");
  }
};

document.querySelector("#loginBtn").addEventListener("click", loginFormHandler);

document
  .querySelector("#signupBtn")
  .addEventListener("click", signupFormHandler);