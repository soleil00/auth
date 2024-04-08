import { Response,Request } from "express";
import passport from "passport";
import User from "../Database/models/user";


export const authenticateUser = passport.authenticate("google", {
  scope: ["email", "profile"],
});

export const callbackFn = passport.authenticate("google", {
  successRedirect: "/auth/google/success",
  failureRedirect: "/auth/google/failure",
});

const handleSuccess = async (req: Request, res: Response) => {};

export const handleUpdate = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { first_name, last_name, full_name } = req.body;
  try {
    const foundUser = await User.findOne({
      where: { google_id: id },
    });
    //@ts-ignore
    foundUser!.first_name = first_name;
    //@ts-ignore
    foundUser!.last_name = last_name;
    //@ts-ignore
    foundUser!.full_name = full_name;
    await foundUser!.save();
    res.status(200).json({
      message: "User information updated successfully",
      user: foundUser,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
