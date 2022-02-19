const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      unique: true,
    },
    picture: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      unique: true,
    },
    bio: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
