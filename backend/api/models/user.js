"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init(
    {
      // id: DataTypes.STRING,
      user_email: DataTypes.STRING,
      user_type: DataTypes.STRING,
      user_name: DataTypes.STRING,
      user_level: DataTypes.STRING,
      user_experience: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "users", //nome da tabela no banco de dados MYSQL
      timestamps: false,
    }
  );

  return User;
};
