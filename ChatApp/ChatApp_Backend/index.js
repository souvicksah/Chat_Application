const express = require("express");
const socket = require("socket.io");
const http = require("http");
const router = require("./Router");
const app = express();
const server = http.createServer(app);
const io = socket(server);

const PORT = process.env.PORT || 5000;

io.on("connection", (socket) => {
  console.log("we have a new connection!!");
  socket.on("disconect", () => {
    console.log("user had left!!!!");
  });
});

app.use(router);

server.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});
