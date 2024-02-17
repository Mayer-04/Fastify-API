import Fastify from "fastify";
import fastifyEnv from "@fastify/env";
import { envs, options } from "./config/envs";

const fastify = Fastify({
  logger: true,
});

const { PORT } = envs;
const SERVER_PORT = PORT ?? 5001;

fastify.register(fastifyEnv, options);

fastify.get("/", function (request, reply) {
  reply.send({ hello: "world" });
});

const start = async () => {
  try {
    await fastify.listen({ port: SERVER_PORT, host: "127.0.0.1" });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
