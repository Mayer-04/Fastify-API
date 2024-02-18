import { FastifyInstance } from "fastify";
import { pool } from "../database/postgres";
import { Product } from "../types/products";
import { QueryResult } from "pg";

export const productRoutes = async (fastify: FastifyInstance) => {
  fastify.get("/", async (_request, reply) => {
    try {
      const query: QueryResult<Product> = await pool.query(
        "SELECT * FROM products"
      );
      const { rows } = query;
      if (rows.length === 0) reply.code(404).send({ message: "No Products" });
      return reply.send(rows);
    } catch (error) {
      reply.code(500).send({ message: error });
    }
  });

  fastify.get<{ Params: { id: string } }>("/:id", async (request, reply) => {
    const { id } = request.params;
    try {
      const query: QueryResult<Product> = await pool.query(
        "SELECT name, description, price FROM products WHERE id = $1",
        [id]
      );
      const { rows } = query;
      if (rows.length === 0)
        reply.code(404).send({ message: "Product not found" });
      return reply.code(200).send(rows);
    } catch (error) {
      reply.code(500).send({ message: error });
    }
  });

  fastify.post<{ Body: Product }>("/", async (request, reply) => {
    const { name, description, price } = request.body;

    try {
      const query = await pool.query(
        "INSERT INTO products (name, description, price) VALUES ($1, $2, $3)",
        [name, description, price]
      );

      reply.code(201).send({ message: "Product created", product: query });
    } catch (error) {
      reply.code(500).send({ message: error });
    }
  });

  fastify.put("/:id", async (request, reply) => {});

  fastify.delete("/:id", async (request, reply) => {});
};
