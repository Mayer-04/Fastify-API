import "dotenv/config";
import { cleanEnv, port, str, num } from "envalid";

const PROCESS_ENV = process.env;

export const envs = cleanEnv(PROCESS_ENV, {
  PORT: port(),
  HOST: str(),
  POSTGRES_DB: str(),
  POSTGRES_USER: str(),
  POSTGRES_PASSWORD: str(),
  POSTGRES_PORT: num(),
});
