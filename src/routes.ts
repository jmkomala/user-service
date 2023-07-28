import { FastifyInstance } from "fastify";

const registerRoutes = (fastify: FastifyInstance, _options: any, done: () => void) => {
  fastify.get("/", async (_request, reply) => {
    reply.send("Your request went through");
  });

  // Add more routes using shorthand methods
  fastify.post("/example", async (_request, reply) => {
    reply.send("This is a POST request");
  });

  // register routes from feature here
  // e.g.   fastify.register(someFeatureRoutes);

  done();
};

export default registerRoutes;
