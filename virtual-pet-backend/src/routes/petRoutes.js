import express from "express";
import {
  createPet,
  getPets,
  getPet,
  feedPet,
  playPet,
  sleepPet,
  deletePet,
} from "../controllers/petController.js";

const router = express.Router();

router.post("/", createPet);
router.get("/", getPets);
router.get("/:id", getPet);
router.patch("/:id/feed", feedPet);
router.patch("/:id/play", playPet);
router.patch("/:id/sleep", sleepPet);
router.delete("/:id", deletePet);

export default router;
