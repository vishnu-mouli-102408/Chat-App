import mongoose from "mongoose";
import { MONGO_URL } from "./serverConfig.js";

export const connect = async () => {
  await mongoose.connect(MONGO_URL);
};
