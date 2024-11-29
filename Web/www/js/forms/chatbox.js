const chatbox = document.getElementById("read-messages");

console.log("hello worldd");

//FUNCTIONS
function handleStateChange(xhr) {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log("Server Response:", xhr.responseText); // Log the raw response
    } else {
      console.error("Request failed. Status:", xhr.status);
    }
  }
}

// Function to process and display messages
function processMessages(responseText) {
  // Parse the JSON data from the server
  const messages = JSON.parse(responseText);

  // Update the chatbox with the retrieved messages
  const chatbox = document.getElementById("chatbox");
  chatbox.innerHTML = ""; // Clear existing messages

  let i = 0;
  for (const msgObj of messages) {
    //Creation of Elements
    let MessageListElement = document.createElement("li");
    let MessageElement = document.createElement("p");
    let DateElement = document.createElement("span");
    let TimeElement = document.createElement("span");
    let UsernameElement = document.createElement("span");

    //Adding information to Elements
    MessageElement.textContent = msgObj.msg || "Message non spécifié";
    DateElement.textContent = msgObj.date || "Date non spécifié";
    TimeElement.textContent = msgObj.time || "Time non spécifié";
    UsernameElement.textContent = msgObj.user || "Username non spécifié";

    //Styling of Elements
    MessageListElement.classList.add("container");
    if (i % 2 == 1) {
      MessageListElement.classList.add("darker");
    }
    i++;

    //Element placement
    MessageListElement.appendChild(MessageElement);
    MessageListElement.appendChild(DateElement);
    MessageListElement.appendChild(TimeElement);
    MessageListElement.appendChild(UsernameElement);
    chatbox.appendChild(MessageListElement);
  }
}

function fetchChatMessages() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "htbin/chatget.py", true);

  // Assign the state change handler
  xhr.onreadystatechange = function () {
    handleStateChange(xhr); // Pass the XMLHttpRequest object
    if (xhr.readyState === 4 && xhr.status === 200) {
      try {
        // Call the separate function to handle the response
        processMessages(xhr.responseText);
      } catch (error) {
        console.error("Error processing messages: ", error);
      }
    }
  };

  xhr.send();
}

// Call the function to load messages on page load
document.addEventListener("DOMContentLoaded", fetchChatMessages);
