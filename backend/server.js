import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/routes.js";
import "dotenv/config";

const server = express();
const PORT = process.env.PORT;
const MONGO_CONN_STR = process.env.MONGO_CONN_STR;

server.use(express.urlencoded({ extends: true }));
server.use(express.json());
server.use(cors());

mongoose.connect(MONGO_CONN_STR);

// routes
server.use("/recipes", router);

server.listen(PORT, function () {
  console.log(`Server started on port ${PORT}`);
});
