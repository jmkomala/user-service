import { getUsers, createUser } from "./users-db";
import fastify from "fastify";
// Route handler for creating a new user
export const createUserHandler = async (_req: any, res: any) => {
  try {
    const result = await getUsers();
    res.send(result);
  } catch (err: any) {
    console.log(err);
    res.send(err.message);
  }
};

// Route handler for fetching all users
export const getAllUsersHandler = async (req: any, res: any) => {
  try {
    const data = req.body;
    const result = await createUser(data);
    res.send(result);
  } catch (err: any) {
    console.log(err);
    res.send(err.message);
  }
};
