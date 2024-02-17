import { FastifyInstance } from "fastify";
import { pool } from "../database/postgres";
import { Product } from "../types/products";

export const productRoutes = async (fastify: FastifyInstance) => {
  fastify.get("/", async (request, reply) => {
    const query = await pool.query("SELECT * FROM products");

    reply.send(query);
  });

  fastify.get("/:id", async (request, reply) => {});

  fastify.post<{ Body: Product }>("/", async (request, reply) => {
    const { name, description, price } = request.body;

    const query = await pool.query(
      "INSERT INTO products (name, description, price) VALUES ($1, $2, $3)",
      [name, description, price]
    );

    reply.code(201).send({ message: "Product created", product: query });
  });

  fastify.put("/:id", async (request, reply) => {});

  fastify.delete("/:id", async (request, reply) => {});
};
