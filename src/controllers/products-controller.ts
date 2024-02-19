import { FastifyRequest, FastifyReply } from "fastify";
import { ProductsModel } from "../models/products-model";
import { Product } from "../types/products";
export class ProductsController {
  constructor(private productsModel: ProductsModel) {}

  getAllProducts = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const products = await this.productsModel.getProduct();

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

  getProductId = async (
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) => {
    const { id } = request.params;
    try {
      const product = await this.productsModel.getProductId(id);
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
    try {
    } catch (error) {}
  };

  updateProduct = async (
    request: FastifyRequest<{ Params: { id: string }; Body: Product }>,
    reply: FastifyReply
  ) => {
    const { id } = request.params;
    const { name, description, price, quantity } = request.body;
    try {
    } catch (error) {}
  };

  deleteProduct = async (
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) => {
    const { id } = request.params;
    try {
    } catch (error) {}
  };
}
