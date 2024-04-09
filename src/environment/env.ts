import dotenv from "dotenv";
dotenv.config();

const env = {
  clientId: process.env.GOOGLE_CLIENT_ID as string,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  callbackURL: process.env.GOOGLE_CALLBACK_URL as string,
  dbConnection: process.env.DB_CONNECTION as string,
  port: process.env.PORT,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  smtp_host:process.env.SMTP_HOST,
  smtp_email:process.env.SMTP_EMAIL,
  smtp_pass:process.env.SMTP_PASS,
  smtp_port:process.env.SMTP_PORT
};

export default env;
