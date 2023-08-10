import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cors from 'cors'
//import express  from "express";

// App & Enviroment Declaration
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

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

// Server Connection
app.listen(8800, () => {
  connect();
  console.log("Backend is UP!");
});
