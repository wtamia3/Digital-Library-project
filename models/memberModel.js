const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  address: { type: String },
  joinDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Member", memberSchema);
