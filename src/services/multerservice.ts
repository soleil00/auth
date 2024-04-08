import { Request } from "express";
const multer = require('multer');
const storage = multer.diskStorage({
  filename: function (req : Request,file : any ,cb : (error:Error | null ,filename:string) => void) {
    cb(null, file.originalname)
  }
});
const uploadService = multer({storage: storage});
export default uploadService