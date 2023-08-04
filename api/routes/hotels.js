import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

// Create
router.post("/", async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
});
// Update
router.put("/:id", async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
});

// DELETE
router.delete("/:id", async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel Successfully Deleted");
  } catch (err) {
    next(err);
  }
});

// GET
router.get("/:id", async (req, res, next) => {
  try {
    const getHotel = await Hotel.findById(req.params.id);
    res.status(200).json(getHotel);
  } catch (err) {
    next(err);
  }
});
// GET ALL
router.get("/", async (req, res, next) => {
  try {
    const getHotels = await Hotel.find();
    res.status(200).json(getHotels);
  } catch (err) {
    next(err);
  }
});

export default router;
