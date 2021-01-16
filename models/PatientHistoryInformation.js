const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PatientHistoryInformationSchema = new Schema({
  screeningDate: {
    type: Date,
  },
  status: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = PatientHistoryInformation = mongoose.model(
  "PatientHistoryInformation",
  PatientHistoryInformationSchema
);
