const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Sneaker extends Model {}

Sneaker.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    styleID: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
    make: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "sneaker",
  }
);

module.exports = Sneaker;
