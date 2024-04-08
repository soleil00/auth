import { Router } from "express";
require("../auth/auth");
import isAuthenticated from "../middlewares/isAuthenticated";
import * as userService from "../services/user.service";
import {
  getAllUser,
  handleFailure,
  handleSuccess,
} from "../controllers/userControllers";

const userRoutes = Router();

userRoutes.get("/auth/google", userService.authenticateUser);
userRoutes.get("/auth/google/callback", userService.callbackFn);
userRoutes.get("/auth/google/success", isAuthenticated, handleSuccess);
userRoutes.get("/auth/google/failure", handleFailure);
userRoutes.get("/api/users", getAllUser);

export default userRoutes;