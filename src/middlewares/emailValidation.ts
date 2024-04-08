import { NextFunction, Request, Response, request } from "express";

export const emailValidation = async (req:Request , res:Response , next: NextFunction)  =>{
 try {
    
    if(req.body.email){
        return res.status(401).json({
            message: 'You are not allowed to update email field'
        })
    }else{
        return next()
    }
  

 } catch (error: any) {
    return res.status(500).json({
        message: error.message
    })
 }
}

