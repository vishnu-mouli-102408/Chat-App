import express from "express";
import bodyParser from "body-parser";
import { PORT } from "./config/serverConfig.js";

import { Server } from "socket.io";
import http from "http";

import path from "path";

const __dirname = path.resolve();

const setUpAndStartServer = async () => {
  const app = express();
  const server = http.createServer(app);

  const io = new Server(server);

  io.on("connection", (socket) => {
    console.log("a user connected", socket.id);

    socket.on("msg_sent", (data) => {
      console.log(data);
      io.emit("msg_rcvd", data); // sends data to all web socket connections
      //   socket.emit("msg_rcvd", data); // doesnt send data to ther web socket connections, only sends to itself.
      //   socket.broadcast.emit("msg_rcvd", data); // except itself, sends the data to all web socket connections/
    });
  });

  app.use("/", express.static(__dirname + "/public"));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  server.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
  });
};

setUpAndStartServer();
