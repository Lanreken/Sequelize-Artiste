const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../database/database");

class Artiste extends Model {}

Artiste.init(
  {
    // Model attributes are defined here
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    record_label: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_Married: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM(['Male', 'Female']),
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "Artistes", // We need to choose the model name
    timestamps: true,
  }
);

module.exports = Artiste