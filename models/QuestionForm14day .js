const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionForm14daySchema = new Schema({
  question: {
    type: String,
  },
  answer: {
    type: String,
  },
});

module.exports = QuestionForm14day = mongoose.model(
  "QuestionForm14day",
  QuestionForm14daySchema
);

///ตารางบันทึกฟอร์มคำถาม 14 วันผู้ป่วย  :  Questionform14daypatient
