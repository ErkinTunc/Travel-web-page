# Travel-Web-Page

## Overview

**Travel-Web-Page** is a website dedicated to showcasing touristic sites. Designed with a focus on user interactivity and responsive design, it serves as a learning project to develop and refine front-end web development skills. To maintain a pure learning experience, no frameworks are used.

---

## Features

- **Responsive Design**: Optimized for seamless viewing on all devices.  
- **User Interaction**: Includes interactive elements managed through JavaScript and DOM manipulation.  
- **Login/Register System**: Enables user authentication.  
- **Chatbox**: A feature to engage users in real-time communication.  
- **Tourism-Themed Content**: Highlights various touristic sites with an appealing layout.  
- **Accessible Design**: Ensures usability for visually impaired users, including color blindness support.  


---

## Live Demo

You can view the live demo of the website here:  
[Travel-Web-Page on Netlify](https://travel-goals-page.netlify.app) (without server-side)

---

## How to Run

1. Navigate to the project folder.  
2. Start the Python HTTP server:
   ```bash
   python httpd.py
3. Note the generated four-digit port number (e.g., 8000).
4. Access the site at
    ```bash
    http://localhost:****
- Replace **** with the port number.

## Coding Standards
This project adheres to the following coding principles:

- Validation: All HTML5 and CSS3 files are validated using the W3C Validator.
- Separation of Concerns: Styles and scripts are external files linked to the HTML. Inline styles or embedded scripts are not used.
- Accessibility: Designed for usability by users with visual impairments, including those with color blindness. Tested with color simulation tools (e.g., Protanopia, Deuteranopia).
- Responsive Design: Achieved with Flexbox and Media Queries for adaptability to various screen sizes.

## Technologies Used
- HTML5: Semantic and accessible markup.
- CSS3: Styling and layout.
- JavaScript: For dynamic interactivity.
- AJAX: Used for dynamic features like the chatbox and login system

## Form Validation
The website includes advanced form validation written in JavaScript (without jQuery), ensuring real-time feedback for users. The following rules are enforced:

1. Name: Cannot be empty.
2. Date of Birth: Must follow the format dd/mm/yyyy and be a valid date (if provided).
3. Username: At least six characters long.
4. Password: At least 12 characters long, including:
     - One uppercase letter
     - One lowercase letter
     - One digit
     - One special character (`_-;:!?./*&$`)
5. Email: Must be a valid email address.
   
JavaScript validates fields dynamically, and the form cannot be submitted until all criteria are met.

## Dynamic Features
- Login System: Uses AJAX to dynamically validate credentials via the `login.py` server script.
- Chatbox: Powered by AJAX to enable real-time messaging with JSON responses.

## Accessibility
To ensure accessibility:

- Color Blindness: The design is tested for compatibility with Protanopia, Deuteranopia, Tritanopia, and other conditions.
- Fallbacks: If JavaScript is disabled, users are notified using the `<noscript>` tag.

## License
This project uses the following library:

- normalize.css v8.0.1
    ```bash
     normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css 
All other assets are custom-made for this project.

## Contributing

Contributions are welcome!
Feel free to open issues, suggest new features, or submit pull requests.
