import express from "express";
import { 
  createPlayer, 
  getAllPlayers, 
  getPlayerById, 
  updatePlayer, 
  deletePlayer 
} from "../controllers/playerController";

const router = express.Router();

// Routes
router.post("/", createPlayer);
router.get("/", getAllPlayers);
router.get("/:id", getPlayerById);
router.put("/:id", updatePlayer);
router.delete("/:id", deletePlayer);

export default router;
