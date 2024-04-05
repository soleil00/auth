import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST ,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  username: "postgres",
  password: "Mine@123",
  database: process.env.DB_NAME ,
});

export default sequelize;