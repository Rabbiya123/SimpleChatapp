const http = require("http");
const express = require("express");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const webSocket = new Server(server);

// Socket.io
webSocket.on("connection", (socket) => {
  socket.on("user-message", (message) => {
    webSocket.emit("message", message); // all client ko message send krna h
  });
});

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
  return res.sendFile("/public/index.html");
});

server.listen(9000, () => console.log(`Server Started at PORT:9000`));
