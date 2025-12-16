🗨️ MERN 1-to-1 Private Chat Application
📌 Project Overview

Chat App is a real-time one-to-one private chat application built using the MERN stack with Socket.IO for real-time communication.
The application supports secure authentication, user search, private messaging, online/offline status, and message persistence.

🚀 Tech Stack
Frontend

React.js

Tailwind CSS

Socket.IO Client

Fetch API

Backend

Node.js

Express.js

MongoDB + Mongoose

Socket.IO

JWT Authentication

🎯 Core Features Implemented
1️⃣ User Authentication

User registration with name, email, password

User login with email & password

JWT-based authentication

Protected routes using authentication middleware

2️⃣ User List & Search

Fetch all registered users (excluding logged-in user)

Search users by name or email

Click a user to start a private chat

3️⃣ Private 1-on-1 Chat

Real-time messaging using Socket.IO

Messages stored in MongoDB

Online / offline user status

Typing indicator (bonus feature)

Message timestamps

Sent messages appear on the right

Received messages appear on the left

4️⃣ Chat UI

Sidebar with searchable user list

Main chat window for selected user

Message input box with send functionality

🔐 Authentication Flow

User registers or logs in

Server generates a JWT token

Token is stored on frontend

Protected routes use authMiddleware

Authenticated users can access chat features

📡 Socket.IO Real-Time Flow

User connects to socket server after login

User joins using their userId

Messages are emitted via sendMessage

Receiver instantly receives message via receiveMessage

Online users tracked via socket connections

🛣️ API Routes
🔹 Auth Routes
POST /api/auth/register
POST /api/auth/login

I have done only backend part

Perfect 👍
Here is a backend-only README.md, tailored exactly to what you’ve built, clean and assignment-ready.
No frontend, no assumptions — only Express + MongoDB + JWT + Socket.IO backend.

🗨️ MERN 1-to-1 Private Chat Application (Backend)
📌 Project Overview

This project is the backend implementation of a 1-to-1 private chat application built using Node.js, Express, MongoDB, JWT authentication, and Socket.IO.

It provides secure APIs for authentication, user management, private messaging, and real-time communication.
The frontend (React) will consume these APIs and Socket.IO events.

🚀 Tech Stack (Backend)

Node.js

Express.js

MongoDB (Mongoose)

JWT (JSON Web Token)

Socket.IO

CORS

dotenv

📂 Project Structure
src/
│── config/
│   └── db.js
│
│── controllers/
│   ├── auth.controller.js
│   ├── user.controller.js
│   └── message.controller.js
│
│── middlewares/
│   └── auth.middleware.js
│
│── models/
│   ├── user.model.js
│   └── message.model.js
│
│── routes/
│   ├── auth.routes.js
│   ├── user.routes.js
│   └── message.routes.js
│
│── app.js
│── index.js
│── .env

🔐 Authentication Features

User Registration

User Login

JWT Token generation

Protected routes using middleware

Fetch current logged-in user

🛣️ API Routes
🔹 Authentication Routes
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/me

Routes Implementation
router.post('/register', signup);
router.post('/login', login);
router.get('/me', authMiddleware, currentuser);

🔹 User Routes
GET /api/users/allUsers
GET /api/users/search

Routes Implementation
router.get('/allUsers', authMiddleware, getRegisteredUsers);
router.get('/search', authMiddleware, searchUser);

Features

Returns all registered users except the logged-in user

Search users by name or email

💬 Messaging Features

Private 1-to-1 messages

Messages stored in MongoDB

Messages fetched per conversation

Timestamp included for each message

🔌 Real-Time Communication (Socket.IO)
Socket Setup
const httpServer = createServer(app);
const io = new Server(httpServer);

Socket Events
Event Name	Description
connection	User connects to socket
sendMessage	Send a private message
disconnect	User disconnects

Example:

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("sendMessage", (data) => {
    console.log("Message received:", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

🔒 Middleware
Auth Middleware

Validates JWT token

Attaches user to req.user

Protects private routes

🧪 Testing
API Testing

Tested using Postman

JWT token required for protected routes

Authorization header format:

Authorization: Bearer <token>

Socket Testing

Socket events tested via frontend or socket client

Postman cannot trigger Socket.IO events

⚙️ Environment Variables
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret

▶️ Run Project
npm install
npm run dev


Server will start on:

http://localhost:5000

📌 Future Enhancements

Message read receipts

Group chat

Media sharing

Rate limiting

Redis for online users

✅ Assignment Status

✔ Backend completed
✔ Authentication implemented
❌ Real-time Socket.IO implemented
❌ MongoDB message storage