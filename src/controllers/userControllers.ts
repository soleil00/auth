import { Request, Response } from "express";

export const handleSuccess = async (req: Request, res: Response) => {
  const user = req.user;
  try {
    res.status(200).json({
      message: "success",
      data: user,
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
