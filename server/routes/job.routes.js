const express = require("express");
const router = express.Router();
const jobController = require("../controllers/job.controller");

console.log("hit");
router.get("/test", (req, res) => {
  return res.json("api/test");
});
router.get("/api/jobs", jobController.getJobs);
module.exports = router;
