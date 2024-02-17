import { FastifyInstance } from "fastify";
import { pool } from "../database/postgres";

export const productRoutes = async (fastify: FastifyInstance) => {
  fastify.get("/", async (request, reply) => {});

  fastify.get("/:id", async (request, reply) => {});

  fastify.post("/", async (request, reply) => {});

  fastify.put("/:id", async (request, reply) => {});

  fastify.delete("/:id", async (request, reply) => {});
};
