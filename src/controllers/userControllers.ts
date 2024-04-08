import { Request, Response } from "express";
import User from "../Database/models/user";
import { UserAttributes, UserProfile } from "../types";
import * as jwtService from "../services/webtokenservice";


export const handleSuccess = async (req: Request, res: Response) => {
  //@ts-ignore
  const user: UserProfile = req.user;

   
   

  try {
    const foundUser: any  = await User.findOne({
      where:{google_id: user.id}
    })
     
    if(foundUser){
     const token = await jwtService.generateUserToken(foundUser)
      return res.status(200).json({
      token: token,
       message: 'success',
       data: foundUser 
      }) 
    }else{
      const newUser: any = await User.create({
        first_name: user.name.familyName,
        last_name: user.name.givenName,
        full_name: user.displayName,
        email: user.emails[0].value,
        google_id: user.id,
        profile: user.photos[0].value,
        password: user.emails[0].value,
      });
     const token = jwtService.generateUserToken(newUser)
     return  res.status(201).json({
        token: token,
        message: "success",
        data: newUser,
      });

    }
    
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
