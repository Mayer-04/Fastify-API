import Fastify from "fastify";
import { envs } from "./config/envs";
import { productRoutes } from "./routes/products";
import { connectionPostgres } from "./database";

const fastify = Fastify({
  logger: true,
});

const { PORT } = envs;
const SERVER_PORT = PORT ?? 5001;

fastify.register(productRoutes, { prefix: "/api" });

const start = async () => {
  try {
    await connectionPostgres();
    await fastify.listen({ port: SERVER_PORT });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
