import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../Database/models/user";
export const isLoggedIn = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers && req.headers.authorization?.split(" ")[1];
  try {
    if (token) {
      const decoded = jwt.verify(token, "team1");
      //@ts-ignore
      const user = await User.findOne({ where: { google_id: decoded.userId } });
      if (!user) {
        return res.status(404).json({
          message: "user not found",
        });
      }
      req.currentUser = user;
      return next();
    } else {
      return res.status(400).json({
        message: "No token provided",
      });
    }
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};