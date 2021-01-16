const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionHealtformSchema = new Schema({
  question: {
    type: String,
  },
  answer: {
    type: String,
  },
});

module.exports = QuestionHealtform = mongoose.model(
  "QuestionHealtform",
  QuestionHealtformSchema
);
////ตารางบันทึกคำถามสุขภาพก่อนรับการคัดกรองโรคประจำตัว  : Questionhealtfrom
