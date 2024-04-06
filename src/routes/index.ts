import { Router } from "express";
import homeRoute from "./homeRoute";
import userRoutes from "./userRoutes";

const appRoutes = Router();

appRoutes.use(homeRoute);
appRoutes.use(userRoutes);

export default appRoutes;
