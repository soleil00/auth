import { NextFunction, Request, Response } from "express";
import User from "../Database/models/user";
export const hasPermission = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //@ts-ignore
  const currentUser = req.currentUser;
  const { id } = req.params;
  try {
    const user = await User.findOne({ where: { google_id: id } });
    //@ts-ignore
    if (currentUser.google_id === user.google_id) {
      return next();
    } else {
      return res.status(401).json({
        message: "You are not authorized to perform this action",
      });
    }
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};






