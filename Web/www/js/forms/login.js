let form = document.getElementById("registration-form");

let inputUsername = document.getElementById("username");
let inputPassword = document.getElementById("userpwd");

//console.dir
console.dir(form);
console.dir(inputUsername);
console.dir(inputPassword);

// XMLHttpRequest
function sendLoginRequest(event) {
  event.preventDefault(); // Prevent sending the form

  // fetch Form data
  let formData = new FormData(form);

  // 1. Create a new XMLHttpRequest object
  let xhr = new XMLHttpRequest();
  // 2. Configure it
  xhr.open("POST", "htbin/login.py", true);
  xhr.responseType = "text";

  // 3. Send the request over the network
  xhr.send(formData);

  // 4. This will be called after the response is received
  xhr.onload = function () {
    if (xhr.status === 200) {
      // Get the answer from the server

      let response = xhr.response;

      // Show the login response message
      let messageArea = document.getElementById("message-area");
      messageArea.textContent = response;

      // Login response choices (Logged/not-logged)
      if (response.startsWith("Bonjour")) {
        messageArea.classList.add("login-result-message");
        messageArea.classList.add("login-success");
        messageArea.classList.remove("login-failed");

        console.log("Login successful!");
      } else {
        messageArea.classList.add("login-result-message");
        messageArea.classList.add("login-failed");
        messageArea.classList.remove("login-success");

        console.log("Login failed!");
      }
    } else {
      console.error("Error: ", xhr.statusText);
    }
  };

  // catch the errors
  xhr.onerror = function () {
    console.error("Request failed");
  };
}

// Event Listeners
form.addEventListener("submit", sendLoginRequest);
