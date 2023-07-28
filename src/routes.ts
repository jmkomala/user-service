// consolidate all routes here

import usersRoutes from "./users/users-routes";

import { FastifyInstance, FastifyPluginCallback } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import { RouteGenericInterface } from 'fastify/types/route';

const routes: FastifyPluginCallback = (
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  opts, // Add any options required for the route
  done: (err?: Error) => void
) => {
  // Import the userRoutes and pass any required options
  fastify.register(usersRoutes, opts);

  // Add more routes here if you have other modular route files

  done();
};

export default routes;
