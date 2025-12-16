import {io} from "socket.io-client";

const socket = io("http://localhost:5000");

socket.on("connect", () => {
  console.log("Connected to server with ID:", socket.id);
    socket.emit("sendMessage", { text: "Hello from client!" });
});

socket.on("disconnect", () => {
  console.log("Disconnected from server");
});

// Keep the process alive to listen for events
setInterval(() => {}, 1000);