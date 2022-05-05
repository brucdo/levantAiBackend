const express = require("express");
const router = express.Router();

const cycleController = require("../controllers/cycle");

router.get("/", (req, res) => {
  cycleController.getAll(req, res);
});

router.get("/:id", (req, res) => {
  cycleController.getOne(req, res);
});

router.post("/", (req, res) => {
  cycleController.create(req, res);
});

router.put("/:id", (req, res) => {
  cycleController.update(req, res);
});

router.delete("/:id", (req, res) => {
  cycleController.delete(req, res);
});

module.exports = router;
