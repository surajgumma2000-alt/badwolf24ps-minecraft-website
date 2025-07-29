import { users, feedback, serverStatus, type Feedback, type InsertFeedback, type ServerStatus, type InsertServerStatus, type User, type InsertUser } from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Feedback methods
  createFeedback(feedbackData: InsertFeedback): Promise<Feedback>;
  getRecentFeedback(limit?: number): Promise<Feedback[]>;
  
  // Server status methods
  getServerStatus(): Promise<ServerStatus | undefined>;
  updateServerStatus(statusData: InsertServerStatus): Promise<ServerStatus>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createFeedback(feedbackData: InsertFeedback): Promise<Feedback> {
    const [newFeedback] = await db
      .insert(feedback)
      .values(feedbackData)
      .returning();
    return newFeedback;
  }

  async getRecentFeedback(limit = 10): Promise<Feedback[]> {
    return await db
      .select()
      .from(feedback)
      .orderBy(desc(feedback.createdAt))
      .limit(limit);
  }

  async getServerStatus(): Promise<ServerStatus | undefined> {
    const [status] = await db
      .select()
      .from(serverStatus)
      .orderBy(desc(serverStatus.lastUpdated))
      .limit(1);
    return status || undefined;
  }

  async updateServerStatus(statusData: InsertServerStatus): Promise<ServerStatus> {
    // First, try to get existing status
    const existingStatus = await this.getServerStatus();
    
    if (existingStatus) {
      const [updatedStatus] = await db
        .update(serverStatus)
        .set({ ...statusData, lastUpdated: new Date() })
        .where(eq(serverStatus.id, existingStatus.id))
        .returning();
      return updatedStatus;
    } else {
      const [newStatus] = await db
        .insert(serverStatus)
        .values(statusData)
        .returning();
      return newStatus;
    }
  }
}

export const storage = new DatabaseStorage();
