import express, { Express } from "express";
import cors from "cors";
import sequelize from "./config/dbConnection";
import session from "express-session";
import passport from "passport";
import userRoutes from "./routes/userRoutes";
import logger from "./utilis/logger";
import appRoutes from "./routes";

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use(
  session({
    secret: "eagles.team1",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", appRoutes);

sequelize
  .sync()
  .then(() => {
    logger.info("db synchorized");
  })
  .catch((err) => {
    logger.error("error : " + err.message);
  });

export default app;
