import express from "express";
import { register,login } from "../controllers/authController.js";
// import { login } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
import jwt from "jsonwebtoken";

export default router;