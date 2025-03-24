const express = require("express");
const Report = require("../models/Report.js"); 
const authMiddleware = require("../middleware/authMiddleware.js"); 

const router = express.Router();

// Submit a crime report
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { incidentType, date, time, location, evidence, isAnonymous } = req.body;
    const report = new Report({
      incidentType,
      date,
      time,
      location,
      evidence,
      isAnonymous,
      user: req.user.id,
    });

    await report.save();
    res.json({ message: "Report submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Fetch all reports
router.get("/", authMiddleware, async (req, res) => {
  try {
    const reports = await Report.find().populate("user", "name email");
    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
