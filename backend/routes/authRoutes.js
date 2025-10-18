import express from "express";
import { 
  registerUser, 
  loginUser, 
  logoutUser,
  checkAuth,
  getProfile, 
  getAllUsers 
} from "../controllers/authController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected routes
router.post("/logout", protect, logoutUser);
router.get("/check", protect, checkAuth);
router.get("/profile", protect, getProfile);

// Admin routes
router.get("/users", protect, admin, getAllUsers);

export default router;