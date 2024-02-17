import { pool } from "./postgres";

export const connectionPostgres = async () => {
  try {
    await pool.connect();
    console.log("Database connected");
  } catch (error) {
    throw new Error("Database connection error", { cause: error });
  }
};
