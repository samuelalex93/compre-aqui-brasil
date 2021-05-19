import { Router } from 'express';
import { AuthController } from "../controllers/AuthController";

const loginRoutes = Router();

const authController = new AuthController();

loginRoutes.post("/", authController.login);

export { loginRoutes };
