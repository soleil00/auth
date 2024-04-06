import { Response } from "express";
import passport from "passport";

export const authenticateUser = passport.authenticate("google", {
  scope: ["email", "profile"],
});

export const callbackFn = passport.authenticate("google", {
  successRedirect: "/auth/google/success",
  failureRedirect: "/auth/google/failure",
});

const handleSuccess = async (req: Request, res: Response) => {};
