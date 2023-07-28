import { FastifyInstance } from "fastify";
import { createUserHandler, getAllUsersHandler } from "./users-controller";

// Export the user controller as a Fastify plugin
export default function usersController(fastify: FastifyInstance, _opts: any, done: () => void) {
  // Route for creating a new user
  fastify.post("/users", createUserHandler);

  // Route for fetching all users
  fastify.get("/users", getAllUsersHandler);

  done(); // Call done to signal the end of the plugin registration
}
