import { FastifyInstance } from "fastify";
import { productsController } from "../controllers/products-controller";
import { productsModel } from "../models/products-model";

const productController = new productsController(productsModel);

// TODO: http://localhost:5000/api/products

export const productRoutes = async (fastify: FastifyInstance) => {
  fastify.get("/products", productController.getProduct);

  fastify.get("/products/:id", productController.getProductId);

  fastify.post("/products", productController.createProduct);

  fastify.put("/products/:id", productController.updateProduct);

  fastify.delete("/products/:id", productController.deleteProduct);
};
