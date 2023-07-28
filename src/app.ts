import fastify, { FastifyInstance } from "fastify";
import userRoutes from "./users/users-routes";

const app: FastifyInstance = fastify({ logger: true });

// Register all routes defined in the routes.ts file
app.register(userRoutes);

export default app;
