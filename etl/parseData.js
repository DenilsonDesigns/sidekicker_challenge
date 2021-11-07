const fs = require("fs");
const csv = require("csv-parser");
const dbStore = require("../server/models");
const Job = dbStore.jobs;

// @TODO: change this to change cmdln arg?
const inputFile = "./etl/jobs-list.csv";

const results = [];

fs.createReadStream(inputFile)
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", () => {
    console.log(results);
    Job.sync({ force: true }).then(() => {
      Job.bulkCreate(results);
    });
  });
