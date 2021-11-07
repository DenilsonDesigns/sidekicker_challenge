const jobDb = require("../models");
const Jobs = jobDb.jobs;

const getJobs = (req, res) => {
  Jobs.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Could not retrieve jobs.",
      });
    });
};

module.exports = {
  getJobs,
};
