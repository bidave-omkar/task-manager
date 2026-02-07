# Task Manager – Full Stack Development Internship Assignment

## Objective

This project is a Full Stack Task Management Web Application developed as part of a Skill Assessment Assignment.  
The objective of this assignment is to demonstrate understanding of frontend development, backend logic, database integration, RESTful APIs, and basic system design, along with clean code organization and problem-solving skills.

---

## Project Overview

The Task Manager application allows users to manage tasks through a simple and intuitive interface.

Users can:
- Create tasks
- View tasks
- Update tasks
- Delete tasks

Each task contains a title, description, and status.

The application follows a client–server architecture and uses MongoDB for persistent data storage.

---

## Tech Stack

### Frontend
- React (Vite)
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js
- REST API

### Database
- MongoDB (Mongoose)

---

## Project Structure

task-manager/
│
├── client/
│ ├── src/
│ │ ├── api/
│ │ ├── components/
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── .env
│ └── package.json
│
├── server/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── config/
│ ├── server.js
│ ├── .env
│ └── package.json
│
├── package.json
├── README.md
└── .gitignore


---

## Application Flow

### Frontend

The frontend is built using React. Users interact with the UI to add, view, update, or delete tasks.  
User actions trigger API calls using the Fetch API. The UI updates dynamically based on the server response.

### API Layer

All HTTP requests are handled through a centralized API service file.  
The API base URL is managed using environment variables to avoid hardcoded values and support deployment.

### Backend

The backend is built using Node.js and Express.  
Express routes handle incoming requests and forward them to controllers.  
Controllers contain the business logic and interact with the database.

### Database

MongoDB is used to store task data.  
A Mongoose schema defines the structure of a task and ensures data consistency.  
Data persists across server restarts.

---

## CRUD Operations

| Operation | Method | Endpoint |
|---------|--------|----------|
| Create Task | POST | /api/tasks |
| Get All Tasks | GET | /api/tasks |
| Update Task | PUT | /api/tasks/:id |
| Delete Task | DELETE | /api/tasks/:id |

---

## API Request Examples

### Create Task

```json
{
  "title": "Sample Task",
  "description": "Task details",
  "status": "pending"
}


PUT /api/tasks/:id
{
  "status": "completed"
}

Environment Variables:
PORT=5000
MONGO_URI=MY-URL
VITE_API_BASE_URL=http://localhost:5000/api


Running the Project Locally
Step 1: Clone the repository
git clone https://github.com/your-username/task-manager.git
cd task-manager

Step 2: Install backend dependencies
cd server
npm install

Step 3: Install frontend dependencies
cd ../client
npm install

Step 4: Run the application

From the project root directory:

npm install
npm run dev


Backend runs on:

http://localhost:5000


Frontend runs on:

http://localhost:5173