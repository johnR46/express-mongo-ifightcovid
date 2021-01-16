const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionScreeningSchema = new Schema({
  question: {
    type: String,
  },
  answer: {
    type: String,
  },

});

module.exports = QuestionScreening = mongoose.model(
  "QuestionScreening",
  QuestionScreeningSchema
);

//       ตารางเก็บข้อมูลแบบประเมินผู้ป่วย : ตาราง QuestionScreening
