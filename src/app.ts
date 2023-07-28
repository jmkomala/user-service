// app.ts
import fastify, { FastifyInstance } from "fastify";
import routes from "./routes";

const app = fastify({ logger: true });

// Register the routes using the 'registerRoutes' plugin
app.register(routes);

export default app;
