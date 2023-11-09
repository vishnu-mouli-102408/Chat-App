import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
  {
    content: {
      type: String,
    },
    user: {
      type: String,
    },
    roomId: {
      type: String,
    },
  },
  { timestamps: true }
);

const Chat = mongoose.model("Chat", chatSchema);

export default Chat;
