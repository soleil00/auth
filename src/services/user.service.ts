import { Response,Request } from "express";
import passport from "passport";
import User from "../Database/models/user";
import cloudinary from "../config/cloudinary";


export const authenticateUser = passport.authenticate("google", {
  scope: ["email", "profile"],
});

export const callbackFn = passport.authenticate("google", {
  successRedirect: "/auth/google/success",
  failureRedirect: "/auth/google/failure",
});

const handleSuccess = async (req: Request, res: Response) => {};

export const handleUpdate = async (req: any, res: Response) => {
  const { id } = req.params;
  const { first_name, last_name, full_name } = req.body;
  try {
    const foundUser = await User.findOne({
      where: { google_id: id },
    });
    const result = await cloudinary.uploader.upload(req.file.path)
    if(req.file){
      //@ts-ignore
       foundUser!.profile = result.secure_url
    }
    //@ts-ignore
   first_name ? foundUser.first_name =  first_name:foundUser
    //@ts-ignore
   last_name ? foundUser.last_name = last_name:foundUser
    //@ts-ignore
   full_name ? foundUser.full_name = full_name:foundUser
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
