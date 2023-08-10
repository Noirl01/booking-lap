import express from "express";

import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();
/*
router.get("/checkauth", verifyToken, (req, res, next) => {
  res.send(req.user);
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("Role: User, already logged in.");
});

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("Role: User, already logged in.");
});
*/

// Update
router.put("/:id", verifyUser, updateUser);

// Delete
router.delete("/:id", verifyUser, deleteUser);

// Get
router.get("/:id", verifyUser, getUser);

// Get All
router.get("/", verifyAdmin, getAllUsers);

export default router;
