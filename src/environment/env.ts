import dotenv from "dotenv";
dotenv.config();

const env = {
  clientId: process.env.GOOGLE_CLIENT_ID as string,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  callbackURL: process.env.GOOGLE_CALLBACK_URL as string,
  dbConnection: process.env.DB_CONNECTION as string,
};

export default env;
