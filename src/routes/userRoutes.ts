import { Router } from "express";
require("../auth/auth");
import isAuthenticated from "../middlewares/isAuthenticated";
import * as userService from "../services/user.service";
import {
  getAllUser,
  handleFailure,
  handleSuccess,
} from "../controllers/userControllers";
import { isLoggedIn } from "../middlewares/isLoggedIn";
import { isUserFound } from "../middlewares/isFound";
import { hasPermission } from "../middlewares/hasPermission";
import { emailValidation } from "../middlewares/emailValidation";

const userRoutes = Router();

userRoutes.get("/auth/google", userService.authenticateUser);
userRoutes.get("/auth/google/callback", userService.callbackFn);
userRoutes.get("/auth/google/success", isAuthenticated, handleSuccess);
userRoutes.get("/auth/google/failure", handleFailure);
userRoutes.get("/api/users", getAllUser);
userRoutes.put("/api/users/profile/:id",isLoggedIn,isUserFound,hasPermission,emailValidation, userService.handleUpdate)

export default userRoutes;
