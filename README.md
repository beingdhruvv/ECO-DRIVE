<div align="center">
  
# EcoDrive - Electric Vehicle Information Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

</div>

## Overview
EcoDrive is a comprehensive web platform dedicated to providing information about electric and hybrid vehicles. The platform offers detailed vehicle comparisons, charging information, and user management features to help users make informed decisions about sustainable transportation.

## Features
- **User Authentication**
  - Secure login and registration system
  - Profile management
  - Session handling

- **Vehicle Information**
  - Detailed EV and PHEV vehicle comparisons
  - Charging infrastructure information
  - Manufacturer comparisons
  - Interactive comparison tables with sorting and filtering

- **Interactive UI**
  - Responsive design for all devices
  - Smooth animations and transitions
  - Parallax scrolling
  - Dynamic content loading

- **Contact System**
  - Contact form with validation
  - Email notifications
  - Social media integration

## Tech Stack
- **Frontend**
  - HTML5
  - CSS3 (with modern features like CSS Grid, Flexbox, and CSS Variables)
  - JavaScript (ES6+)
  - Font Awesome for icons

- **Backend**
  - Node.js
  - Express.js
  - MySQL
  - JWT for authentication

## Prerequisites
Before running this project, make sure you have the following installed:
- Node.js (v14.0.0 or higher)
- MySQL (v5.7 or higher)
- npm (Node Package Manager)

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/beingdhruvv/eco-drive.git
   cd eco-drive
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Database Setup**
   - Create a MySQL database named `eco_drive`
   - Import the database schema:
     ```bash
     mysql -u root -p eco_drive < Backend/database.sql
     ```

4. **Configuration**
   - Copy the example config file:
     ```bash
     cp Backend/config.json.example Backend/config.json
     ```
   - Update the configuration in `Backend/config.json` with your settings:
     ```json
     {
       "database": {
         "host": "localhost",
         "user": "your_mysql_username",
         "password": "your_mysql_password",
         "database": "eco_drive"
       },
       "server": {
         "port": 3000,
         "mode": "development"
       },
       "jwt": {
         "secret": "your-secret-key",
         "expiresIn": "24h"
       },
       "email": {
         "host": "smtp.gmail.com",
         "port": 587,
         "user": "your-email@gmail.com",
         "password": "your-email-password"
       }
     }
     ```

## Running the Application

1. **Development Mode**
   ```bash
   npm run dev
   ```
   This will start the server with nodemon for auto-reloading.

2. **Production Mode**
   ```bash
   npm start
   ```

3. **Access the Application**
   - Open your browser and navigate to `http://localhost:3000`
   - The application will be available at this address

## Project Structure
```
eco-drive/
├── Backend/
│   ├── auth.js         # Authentication utilities
│   ├── config.json     # Configuration settings
│   ├── config.md       # Configuration documentation
│   ├── database.sql    # Database schema
│   ├── server.js       # Main server file
│   ├── script.js       # Frontend utilities
│   └── vehicles.js     # Vehicle data and functions
├── CSS/
│   └── styles.css      # Main stylesheet
├── views/
│   ├── index.html      # Home page
│   ├── about.html      # About page
│   ├── contact.html    # Contact page
│   ├── login.html      # Login page
│   ├── signup.html     # Registration page
│   ├── profile.html    # User profile page
│   └── vehicles.html   # Vehicle information page
├── package.json        # Project dependencies and scripts
├── package-lock.json   # Locked dependencies
├── package.md         # Package documentation
├── LICENSE            # MIT License
└── README.md          # Project documentation
```

## Available Scripts
- `npm start` - Start the application in production mode
- `npm run dev` - Start the application in development mode with auto-reload
- `npm test` - Run tests
- `npm run build` - Build the frontend assets
- `npm run lint` - Run ESLint for code linting

## Features in Detail

### Authentication System
- Secure user registration and login
- JWT-based authentication
- Password hashing
- Session management
- Protected routes

### Vehicle Comparison
- Detailed specifications for various EV and PHEV models
- Interactive comparison tables
- Sorting and filtering capabilities
- Charging information
- Performance metrics

### User Interface
- Modern, responsive design
- Smooth animations and transitions
- Mobile-friendly navigation
- Accessible components
- Custom styling and effects

### Contact System
- Form validation
- Email notifications
- Social media integration
- Responsive design

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Security
- All passwords are hashed before storage
- JWT tokens for secure authentication
- Input validation and sanitization
- Protected API endpoints
- Secure session management

## Performance Optimization
- Optimized images and assets
- Efficient database queries
- Caching mechanisms
- Lazy loading of content
- Minified CSS and JavaScript

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Contributors
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/beingdhruvv">
        <img src="https://avatars.githubusercontent.com/beingdhruvv" width="100px;" alt="Dhruv Sutar"/>
        <br />
        <sub><b>Dhruv Suthar</b></sub>
      </a>
      <br />
      <sub>Full Stack Developer</sub>
    </td>
    <td align="center">
      <a href="https://github.com/NayanSadariya">
        <img src="https://avatars.githubusercontent.com/NayanSadariya" width="100px;" alt="Contributor 2"/>
        <br />
        <sub><b>Nayan Sadariya</b></sub>
      </a>
      <br />
      <sub>Full Stack Developer</sub>
    </td>
    <td align="center">
      <a href="https://github.com/HerlyPathak">
        <img src="https://avatars.githubusercontent.com/HerlyPathak" width="100px;" alt="Contributor 3"/>
        <br />
        <sub><b>Herly Pathak</b></sub>
      </a>
      <br />
      <sub>Technical Writer</sub>
    </td>
    <td align="center">
      <a href="https://github.com/KavyaDeopura25">
        <img src="https://avatars.githubusercontent.com/KavyaDeopura25" width="100px;" alt="Contributor 4"/>
        <br />
        <sub><b>Kavya Deopura</b></sub>
      </a>
      <br />
      <sub>QA Engineer</sub>
    </td>
  </tr>
</table>

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Font Awesome for icons
- Unsplash for images
- All contributors and maintainers
 
