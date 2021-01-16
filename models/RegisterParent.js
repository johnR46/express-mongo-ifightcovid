const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RegisterParentSchema = new Schema({
  firstNameLastName: {
    type: String,
  },
  personId: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  address: {
    type: String,
  },
  district: {
    type: String,
  },
  phone: {
    type: String,
  },
});

module.exports = RegisterParent = mongoose.model(
  "RegisterParent",
  RegisterParentSchema
);

/// ตารางลงทะเบียนผู้ป่วย
