import { Router } from 'express';
import { AuthController } from "../controllers/AuthController";

const loginRoutes = Router();

const authController = new AuthController();

loginRoutes.post("/", authController.login);
loginRoutes.post("/changePassword", authController.changePassword);

export { loginRoutes };
