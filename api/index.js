import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cors from "cors";
import cookieParser from "cookie-parser";
// App & Enviroment Declaration
const app = express();
dotenv.config();
app.use(express.json(), cors());
app.use(cookieParser());

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

// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

// Error Middleware
app.use("/", (err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong !";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// Server Connection
app.listen(process.env.SERVER_PORT || 8800, () => {
  connect();
  console.log("Backend is UP!");
});
