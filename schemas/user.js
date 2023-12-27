const mongoose = require("mongoose");
const BoardSchema = new mongoose.Schema({
  _id: String,
  fullName: String,
  password: String,
  email: String,
});
