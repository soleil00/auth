import jwt from "jsonwebtoken";
import User from "../Database/models/user";
export const generateUserToken = async (user: any) => {
  try {
    const token = jwt.sign({ userId: user.google_id }, "team1", {
      expiresIn: "30d",
    });
    return token;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
export const decodeUserToken = async (token: string) => {
  try {
    const decoded = jwt.verify(token, "team1");
    //@ts-ignore
    const user = await User.findOne({ where: { google_id: decoded.userId } });
    if (!user) {
      throw new Error("user not found");
    }
    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};