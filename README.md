Todo App

A simple Todo application with a React frontend and Node/Express backend API.
Users can add todos with a title and description and view the list of todos.

🛠 Technology Stack

Frontend:

React (Vite)

No additional styling included

Backend:

Node.js, Express.js

MongoDB (local instance)

⚙️ Features

Each todo item has a title, description, and unique _id.

Backend runs on http://localhost:4000.

Frontend fetches data from the backend API (CORS enabled).

No authentication implemented.

Validation prevents adding todos with empty title or description.

MongoDB must be installed and running locally.

💻 Setup Instructions
1️⃣ Backend Setup

Clone the backend repository or create a folder backend.

Navigate to the backend folder:

cd backend


Install dependencies:

npm install


Make sure MongoDB is installed and running:

mongod


Create a .env file in the backend folder with the following:

MONGO_URI=mongodb://127.0.0.1:27017/todoDB
PORT=4000


todoDB is the database name. You can choose any name.

Start the backend server:

npm run dev


API Endpoints:

GET /todos → fetch all todos

POST /todos → add a new todo

2️⃣ Frontend Setup (React + Vite)

Clone the frontend repository or create a folder frontend.

Navigate to frontend folder:

cd frontend


Install dependencies:

npm install


Start the React development server:

npm run dev


Open the app in the browser (Vite terminal will show the URL, usually):

http://localhost:5173

🔹 Usage

Enter Title and Description for your todo.

Click Add Todo.

Todo will appear in the list below.

If either field is empty, todo will not be added.

To change the backend API URL, edit in TodoList.jsx:

const res = await fetch("http://localhost:4000/todos");

🔹 Notes

Make sure MongoDB is running locally before starting the backend.

Database (todoDB) will be automatically created when the first todo is added.

✅ Steps to Run Locally

Start local MongoDB server:

mongod


Start backend server:

cd backend
npm install
npm run dev


Start frontend server:

cd frontend
npm install
npm run dev

