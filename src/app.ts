import Fastify from "fastify";
import { envs } from "./config/envs";
import { productRoutes } from "./routes/products";

const fastify = Fastify({
  logger: true,
});

const { PORT, HOST } = envs;
const SERVER_PORT = PORT ?? 5001;

fastify.register(productRoutes, { prefix: "/products" });

const start = async () => {
  try {
    await fastify.listen({ port: SERVER_PORT, host: HOST });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
