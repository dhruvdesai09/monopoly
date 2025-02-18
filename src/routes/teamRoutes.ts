import express from "express";
import { createTeam, getAllTeams, getTeamById } from "../controllers/teamController";

const router = express.Router(); // ✅ Use Express Router properly

// Define routes correctly
router.post("/", createTeam);
router.get("/", getAllTeams);
router.get("/:id", getTeamById);

export default router;
