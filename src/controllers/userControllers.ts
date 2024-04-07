import { Request, Response } from "express";
import User from "../Database/models/user";
import { UserProfile } from "../types";

export const handleSuccess = async (req: Request, res: Response) => {
  //@ts-ignore
  const user: UserProfile = req.user;

  try {
    const newUser = await User.create({
      first_name: user.name.familyName,
      last_name: user.name.givenName,
      full_name: user.displayName,
      email: user.emails[0].value,
      google_id: user.id,
      profile: user.photos[0].value,
      password: "soleil-did",
    });

    res.status(200).json({
      message: "success",
      data: newUser,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const handleFailure = async (req: Request, res: Response) => {
  try {
    res.status(401).json({
      message: "unauthorized",
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const allUsers = await User.findAll();

    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500);
  }
};
