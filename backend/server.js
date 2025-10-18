// 🧠 Global error handling — recommended for production
process.on("uncaughtException", (err) => {
  console.error("❌ Uncaught Exception:", err);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.error("❌ Unhandled Rejection:", err);
  process.exit(1);
});

// 🌍 Core imports
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

// 🧩 Local imports
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

// ⚙️ Config
dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// 🔐 CORS setup — important for frontend-backend link
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true, // Allow cookies, tokens, etc.
  })
);

// 📦 Middlewares
app.use(express.json());
app.use(cookieParser());

// 🛣️ Routes
app.use("/api/auth", authRoutes);

// ✅ Default route for testing
app.get("/", (req, res) => {
  res.send("✅ API is running successfully!");
});

// 🌐 Serve frontend (for production build)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

// 🚀 Start server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
