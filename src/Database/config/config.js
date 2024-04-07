const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    url: process.env.DB_CONNECTION,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Depending on your database setup, you might need this option
      },
    },
  },
  test: {
    url: process.env.DB_CONNECTION,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Depending on your database setup, you might need this option
      },
    },
  },
  production: {
    url: process.env.DB_CONNECTION,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Depending on your database setup, you might need this option
      },
    },
  },
};
