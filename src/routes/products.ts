import { FastifyInstance } from "fastify";
import { ProductsController } from "../controllers/products-controller";
import { ProductsModel } from "../models/products-model";

const productsModel = new ProductsModel();
const productsController = new ProductsController(productsModel);

// TODO: http://localhost:5000/api/products

export const productRoutes = async (fastify: FastifyInstance) => {
  fastify.get("/products", productsController.getAllProducts);

  fastify.get("/products/:id", productsController.getProduct);

  fastify.post("/products", productsController.createProduct);

  fastify.put("/products/:id", productsController.updateProduct);

  fastify.delete("/products/:id", productsController.deleteProduct);
};
