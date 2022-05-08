const { Sequelize, DataTypes } = require("sequelize");
const User = require("../models/user");

const config = new Sequelize("levantai", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = {
  async getAll(req, res) {
    const sequelize = config;
    const user = await User(sequelize, DataTypes).findAll();
    res.status(200).send(user);
  },

  async getOne(req, res) {
    const sequelize = config;
    const id = req.params.id;
    const user = await User(sequelize, DataTypes)
      .findOne({
        where: { id: id },
      })
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find User with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: `Error retrieving User with id=${id}`,
        });
      });
  },

  async create(req, res) {
    const sequelize = config;
    await User(sequelize, Sequelize.DataTypes).create({
      // id: req.body.id,
      user_email: req.body.user_email,
      user_type: req.body.user_type,
      user_name: req.body.user_name,
      user_level: req.body.user_level,
      user_experience: req.body.user_experience,
    });
    res.status(200).send({ mensagem: "User was created successfully" });
  },

  async update(req, res) {
    const sequelize = config;
    const id = req.params.id;
    await User(sequelize, Sequelize.DataTypes)
      .update(
        {
          user_email: req.body.user_email,
          user_type: req.body.user_type,
          user_name: req.body.user_name,
          user_level: req.body.user_level,
          user_experience: req.body.user_experience,
        },
        { where: { id: id } }
      )
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "User was updated successfully.",
          });
        } else {
          res.send({
            message: `Cannot update User with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: `Error updating User with id=${id}.`,
        });
      });
  },

  async delete(req, res) {
    const sequelize = config;
    const id = req.params.id;
    await User(sequelize, Sequelize.DataTypes)
      .destroy({
        where: { id: id },
      })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "User was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete User with id=${id}. Maybe User was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: `Error updating User with id=${id}.`,
        });
      });
  },
};
