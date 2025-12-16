import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import { createServer } from "http";
import { Server } from "socket.io";

dotenv.config();

export const app = express();
app.use(express.json());

connectDB();

const httpServer = createServer(app);
const io = new Server(httpServer, {
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });

  socket.on("sendMessage", (data) => {
    console.log("Message received:", data);
  });
});

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));
