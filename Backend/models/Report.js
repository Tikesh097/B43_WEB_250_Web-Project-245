const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  incidentType: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  evidence: { type: [String], required: false },
  isAnonymous: { type: Boolean, default: false },
});

const Report = mongoose.model("Report", reportSchema);


module.exports = Report;
