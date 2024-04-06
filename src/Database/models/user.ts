import { DataTypes } from "sequelize";
import sequelizeInstance from "../../config/dbConnection";

const User = sequelizeInstance.define("user", {
  firstName: {
    type: DataTypes.STRING,
    field: "first_name",
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "last_name",
    validate: {
      notEmpty: true,
    },
  },
  fullName: {
    type: DataTypes.STRING,
    field: "full_name",
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: DataTypes.STRING,
    field: "email",
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    field: "password",
    allowNull: true,
  },
  googleId: {
    type: DataTypes.STRING,
    field: "google_id",
    allowNull: false,
  },
});

export default User;
