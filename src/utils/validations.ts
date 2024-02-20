import { FastifyReply } from "fastify";
import { Product } from "../types/products";

export const productValidation = (
  reply: FastifyReply,
  { name, price, quantity }: Product
) => {
  if (!name) {
    return reply.code(400).send({
      message: "Name is required",
    });
  }

  if (!price) {
    return reply.code(400).send({
      message: "Price is required",
    });
  }

  if (typeof price !== "number") {
    return reply.code(400).send({
      message: "Price must be a number",
    });
  }

  if (!quantity) {
    return reply.code(400).send({
      message: "Quantity is required",
    });
  }

  if (typeof quantity !== "number") {
    return reply.code(400).send({
      message: "Quantity must be a number",
    });
  }
};
