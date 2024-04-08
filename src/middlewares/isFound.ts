import { NextFunction, Request, Response } from "express";
import User from "../Database/models/user";
export const isUserFound = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ where: { google_id: id } });
    if (!user) {
      return res.status(404).json({
        message: "user not found",
      });
    }
    return next();
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};