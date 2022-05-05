"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {}

  Activity.init(
    {
      // id: DataTypes.STRING,
      activity_image: DataTypes.STRING,
      activity_description: DataTypes.STRING,
      activity_amount: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "activities", //nome da tabela no banco de dados MYSQL
      timestamps: false,
    }
  );

  return Activity;
};
