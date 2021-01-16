const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Form14dayPatientSchema = new Schema({
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

module.exports = Form14dayPatient = mongoose.model(
  "Form14dayPatient",
  Form14dayPatientSchema
);

// ตารางดึงข้อมูลผู้ป่วย ที่บันทึกฟอร์มมาโชว๋
