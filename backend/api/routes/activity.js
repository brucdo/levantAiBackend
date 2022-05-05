const express = require("express");
const router = express.Router();

const activityController = require("../controllers/activity");

router.get("/", (req, res) => {
  activityController.getAll(req, res);
});

router.get("/:id", (req, res) => {
  activityController.getOne(req, res);
});

router.get("/:id", (req, res) => {
  activityController.getAll(req, res);
});

router.post("/", (req, res) => {
  activityController.create(req, res);
});

router.put("/:id", (req, res) => {
  activityController.update(req, res);
});

router.delete("/:id", (req, res) => {
  activityController.delete(req, res);
});

module.exports = router;
