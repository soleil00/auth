import { Sequelize } from "sequelize";
import env from "../environment/env";
import logger from "../utilis/logger";

const sequelizeInstance = new Sequelize(env.dbConnection);

const loadConnection = async () => {
  try {
    await sequelizeInstance.authenticate();
    logger.info("Connected to DB");
  } catch (error: any) {
    logger.error("failed to connect to database : " + error.message);
  }
};

loadConnection();

export default sequelizeInstance;
