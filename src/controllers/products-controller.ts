import { FastifyRequest, FastifyReply } from "fastify";
import { ProductsModel } from "../models/products-model";
import { Product } from "../types/products";
import { productValidation } from "../config/validations";
export class ProductsController {
  constructor(private productsModel: ProductsModel) {}

  getAllProducts = async (_request: FastifyRequest, reply: FastifyReply) => {
    try {
      const products = await this.productsModel.getAllProducts();

      if (products.length === 0) {
        return reply.code(404).send({
          message: "No products found",
        });
      }

      return reply.code(200).send(products);
    } catch (error) {
      return reply.code(500).send({
        message: "Internal server error",
      });
    }
  };

  getProduct = async (
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) => {
    const { id } = request.params;
    try {
      const product = await this.productsModel.getProduct(id);
      if (!product) {
        return reply.code(404).send({
          message: "Product not found",
        });
      }
      return reply.code(200).send(product);
    } catch (error) {
      reply.code(500).send({
        message: "Internal server error",
      });
    }
  };

  createProduct = async (
    request: FastifyRequest<{ Body: Product }>,
    reply: FastifyReply
  ) => {
    const { name, description, price, quantity } = request.body;

    const validations = productValidation(reply, { name, price, quantity });

    if (validations) {
      return reply.code(400).send(validations);
    }

    try {
      const product = await this.productsModel.createProduct({
        name,
        description,
        price,
        quantity,
      });

      return reply.code(201).send({ message: "Product created", product });
    } catch (error) {
      return reply.code(500).send({
        message: "Internal server error",
      });
    }
  };

  updateProduct = async (
    request: FastifyRequest<{ Params: { id: string }; Body: Product }>,
    reply: FastifyReply
  ) => {
    const { id } = request.params;
    const { name, description, price, quantity } = request.body;
    try {
      const product = await this.productsModel.updateProduct(id, {
        name,
        description,
        price,
        quantity,
      });

      if (!product) {
        return reply.code(404).send({
          message: "Product not found",
        });
      }

      return reply.code(200).send({
        message: "Product updated",
      });
    } catch (error) {
      return reply.code(500).send({
        message: "Internal server error",
      });
    }
  };

  deleteProduct = async (
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) => {
    const { id } = request.params;
    try {
      const product = await this.productsModel.deleteProduct(id);

      if (!product) {
        return reply.code(404).send({
          message: "The product to be removed was not found",
        });
      }
      return reply.code(200).send({
        message: "Product deleted",
      });
    } catch (error) {
      return reply.code(500).send({
        message: "Internal server error",
      });
    }
  };
}
