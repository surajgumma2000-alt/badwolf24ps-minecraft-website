import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertFeedbackSchema, insertServerStatusSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get server status
  app.get("/api/server-status", async (req, res) => {
    try {
      const status = await storage.getServerStatus();
      if (!status) {
        // Return default status if none exists
        const defaultStatus = {
          isOnline: true,
          onlinePlayers: 0,
          maxPlayers: 20,
          version: "1.20.1",
          ping: 45,
          uptime: 98,
          lastUpdated: new Date(),
        };
        res.json(defaultStatus);
      } else {
        res.json(status);
      }
    } catch (error) {
      console.error("Error fetching server status:", error);
      res.status(500).json({ message: "Failed to fetch server status" });
    }
  });

  // Update server status (for admin use)
  app.post("/api/server-status", async (req, res) => {
    try {
      const validatedData = insertServerStatusSchema.parse(req.body);
      const updatedStatus = await storage.updateServerStatus(validatedData);
      res.json(updatedStatus);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid server status data", errors: error.errors });
      } else {
        console.error("Error updating server status:", error);
        res.status(500).json({ message: "Failed to update server status" });
      }
    }
  });

  // Submit feedback
  app.post("/api/feedback", async (req, res) => {
    try {
      const validatedData = insertFeedbackSchema.parse(req.body);
      const newFeedback = await storage.createFeedback(validatedData);
      res.status(201).json(newFeedback);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid feedback data", errors: error.errors });
      } else {
        console.error("Error creating feedback:", error);
        res.status(500).json({ message: "Failed to submit feedback" });
      }
    }
  });

  // Get recent feedback
  app.get("/api/feedback", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;
      const recentFeedback = await storage.getRecentFeedback(limit);
      res.json(recentFeedback);
    } catch (error) {
      console.error("Error fetching feedback:", error);
      res.status(500).json({ message: "Failed to fetch feedback" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
