import express from "express";
import cors from "cors";
import storyRoutes from "./routes/storyRoutes.js";

import authRoutes from "./routes/authRoutes.js";


const app = express();


// Middlewares
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to SiteOfKindness API 🚀",
  });
});

// Auth Routes
app.use("/api/auth", authRoutes);
app.use("/api/stories", storyRoutes);

export default app;