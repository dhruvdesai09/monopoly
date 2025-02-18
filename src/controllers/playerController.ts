import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ✅ Create a new player
export const createPlayer = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, teamId } = req.body;

    if (!name || !teamId) {
      res.status(400).json({ error: "Player name and team ID are required" });
      return;
    }

    const player = await prisma.player.create({
      data: { name, teamId },
    });

    res.status(201).json(player);
  } catch (error) {
    console.error("Error creating player:", error);
    res.status(500).json({ error: "Error creating player" });
  }
};

// ✅ Get all players
export const getAllPlayers = async (req: Request, res: Response): Promise<void> => {
  try {
    const players = await prisma.player.findMany();
    res.json(players);
  } catch (error) {
    console.error("Error fetching players:", error);
    res.status(500).json({ error: "Error fetching players" });
  }
};

// ✅ Get player by ID
export const getPlayerById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const player = await prisma.player.findUnique({
      where: { id },
    });

    if (!player) {
      res.status(404).json({ error: "Player not found" });
      return;
    }

    res.json(player);
  } catch (error) {
    console.error("Error fetching player:", error);
    res.status(500).json({ error: "Error fetching player" });
  }
};

// ✅ Update player
export const updatePlayer = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, teamId } = req.body;

    const updatedPlayer = await prisma.player.update({
      where: { id },
      data: { name, teamId },
    });

    res.json(updatedPlayer);
  } catch (error) {
    console.error("Error updating player:", error);
    res.status(500).json({ error: "Error updating player" });
  }
};

// ✅ Delete player
export const deletePlayer = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    await prisma.player.delete({
      where: { id },
    });

    res.status(204).send();
  } catch (error) {
    console.error("Error deleting player:", error);
    res.status(500).json({ error: "Error deleting player" });
  }
};
