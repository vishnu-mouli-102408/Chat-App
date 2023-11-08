const socket = io();

let btn = document.getElementById("btn");
let inputMsg = document.getElementById("inptext");
let msgList = document.getElementById("msglist");

btn.onclick = function exec() {
  socket.emit("msg_sent", {
    msg: inputMsg.value,
  });
};

socket.on("msg_rcvd", (data) => {
  let limsg = document.createElement("li");
  limsg.innerText = data.msg;
  msgList.appendChild(limsg);
});
