import { db } from "../db";
import { userTable } from "../schema";

export const createUser = async (name: string, email: string) => {
  try {
    const response = await db.insert(userTable).values({ name, email }).returning({ newUserId: userTable.id });
    return response;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
