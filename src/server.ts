import express from "express";
import cors from "cors";
import morgan from "morgan";
import teamRoutes from "./routes/teamRoutes";
import playerRoutes from "./routes/playerRoutes";

const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(morgan("dev")); // Logger for HTTP requests

// Routes
app.use("/teams", teamRoutes);
app.use("/players", playerRoutes);

// Health Check Route
app.get("/", (_req, res) => {
  res.send("Monopoly Coding Contest Backend is running! 🚀");
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
