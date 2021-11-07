const jobDb = require("../models");
const Jobs = jobDb.jobs;

const getJobs = (req, res) => {
  Jobs.findAll()
    .then((data) => {
      console.log("data from job controller: ");
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

module.exports = {
  getJobs,
};
