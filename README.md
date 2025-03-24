# Crime Reporting and Tracking System

Welcome to the Crime Reporting and Tracking System, a web application designed to empower users to report crimes, track incidents, and analyze crime statistics. This application ensures that crime data is accessible and actionable, fostering community safety and awareness through transparent reporting and insights.

## Table of Contents
- [Project Description](#project-description)
- [Project Type](#project-type)
- [Project Link](#project-link)
- [Deployed App](#deployed-app)
- [Directory Structure](#directory-structure)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Features](#features)
- [Screenshots](#screenshots)
- [Video Link](#video-link)
- [Future Scope](#future-scope)
- [Team Members](#team-members)
- [Acknowledgments](#acknowledgments)
- [References](#references)

## Project Description
The Crime Reporting and Tracking System allows users to:

- Report crimes anonymously or with personal details.
- View and track crime reports in their area.
- Analyze crime statistics to understand trends and patterns.

This project aims to deliver a seamless crime reporting experience, enabling users to log, categorize, and analyze crime incidents effectively. It includes features like user authentication, report management, and interactive visualizations.

## Project Type
Fullstack

## Project Link
[Crime Reporting and Tracking System](https://github.com/Tikesh097/B43_WEB_250_Web-Project-245)

## Deployed App
Frontend: [https://silly-entremet-8e9221.netlify.app/](https://silly-entremet-8e9221.netlify.app/)

## Directory Structure
```
crime-reporting-system/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Report.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── reports.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── .env
│   ├── server.js
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Auth/
    │   │   ├── Dashboard/
    │   │   ├── Notification/
    │   │   ├── Reports/
    │   │   └── Shared/
    │   ├── context/
    │   ├── pages/
    │   ├── service/
    │   ├── App.js
    │   └── index.js
    ├── public/
    └── package.json
```

## Technologies Used
- **Frontend**: 
  - React.js
  - Redux 
  - Axios
  - Tailwind CSS (for styling)
  
- **Backend**: 
  - Node.js
  - Express.js
  - MongoDB 
  - JWT
  
- **Development Tools**: 
  - Visual Studio Code
  - Postman
  - Git

## Setup and Installation
### Prerequisites
- Node.js
- MongoDB
- Git

### Steps to Set Up the Project
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Tikesh097/B43_WEB_250_Web-Project-245
   cd B43_WEB_250_Web-Project-245
   ```

2. **Set up the backend**:
   ```bash
   # Navigate to the backend directory
   cd backend
   
   # Install dependencies
   npm install
   
   # Create a .env file and add your environment variables (e.g., database connection string, JWT secret)
   
   # Start the server
   node server.js
   ```

3. **Set up the frontend**:
   ```bash
   # Navigate to the frontend directory
   cd ../frontend
   
   # Install dependencies
   npm install
   
   # Start the React application
   npm start
   ```

## Usage
- Open your web browser and navigate to http://localhost:5000 (or the port specified in your React app).
- You can register a new user, log in, and submit crime reports.
- Users can view their submitted reports and receive notifications.

## Features
- User registration and authentication
- Submit crime reports with details
- View submitted reports
- Notifications for updates on reports
- Admin dashboard for managing reports

## Screenshots

1. **Home Page**:
   ![Home Page](ScreenShots/HomePage.png)

2. **Registration Page**:
   ![Registration Page](ScreenShots/SignUpPage.png)

3. **Login Page**:
   ![Login Page](ScreenShots/LoginPage.png)   

3. **Report Submission Page**:
   ![Report Submission Page](ScreenShots/ReportCrime.png)

## Video Link
[Demo Video of the Crime Reporting System](https://youtu.be/CmL0iLAuac0)

## Future Scope
- Implement real-time notifications using WebSockets.
- Add a map feature to visualize crime locations.
- Enhance user roles (e.g., admin, user) with different permissions.
- Integrate machine learning for crime prediction based on historical data.
- Mobile application development for better accessibility.

## Team Members
- Tikesh Aswale

## Acknowledgments
- Special thanks to VenuGopal Sir and Masai school for guidance and support.


## References
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express.js Documentation](https://expressjs.com/en/guide/routing.html)
- [MongoDB Documentation](https://docs.mongodb.com/)