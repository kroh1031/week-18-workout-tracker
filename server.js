const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const routes = require("./controllers");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDB", {
  useNewUrlParser: true,
});

//Testing Route
// app.get("/exercise", function (req, res) {
//   res.sendFile(`${__dirname}/public/exercise.html`);
// });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
