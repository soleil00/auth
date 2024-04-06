import { Request, Response, Router } from "express";

const homeRoute = Router();

homeRoute.get("/", (req: Request, res: Response) => {
  res.send("<a href='/auth/google'>Login with google</a>");
});

export default homeRoute;
