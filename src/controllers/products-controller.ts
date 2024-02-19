import { FastifyRequest, FastifyReply } from "fastify";
import { productsModel } from "../models/products-model";
import { Product } from "../types/products";
export class productsController {
  private productModel: productsModel;

  constructor(productsModel: productsModel) {
    this.productModel = productsModel;
  }

  getProduct = async (
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) => {
    try {
    } catch (error) {}
  };

  getProductId = async (
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) => {
    const { id } = request.params;
    try {
    } catch (error) {}
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
