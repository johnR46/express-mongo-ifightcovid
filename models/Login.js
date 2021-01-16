const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LoginSchema = new Schema({
  user: {
    type: String
  },
  password: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
});
module.exports = Login = mongoose.model("Login", LoginSchema);
