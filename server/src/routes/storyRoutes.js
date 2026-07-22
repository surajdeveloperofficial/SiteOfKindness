import express from "express";
//import { createStory } from "../controllers/storyController.js";
import {
  createStory,
  getAllStories,
} from "../controllers/storyController.js";

const router = express.Router();
router.get("/", getAllStories);
router.get("/:id", getStoryById);
router.post("/", createStory);

export default router;