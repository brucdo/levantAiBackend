"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cycle extends Model {}

  Cycle.init(
    {
      // id: DataTypes.STRING,
      user_id: DataTypes.STRING,
      start_focus: DataTypes.STRING,
      end_focus: DataTypes.STRING,
      start_break: DataTypes.STRING,
      end_break: DataTypes.STRING,
      activity_id: DataTypes.STRING,
      activity_status: DataTypes.STRING,
      feedback: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "cycles", //nome da tabela no banco de dados MYSQL
      timestamps: false,
    }
  );

  return Cycle;
};
