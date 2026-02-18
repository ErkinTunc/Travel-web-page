# Travel-Web-Page

## Overview

**Travel-Web-Page** is a tourism-themed website created to present attractive travel destinations through an interactive and responsive user experience. The project was developed as a learning exercise to strengthen front-end web development skills while deliberately avoiding frameworks to better understand core web technologies.

The site includes features such as user registration, login validation, and a simple real-time chat module powered by Python CGI scripts and AJAX.

---

## Features

- **Responsive Design**: Optimized for seamless viewing on all devices.
- **User Interaction**: Includes interactive elements managed through JavaScript and DOM manipulation.
- **Login/Register System**: Provides credential verification for users.
- **Chatbox**: A feature to engage users in real-time communication.
- **Tourism-Themed Content**: Highlights various touristic sites with an appealing layout.
- **Accessible Design**: Ensures usability for visually impaired users, including color blindness support.

---

## Live Demo

You can view the live demo of the website here:  
[Travel-Web-Page on Netlify](https://travel-goals-page.netlify.app)

⚠️ Note: The live demo runs without a backend server.  
Therefore, server-side features such as **Login**, **Register**, and **Chatbox messaging** are not functional in the demo version.

---

## How to Run

1. Navigate to the project folder.
2. Start the Python HTTP server:
   ```bash
   python httpd.py
   ```
3. Note the generated four-digit port number (e.g., 8000).
4. Access the site at
   ```bash
   http://localhost:****
   ```
   Replace \*\*\*\* with the port number.

---

## Coding Standards

This project adheres to the following coding principles:

- Validation: All HTML5 and CSS3 files are validated using the W3C Validator.
- Separation of Concerns: Styles and scripts are external files linked to the HTML.
- Accessibility: Designed for usability by users with visual impairments and color blindness.
- Responsive Design: Achieved with Flexbox and Media Queries.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- AJAX for login and chat communication
- Python CGI scripts for server-side processing
- File-based storage

---

## Form Validation

The website includes advanced JavaScript form validation ensuring real-time feedback:

1. Name cannot be empty.
2. Date of Birth must follow dd/mm/yyyy format.
3. Username must be at least six characters.
4. Password must include:
   - Uppercase letter
   - Lowercase letter
   - Digit
   - Special character
   - Minimum length: 12 characters
5. Email must be valid.

Submission is blocked until all criteria are met.

---

## Dynamic Features

- Login System: AJAX validation through `login.py`.
- Chatbox: Message exchange via CGI scripts returning JSON responses.

---

## Accessibility

- Tested for Protanopia, Deuteranopia, Tritanopia compatibility.
- `<noscript>` fallback message when JavaScript is disabled.

---

## What I Built and Learned

Through this project, I practiced:

- Building dynamic UI interactions using JavaScript and AJAX
- Handling client-server communication
- Implementing form validation without external libraries
- Creating responsive and accessible layouts
- Integrating frontend pages with backend scripts

---

## Technical Challenges

- Implementing dynamic chat updates without frameworks
- Handling asynchronous login validation
- Structuring a full frontend project without frameworks

---

## Current Limitations

- No session or cookie-based authentication yet
- Login verifies credentials without persistent sessions
- File-based storage instead of database usage
- Not production-ready

---

## Next Improvements

- Session & cookie authentication
- Logout system
- Database integration
- Multi-user chat support

---

## License

This project uses:

- normalize.css v8.0.1

```bash
  MIT License | github.com/necolas/normalize.css
```

All other assets are custom-made.

---

## Credits

- Project integration and frontend development: ErkinTunc
- Backend CGI scripts: course/starter implementation
- Documentation and improvements: ErkinTunc

---

## Contributing

Contributions are welcome!  
Feel free to open issues or submit pull requests.
