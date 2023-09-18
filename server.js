import Fastify from "fastify";
import cors from "@fastify/cors";

const fastify = Fastify({
  logger: true,
});

fastify.register(cors, {});

fastify.post("/", async function handler(request, reply) {
  console.log("Request body is", request.body);
  return { hello: "world" };
});

fastify.listen({ port: 3000, host: "0.0.0.0" }).catch((err) => {
  fastify.log.error(err);
  process.exit(1);
});
