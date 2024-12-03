School Management App
The School Management App is a full-stack application built using the MERN stack (React.js, Express.js, Node.js, and MySQL). The app provides APIs and a user-friendly interface for managing school data, allowing users to add schools and retrieve a list of schools sorted by their proximity to a user-specified location.

Features
Backend:
Add School API: Adds a new school with details like name, address, latitude, and longitude.
List Schools API: Fetches and sorts schools based on their proximity to a given location.
Frontend:
Add School Form: A form to input school details and submit them via the Add School API.
List Schools: Displays a sorted list of schools based on the user-provided location.
Tech Stack
Backend:
Node.js with Express.js
MySQL (as the database)
Frontend:
React.js (with Vite for fast development)
Axios (for API calls)
CSS/Tailwind (for styling)
Prerequisites
Ensure the following software is installed on your system:

Node.js (v16+)
MySQL
npm
Git
Installation
1. Clone the Repository
bash
Copy code
git clone <repository-url>
cd school-management
2. Backend Setup
Install Backend Dependencies:

bash
Copy code
cd backend
npm install
Set Up Database:

Create a database in MySQL:
sql
Copy code
CREATE DATABASE school_management;
Use the following schema to create the schools table:
sql
Copy code
CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
Configure Environment Variables:

Create a .env file in the backend directory and add:
makefile
Copy code
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASS=your_mysql_password
DB_NAME=school_management
PORT=5000
Start the Backend Server:

bash
Copy code
node app.js
3. Frontend Setup
Navigate to the Frontend Directory:

bash
Copy code
cd frontend
Install Frontend Dependencies:

bash
Copy code
npm install
Start the React App:

bash
Copy code
npm run dev
Configure API URLs:

Ensure the backend API base URL (http://localhost:5000) is correctly configured in your React app's API service file.
Project Structure
Backend (/backend)
graphql
Copy code
backend/
├── app.js                     # Main entry point
├── db.js                      # MySQL connection setup
├── routes/
│   └── schoolRoutes.js        # API routes for Add School and List Schools
├── controllers/
│   └── schoolController.js    # Controller logic for APIs
├── helpers/
│   └── distanceCalculator.js  # Utility to calculate geographical distance
└── package.json               # Dependencies and scripts
Frontend (/frontend)
bash
Copy code
frontend/
├── src/
│   ├── App.jsx                # Main React app component
│   ├── components/
│   │   ├── AddSchoolForm.jsx  # Component for adding schools
│   │   ├── SchoolList.jsx     # Component for displaying the school list
│   ├── services/
│   │   └── api.js             # Axios service for API calls
│   ├── styles/                # CSS or Tailwind styling
└── package.json               # Frontend dependencies and scripts
API Documentation
Backend APIs
1. Add School API
Endpoint: /api/addSchool
Method: POST
Payload:
json
Copy code
{
  "name": "ABC School",
  "address": "123 Main St",
  "latitude": 37.7749,
  "longitude": -122.4194
}
Response:
json
Copy code
{
  "message": "School added successfully"
}
2. List Schools API
Endpoint: /api/listSchools
Method: GET
Query Parameters:
latitude: User's latitude
longitude: User's longitude
Response:
json
Copy code
[
  {
    "id": 1,
    "name": "ABC School",
    "address": "123 Main St",
    "latitude": 37.7749,
    "longitude": -122.4194,
    "distance": 0.0
  },
  {
    "id": 2,
    "name": "XYZ School",
    "address": "456 Elm St",
    "latitude": 37.7849,
    "longitude": -122.4294,
    "distance": 1.2
  }
]
Frontend Components
1. AddSchoolForm.jsx
A form to input school details (name, address, latitude, longitude) and send them to the backend via the Add School API.
2. SchoolList.jsx
Displays a list of schools fetched from the backend.
Schools are sorted based on proximity to the user's provided location.
3. API Service (services/api.js)
Handles all API calls using Axios:
javascript
Copy code
import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const addSchool = (schoolData) => axios.post(`${BASE_URL}/addSchool`, schoolData);

export const listSchools = (latitude, longitude) =>
  axios.get(`${BASE_URL}/listSchools`, {
    params: { latitude, longitude },
  });
Testing
Backend:

Use Postman or curl to test the APIs:
Add School: POST /api/addSchool
List Schools: GET /api/listSchools
Frontend:

Open the app in your browser after running npm run dev.
Test adding schools and fetching the sorted list.
Deployment
Backend:
Host the backend on platforms like Heroku, Render, or AWS.
Update the .env file with the production database credentials.
Frontend:
Build the React app:
bash
Copy code
npm run build
Host the build files on platforms like Vercel, Netlify, or GitHub Pages.
Future Enhancements
Add user authentication for secure access.
Integrate a geocoding API to convert addresses into latitude/longitude.
Improve UI/UX with better styling and interactive components.
