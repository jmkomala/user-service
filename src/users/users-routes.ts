import express from "express";
import { createUserController, getUsersController } from "./users-controller";
const router = express.Router();

router.post("/", createUserController);
router.get("/", getUsersController);

export default router;
