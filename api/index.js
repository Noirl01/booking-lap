import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import errorHandler from "./handlers/errorHandler.js";

// App & Enviroment Declaration
const app = express();
dotenv.config();

app.use(express.json());
// Database Connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw new Error(error);
  }
};

// Database Logging
mongoose.connection.on("disconnected", () => {
  console.log("Database Disconnected!");
});

mongoose.connection.on("connected", () => {
  console.log("Database Connected!");
});

// Middlewares
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
// 
errorHandler(app)
// Server Connection
app.listen(8800, () => {
  connect();
  console.log("Backend is UP!");
});
