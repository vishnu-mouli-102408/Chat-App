import express from "express";
import bodyParser from "body-parser";
import { PORT } from "./config/serverConfig.js";
import { connect } from "./config/databaseConfig.js";
import ejs from "ejs";

import { Server } from "socket.io";
import http from "http";

import path from "path";

const __dirname = path.resolve();

const setUpAndStartServer = async () => {
  const app = express();
  const server = http.createServer(app);

  app.set("view engine", "ejs");

  app.get("/chat/:roomId", (req, res) => {
    res.render("index", {
      name: "Mouli",
      id: req.params.roomId,
    });
  });

  const io = new Server(server);

  io.on("connection", (socket) => {
    socket.on("join_room", (data) => {
      console.log("Joining a room", data.roomId);
      socket.join(data.roomId);
    });

    socket.on("msg_sent", (data) => {
      // console.log(data);
      // io.emit("msg_rcvd", data); // sends data to all web socket connections
      //   socket.emit("msg_rcvd", data); // doesnt send data to other web socket connections, only sends to itself.
      //   socket.broadcast.emit("msg_rcvd", data); // except itself, sends the data to all web socket connections/
      io.to(data.roomId).emit("msg_rcvd", data);
    });
  });

  app.use("/", express.static(__dirname + "/public"));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  server.listen(PORT, async () => {
    console.log(`Server started on PORT ${PORT}`);
    await connect();
    console.log("MongoDB Connected");
  });
};

setUpAndStartServer();
