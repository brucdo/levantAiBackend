const { Sequelize, DataTypes } = require("sequelize");
const Cycle = require("../models/cycle");

const config = new Sequelize("levantai", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

//formto datetime YYYY-MM-DD hh:mm:ss
module.exports = {
  async getAll(req, res) {
    const sequelize = config;
    const cycle = await Cycle(sequelize, DataTypes).findAll();
    res.status(200).send(cycle);
  },

  async getOne(req, res) {
    const sequelize = config;
    const id = req.params.id;
    const cycle = await Cycle(sequelize, DataTypes)
      .findOne({
        where: { id: id },
      })
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Cycle with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: `Error retrieving Cycle with id=${id}`,
        });
      });
  },

  async create(req, res) {
    const sequelize = config;
    await Cycle(sequelize, Sequelize.DataTypes).create({
      // id: req.body.id,
      user_id: req.body.user_id,
      start_focus: req.body.start_focus,
      end_focus: req.body.end_focus,
      start_break: req.body.start_break,
      end_break: req.body.end_break,
      activity_id: req.body.activity_id,
      activity_status: req.body.activity_status,
      feedback: req.body.feedback,
    });
    res.status(200).send({ mensagem: "Cycle was created successfully" });
  },

  async update(req, res) {
    const sequelize = config;
    const id = req.params.id;
    await Cycle(sequelize, Sequelize.DataTypes)
      .update(
        {
          user_id: req.body.user_id,
          start_focus: req.body.start_focus,
          end_focus: req.body.end_focus,
          start_break: req.body.start_break,
          end_break: req.body.end_break,
          activity_id: req.body.activity_id,
          activity_status: req.body.activity_status,
          feedback: req.body.feedback,
        },
        { where: { id: id } }
      )
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Cycle was updated successfully.",
          });
        } else {
          res.send({
            message: `Cannot update Cycle with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: `Error updating Cycle with id=${id}.`,
        });
      });
  },

  async delete(req, res) {
    const sequelize = config;
    const id = req.params.id;
    await Cycle(sequelize, Sequelize.DataTypes)
      .destroy({
        where: { id: id },
      })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Cycle was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete Cycle with id=${id}. Maybe Cycle was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: `Error updating Cycle with id=${id}.`,
        });
      });
  },
};
