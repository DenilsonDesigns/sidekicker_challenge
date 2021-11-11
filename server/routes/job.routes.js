const express = require("express");
const router = express.Router();
const jobController = require("../controllers/job.controller");

router.get("/test", (req, res) => {
  return res.json("api/test");
});
router.get("/jobs", jobController.getJobs);
module.exports = router;
