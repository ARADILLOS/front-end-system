# LOCAFY - Cordova Local Treasure

A React-based web application for discovering Cordova's local treasures, including restaurants, cafes, and tourist destinations.

## Features

- **Authentication System**
  - User Login with email/password
  - Google OAuth integration
  - User Registration with role selection (User/Business Owner)
  - Forgot Password functionality

- **Landing Page**
  - Welcome screen with Sign In/Sign Up options
  - Social media links

- **Home Page**
  - Search functionality for local destinations
  - Destination recommendations with beautiful cards
  - Responsive navigation with logout option

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner

## Project Structure

```
src/
├── pages/
│   ├── LandingPage.js      # Welcome page
│   ├── Login.js            # Login page
│   ├── Register.js         # Registration page
│   ├── ForgotPassword.js   # Password recovery
│   └── Home.js             # Main home page
├── App.js                  # Main app with routing
└── index.js                # Entry point
```

## Technologies Used

- React 18
- React Router DOM 6
- CSS3 with modern features
- Responsive design

## Pages

1. **Landing Page** (`/`) - Entry point with Sign Up/Sign In buttons
2. **Login** (`/login`) - User authentication
3. **Register** (`/register`) - New user registration
4. **Forgot Password** (`/forgot-password`) - Password recovery
5. **Home** (`/home`) - Main dashboard with search and recommendations
