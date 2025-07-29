import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const feedback = pgTable("feedback", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  minecraftUsername: text("minecraft_username").notNull(),
  overallRating: integer("overall_rating").notNull(),
  performanceRating: integer("performance_rating"),
  communityRating: integer("community_rating"),
  playDuration: text("play_duration"),
  feedbackText: text("feedback_text"),
  suggestions: text("suggestions"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const serverStatus = pgTable("server_status", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  isOnline: boolean("is_online").notNull().default(false),
  onlinePlayers: integer("online_players").notNull().default(0),
  maxPlayers: integer("max_players").notNull().default(20),
  version: text("version").notNull().default("1.20.1"),
  ping: integer("ping").notNull().default(0),
  uptime: integer("uptime").notNull().default(0),
  lastUpdated: timestamp("last_updated").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertFeedbackSchema = createInsertSchema(feedback).omit({
  id: true,
  createdAt: true,
});

export const insertServerStatusSchema = createInsertSchema(serverStatus).omit({
  id: true,
  lastUpdated: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertFeedback = z.infer<typeof insertFeedbackSchema>;
export type Feedback = typeof feedback.$inferSelect;
export type InsertServerStatus = z.infer<typeof insertServerStatusSchema>;
export type ServerStatus = typeof serverStatus.$inferSelect;
