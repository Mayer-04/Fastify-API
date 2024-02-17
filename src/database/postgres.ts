import { Pool } from "pg";
import { envs } from "../config/envs";

const { POSTGRES_USER, HOST, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT } =
  envs;

const config = {
  user: POSTGRES_USER,
  host: HOST,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  port: POSTGRES_PORT,
};

export const pool = new Pool(config);
