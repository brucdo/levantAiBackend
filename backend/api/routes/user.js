const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

router.get("/", (req, res) => {
  userController.getAll(req, res);
});

router.get("/:id", (req, res) => {
  userController.getOne(req, res);
});

router.post("/", (req, res) => {
  userController.create(req, res);
});

router.put("/:id", (req, res) => {
  userController.update(req, res);
});

router.delete("/:id", (req, res) => {
  userController.delete(req, res);
});

module.exports = router;
