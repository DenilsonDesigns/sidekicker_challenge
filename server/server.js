const express = require("express");
const app = express();
const db = require("./models");
const jobRoutes = require("./routes/job.routes");

global.__basedir = __dirname + "/..";

app.use(express.urlencoded({ extended: true }));
app.use("/api", jobRoutes);

db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

app.get("/ping", (req, res) => {
  return res.json("pong");
});

let port = 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
