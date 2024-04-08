import { DataTypes } from "sequelize";
import sequelizeInstance from "../../config/dbConnection";

const User = sequelizeInstance.define("user", {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "first_name",
    validate: {
      notEmpty: true,
    },
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "last_name",
    validate: {
      notEmpty: true,
    },
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "full_name",
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profile: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  google_id: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "google_id",
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default User;
