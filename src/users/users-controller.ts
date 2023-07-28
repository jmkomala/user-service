import { getUsers, createUser } from "./users-db";

// controller for fetching users
export const getUsersController = async (_req: any, res: any) => {
  try {
    const result = await getUsers();
    res.send(result);
  } catch (err: any) {
    console.log(err);
    res.send(err.message);
  }
};

// contoller for creating a user
export const createUserController = async (req: any, res: any) => {
  try {
    const data = req.body;
    const result = await createUser(data);
    res.send(result);
  } catch (err: any) {
    console.log(err);
    res.send(err.message);
  }
};
