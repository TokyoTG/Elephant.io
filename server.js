// const express = require("express");
// const http = require("http");
const logger = require("winston");
const app = require("express")();
const http = require("http").createServer(app);

const PORT = process.env.PORT || 2826;
const io = require("socket.io")(http);
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
  console.log("server started");
});
