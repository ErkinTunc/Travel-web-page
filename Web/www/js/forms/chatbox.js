const chatbox = document.getElementById("read-messages");
const form = document.querySelector("form");
const msgInputElement = document.getElementById("msg");

// TESTING
console.dir(chatbox);
console.dir(form);
console.dir(msgInputElement);
console.log("=== Hello World ===");

// Error message Element
let messageErrorPElement = document.createElement("p");
messageErrorPElement.innerHTML = "";
msgInputElement.parentElement.append(messageErrorPElement);
messageErrorPElement.classList.add("errorMessage");

//FUNCTIONS

function addLinesToMessages(message) {
  // New line in paragraph when Enter is pressed in textarea // it is an string:message
  if (!message) return "Message non spécifié"; // handle empty or undefined messages
  return `<pre style="font-family: inherit; margin: 0;">${message}</pre>`;
}

// PROCESS AND DISPLAY MESSAGES
function processMessages(messages) {
  // messages should be parsed before
  chatbox.innerHTML = ""; // Clear existing messages

  let i = 0;
  for (const msgObj of messages) {
    //Creation of Elements
    let MessageListElement = document.createElement("li");
    let MessageElement = document.createElement("p");
    let InfoDiv = document.createElement("div");
    let DateElement = document.createElement("span");
    let TimeElement = document.createElement("span");
    let UsernameElement = document.createElement("span");

    //Adding information to Elements
    MessageElement.innerHTML = addLinesToMessages(msgObj.msg) || "Message non spécifié";
    DateElement.textContent = msgObj.date || "Date non spécifié";
    TimeElement.textContent = msgObj.time || "Time non spécifié";
    UsernameElement.textContent = msgObj.user || "Username non spécifié";

    //Styling of Elements
    MessageListElement.classList.add("container");
    if (i % 2 === 1) {
      MessageListElement.classList.add("darker");
    }
    i++;

    InfoDiv.classList.add("message-information");
    MessageElement.classList.add("message");
    UsernameElement.classList.add("username");
    TimeElement.classList.add("msg-time");
    DateElement.classList.add("msg-date");

    //Element placement
    InfoDiv.appendChild(UsernameElement);
    InfoDiv.appendChild(TimeElement);
    InfoDiv.appendChild(DateElement);
    MessageListElement.appendChild(MessageElement);
    MessageListElement.appendChild(InfoDiv);
    chatbox.appendChild(MessageListElement);
  }
}

// FETCH CHAT MESSAGES
function fetchChatMessages() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "htbin/chatget.py", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      console.log("Response status:", xhr.status);
      console.log("Response text:", xhr.responseText);

      if (xhr.status === 200) {
        try {
          const responseText = xhr.responseText.trim();
          if (!responseText) {
            console.error("Empty response received");
            return;
          }

          // Call the separate function to handle the response
          const messages = JSON.parse(xhr.responseText);
          processMessages(messages);
        } catch (error) {
          console.error("JSON Parsing Error: ", error);
          console.error("Raw Response: ", xhr.responseText); // Log raw response for debugging
        }
      } else {
        console.error("Request failed. Status:", xhr.status);
      }
    }
  };

  xhr.send();
}

// Helper function to send POST requests
function sendPostRequest(url, data) {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(data).toString(),
  });
}

// SEND USER MESSAGE
function sendUserMessage(event) {
  event.preventDefault(); // Prevent page reload
  const messageInput = document.getElementById("msg");
  const message = messageInput.value.trim();

  // Reset error message
  messageErrorPElement.innerHTML = "";

  if (!message) {
    messageErrorPElement.innerHTML = "Message cannot be empty!";
    return;
  }

  const data = { msg: message }; // Data to send

  sendPostRequest("/htbin/chatsend.py", data)
    .then((response) => {
      if (!response.ok) {
        // Handle HTTP-level errors
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Parse JSON if response is valid
    })
    .then((responseData) => {
      console.log("Server response:", responseData);

      if (responseData.num === 0) {
        messageInput.value = ""; // Clear input field
        fetchChatMessages(); // Refresh messages
      } else if (responseData.num === 1) {
        console.error("The message field is not provided");
        messageErrorPElement.innerHTML =
          "Server-Side problem: The message field is not provided.";
      } else if (responseData.num === -1) {
        console.error("Username is not provided");
        messageErrorPElement.innerHTML =
          "Server-Side problem: Username is not provided.";
      }
    })
    .catch((error) => {
      console.error("Error sending message:", error);
      messageErrorPElement.innerHTML =
        "An unexpected error occurred while sending the message.";
    });
}

// INITIALIZE
document.addEventListener("DOMContentLoaded", fetchChatMessages);
setInterval(fetchChatMessages, 1000); // Fetch messages every 5 seconds
form.addEventListener("submit", sendUserMessage);
