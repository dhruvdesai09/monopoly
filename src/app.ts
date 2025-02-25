import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Sample test route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

export default app;
