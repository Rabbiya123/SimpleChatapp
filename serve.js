// const http = require("http"); // yh humhe import krna hota h
// const express = require("express");
// const path = require("path");
// const { Server } = require("socket.io"); //Basically to import the socket.io
// const app = express();
// const server = http.createServer(app);
// const webSocket = new Server(server); //io humari sockets ko handle kry gi.
// // is per all socket hogi socket.io

// //jab b ak fontend se connection create hota h

// //Socket.io
// webSocket.on("connection", (socket) => {
//   // yh socket basically Client ha. jab b socket connection create hoga yh callback function run hoga
//   // aur is socket ma huamary pas client ki information hogi.

//   //   console.log("A new user is connected", socket.id); // every socket ki ak id hoti h aur automatically manage hoti

//   socket.on("user-message", (message) => {
//     webSocket.emit("message", message);
//   });
// });

// app.use(express.static(path.resolve("./public")));
// app.get("/", (req, res) => {
//   return res.sendFile("/public/index.html");
// });
// server.listen(9000, () => {
//   console.log("Server started at port 9000");
// }); //ALL http request ma express handle hoga wo handle kry ga.
