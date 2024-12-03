let form = document.getElementById("registration-form");
let inputUsername = document.getElementById("username");
let inputPassword = document.getElementById("userpwd");
let messageArea = document.getElementById("message-area");

//console.dir
console.dir(form);
console.dir(inputUsername);
console.dir(inputPassword);
console.dir(messageArea);

// XMLHttpRequest
function sendLoginRequest(event) {
  event.preventDefault(); // Prevent sending the form

  // fetch Form data
  let formData = new FormData(form); // creates an object, optionally fill from
  console.log("Form data collected:", [...formData.entries()]);  

  // add one more field
  formData.append("erkin", "123");

  // 1. Create a new XMLHttpRequest object
  let xhr = new XMLHttpRequest();
  // 2. Configure it
  xhr.open("POST", "htbin/login.py", true);
  xhr.responseType = "text";

  // 3. Send the request over the network
  xhr.send(formData);

  // 4. This will be called after the response is received
  xhr.onload = function () {
    console.log("Response received, status:", xhr.status);

    if (xhr.status === 200) {
      // Get the answer from the server
      let response = xhr.response;
      console.log("Server response:", response);

      // Show the login response message
      messageArea.innerHTML = "* " + response;

      // Login response choices (Logged/not-logged)
      messageArea.classList.add("login-result-message");

      if (response.startsWith("Bonjour")) {
        messageArea.classList.add("login-success");
        messageArea.classList.remove("login-failed");

        console.log("Login successful!");
      } else {
        messageArea.classList.add("login-failed");
        messageArea.classList.remove("login-success");

        console.log("Login failed!");
      }
    } else {
      messageArea.textContent = `Error: ${xhr.status} - ${xhr.statusText}`;
      messageArea.classList.add("login-result-message", "login-failed");
      messageArea.classList.remove("login-success");

      console.error("Server error:", xhr.status, xhr.statusText);
    }
  };

  // catch the errors
  xhr.onerror = function () {
    console.error("Network error occurred");
    messageArea.textContent = "Network error. Please try again later.";
    messageArea.classList.add("login-result-message", "login-failed");
    messageArea.classList.remove("login-success");
  };
}

function submitEnterKey(event) {
  if (event.key === "Enter") {
    console.log("Enter key pressed");
    sendLoginRequest(event);
  }
}

// Event Listeners
form.addEventListener("submit", sendLoginRequest);
/*When we are on a input field(while using "keydown") and push on a key from keyboard it activates*/
inputUsername.addEventListener("keydown", submitEnterKey);
inputPassword.addEventListener("keydown", submitEnterKey);
