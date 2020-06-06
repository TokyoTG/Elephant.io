// const express = require("express");
// const http = require("http");
const logger = require("winston");

// const app = express();

// const http_server = http.createServer(app);
// const io = require("socket.io")(http_server);
const app = require("express")();
const express = require("express");
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const PORT = process.env.PORT || 8000;
logger.remove(logger.transports.Console);
// logger.add(logger.transports.Console, { colorize: true, timestamp: true });
logger.info("SocketIO > listening on port " + PORT);

io.on("connection", (socket) => {
  logger.info("Socket IO");
  socket.on("hello", () => {
    console.log("sockect connected");
  });

  socket.on("alert", (data) => {
    io.emit("alert_all", data);
  });

  socket.on("hi", (data) => {
    console.log(data);
  });
});

http.listen(PORT, () => {
  console.log("listening on *:8000");
});
