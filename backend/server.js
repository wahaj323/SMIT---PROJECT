import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
connectDB();

// ES module fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// CORS setup
app.use(
  cors({
    origin: process.env.NODE_ENV === "production" 
      ? process.env.FRONTEND_URL 
      : "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// API Routes - These must come BEFORE the catch-all route
app.use("/api/auth", authRoutes);

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  const frontendDistPath = path.join(__dirname, "../frontend/dist");
  
  app.use(express.static(frontendDistPath));

  // Catch-all route for React Router - serve index.html
  // This handles client-side routing
  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendDistPath, "index.html"));
  });
} else {
  app.get("/", (req, res) => res.send("API Running"));
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📦 Environment: ${process.env.NODE_ENV || "development"}`);
});