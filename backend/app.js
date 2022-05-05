const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const userRoters = require("./api/routes/user");
const activityRoters = require("./api/routes/activity");
const cycleRoters = require("./api/routes/cycle");

app.listen(3000);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/user", userRoters);
app.use("/activity", activityRoters);
app.use("/cycle", cycleRoters);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});
