import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ✅ Create a new team
export const createTeam = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.body;
    if (!name) {
      res.status(400).json({ error: "Team name is required" });
      return;
    }

    const team = await prisma.team.create({ data: { name } });
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

// ✅ Get all teams
export const getAllTeams = async (req: Request, res: Response): Promise<void> => {
  try {
    const teams = await prisma.team.findMany();
    res.json(teams);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

// ✅ Get a team by ID
export const getTeamById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const team = await prisma.team.findUnique({ where: { id } });

    if (!team) {
      res.status(404).json({ error: "Team not found" });
      return;
    }

    res.json(team);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
