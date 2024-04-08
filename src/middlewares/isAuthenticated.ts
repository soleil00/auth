import { NextFunction, Request, Response } from "express";

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  try {
    req.user
      ? next()
      : res.status(401).json({
          message: "unauthorized",
        });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export default isAuthenticated;
