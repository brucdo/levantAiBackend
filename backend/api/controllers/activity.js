const { Sequelize, DataTypes } = require("sequelize");
const Activity = require("../models/activity");

const config = new Sequelize("levantai", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = {
  async getAll(req, res) {
    const sequelize = config;
    const activity = await Activity(sequelize, DataTypes).findAll();
    res.status(200).send(activity);
  },

  async getOne(req, res) {
    const sequelize = config;
    const id = req.params.id;
    const activity = await Activity(sequelize, DataTypes)
      .findOne({
        where: { id: id },
      })
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Activity with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: `Error retrieving Activity with id=${id}`,
        });
      });
  },

  async create(req, res) {
    const sequelize = config;
    await Activity(sequelize, Sequelize.DataTypes).create({
      // id: req.body.id,
      activity_image: req.body.activity_image,
      activity_description: req.body.activity_description,
      activity_amount: req.body.activity_amount,
    });
    res.status(200).send({ mensagem: "Activity was created successfully" });
  },

  async update(req, res) {
    const sequelize = config;
    const id = req.params.id;
    await Activity(sequelize, Sequelize.DataTypes)
      .update(
        {
          activity_image: req.body.activity_image,
          activity_description: req.body.activity_description,
          activity_amount: req.body.activity_amount,
        },
        { where: { id: id } }
      )
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Activity was updated successfully.",
          });
        } else {
          res.send({
            message: `Cannot update Activity with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: `Error updating Activity with id=${id}.`,
        });
      });
  },

  async delete(req, res) {
    const sequelize = config;
    const id = req.params.id;
    await Activity(sequelize, Sequelize.DataTypes)
      .destroy({
        where: { id: id },
      })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Activity was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete Activity with id=${id}. Maybe Activity was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: `Error updating Activity with id=${id}.`,
        });
      });
  },
};
