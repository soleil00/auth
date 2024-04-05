import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const loadConnection = (): string => {
    const dbConnection = process.env.DbConnection;
    if (!dbConnection) {
        throw new Error('Database connection string is not provided in the environment variables.');
    }
    return dbConnection;
}

const sequelizeInstance = new Sequelize(loadConnection());

export default sequelizeInstance;
