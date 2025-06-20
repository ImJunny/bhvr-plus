import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const sessionsTable = pgTable("sessions", {
  user_id: text().primaryKey(),
  access_token: text().notNull(),
  refresh_token: text().notNull(),
  expires_at: timestamp().notNull(),
});
